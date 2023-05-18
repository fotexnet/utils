export type PaginationObject<T> = {
  data: T;
  current_page: number;
  last_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
  path: string;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  links: { url: string; label: string; active: boolean }[];
};
