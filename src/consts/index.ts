import { UserRole } from '../enums';
import { Bus, Button, Cart, User } from '../types';

const numb = 10;

const snils: number = 12312312300;

const fullName: string = 'Pepe';

const isOpen: boolean = true;

const employeeList: number[] = [1, 2, 3];

const store: null = null;

const nothingHere: undefined = undefined;

const bus: Bus = {
  id: 'bus-0001',
  serialNumber: 123123123,
  airConId: null,
};

const cart: Cart = {
  wheels: 4,
  chairs: 1,
};

const paz: Cart<Bus> = {
  wheels: 4,
  chairs: 33,
  id: 'paz-01',
  serialNumber: 1001,
};

const firstName = 10;

export const user: {
  name: number;
} = {
  name: firstName,
};

const button: Button<string> = {
  onClick: (value) => {
    console.log(value);
  },
};

const boat: Omit<Cart, 'wheels'> = {
  chairs: 2,
  color: 'silver',
};

type GetCurrentTime = () => string;

export const getCurrentTime: GetCurrentTime = () => {
  return new Date().toISOString().slice(11, 19);
};

const draftUser: User = {
  name: 'Pepe',
  role: UserRole.ADMIN,
};
