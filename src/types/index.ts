export type Bus = {
  id: string;
  serialNumber: number;
  airConId?: string | null;
};

export type Cart<T = unknown> = T & {
  wheels: number;
  chairs: number;
  color?: 'black' | 'white' | 'silver';
};

export type Button<T> = {
  onClick?: (value: T) => void;
};

export type User = {
  name: string;
  role: string;
};

const list = [1, 2, 3].reduce<Array<Record<string, number>>>(
  (acc, i) => [
    ...acc,
    {
      id: i,
    },
  ],
  []
);
