import axios, { AxiosRequestConfig } from 'axios';
import { Channel } from 'pusher-js';
import { useContext, useState, useCallback, useEffect } from 'react';
import sha256 from 'sha256';
import IResponse from '../../interfaces/IResult';
import { Message } from '../../interfaces/Message';
import findLastIndex from '../../utils/findLastIndex/findLastIndex';
import { Context, MessageQueue, MessageQueueBase, MessageQueueMeta } from './types';

function useMessageQueueContext(): MessageQueueBase & MessageQueueMeta {
  const context = useContext(Context);
  if (context === null) throw new Error();
  return context;
}

function useMessageQueue(userId?: number): MessageQueue {
  const context = useMessageQueueContext();
  const [privateChannel, setPrivateChannel] = useState<Channel | null>(null);

  const addEventListener = useCallback(
    (event: string, callback: (data: Message) => void) => {
      privateChannel?.bind(
        event,
        context.recieveMessage(data => {
          context.setHistory(prev => [data, ...prev]);
          callback(data);
        })
      );
    },
    [privateChannel]
  );

  const readMessage = useCallback((message: Message) => {
    if (!message.read_url || message.read === true) return;
    const callback = () => {
      context.setHistory(prev => {
        const arr = [...prev];
        const index = arr.findIndex(x => x.id === message.id);
        const lastIndex = findLastIndex(arr, x => x.read === false);

        if (index !== lastIndex && lastIndex !== -1) {
          const [removedItem] = arr.splice(index, 1);
          const newLastIndex = findLastIndex(arr, x => x.read === false);
          arr.splice(newLastIndex + 1, 0, removedItem);
          arr[newLastIndex + 1].read = true;
        } else if (lastIndex !== -1) {
          arr[lastIndex].read = true;
        }

        return [...arr];
      });
    };
    axios
      .put(message.read_url)
      .then(callback)
      .catch(callback);
  }, []);

  const deleteMessage = useCallback((message: Message) => {
    if (!message.delete_url) return;
    const callback = () => {
      context.setHistory(prev => prev.filter(x => x.id !== message.id));
    };
    axios
      .delete(message.delete_url)
      .then(callback)
      .catch(callback);
  }, []);

  const getUnreadMessages = useCallback(() => {
    return context.history.filter(message => message.read === false);
  }, [history]);

  useEffect(() => {
    const conf = { params: { target: userId } } as AxiosRequestConfig<unknown>;
    axios
      .get<IResponse<{ notifications: Message[] }>>(context.historyUrl, conf)
      .then(({ data }) => context.setHistory(data.data.notifications));
  }, []);

  useEffect(() => {
    if (!userId) setPrivateChannel(null);
    else setPrivateChannel(context.pusherClient.subscribe(sha256(`${context.project}-${userId}`)));
    return () => {
      privateChannel?.unbind_all().unsubscribe();
    };
  }, [context.project, userId]);

  return {
    privateChannel,
    globalChannel: context.globalChannel,
    history: context.history,
    addGlobalEventListener: context.addGlobalEventListener,
    addEventListener,
    readMessage,
    deleteMessage,
    getUnreadMessages,
  };
}

export default useMessageQueue;
