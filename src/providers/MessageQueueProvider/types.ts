import Pusher, { Channel } from 'pusher-js';
import { Dispatch, SetStateAction, createContext } from 'react';
import { Message } from 'src/interfaces/Message';

export const Context = createContext<(MessageQueueBase & MessageQueueMeta) | null>(null);

export type MessageQueueMeta = {
  pusherClient: Pusher;
  project: string;
  historyUrl: string;
  setHistory: Dispatch<SetStateAction<Message[]>>;
  recieveMessage: (callback: (data: Message) => void) => (message: string) => void;
};

export type MessageQueueBase = {
  globalChannel: Channel | null;
  history: Message[];
  addGlobalEventListener: (event: string, callback: (data: Message) => void) => void;
};

export type MessageQueue = MessageQueueBase & {
  privateChannel: Channel | null;
  addEventListener: (event: string, callback: (data: Message) => void) => void;
  getUnreadMessages: () => void;
  readMessage: (message: Message) => void;
  deleteMessage: (message: Message) => void;
};
