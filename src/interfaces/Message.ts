export type Message = {
  id: number;
  message: string;
  read: boolean;
  read_url: string | null;
  delete_url: string | null;
} & (
  | { type: 'info' | 'success' | 'warning' | 'error'; options: Options | null }
  | { type: 'custom'; options: CustomOptions | null }
);

type SharedOptions = {
  url?: string;
};

type Options = SharedOptions;

type CustomOptions = SharedOptions & {
  icon?: string;
  color?: string;
};
