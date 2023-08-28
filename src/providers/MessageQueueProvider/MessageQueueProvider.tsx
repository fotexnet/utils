import Pusher, { Channel } from 'pusher-js';
import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { Message } from '../../interfaces/Message';
import { Context } from './types';

function MessageQueueProvider({
  pusherClient,
  project,
  historyUrl,
  children,
}: PropsWithChildren<{ pusherClient: Pusher; project: string; historyUrl: string }>): JSX.Element {
  const globalChannelName = useMemo(() => `${project}-global`, [project]);
  const [globalChannel, setGlobalChannel] = useState<Channel | null>(null);
  const [history, setHistory] = useState<Message[]>([]);

  const recieveMessage = useCallback((callback: (data: Message) => void) => {
    return (message: string) => {
      const data: Message = JSON.parse(message);
      return callback(data);
    };
  }, []);

  const addGlobalEventListener = useCallback(
    (event: string, callback: (data: Message) => void) => {
      globalChannel?.bind(
        event,
        recieveMessage(data => {
          setHistory(prev => [data, ...prev]);
          callback(data);
        })
      );
    },
    [globalChannel]
  );

  useEffect(() => {
    setGlobalChannel(pusherClient.subscribe(globalChannelName));
    return () => {
      globalChannel?.unbind_all().unsubscribe();
    };
  }, []);

  return (
    <Context.Provider
      value={{
        historyUrl,
        project,
        pusherClient,
        globalChannel,
        history,
        setHistory,
        addGlobalEventListener,
        recieveMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default MessageQueueProvider;
