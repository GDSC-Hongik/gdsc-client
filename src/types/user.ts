import { Status } from '@/types/status';

export type User = {
  name: string;
  studentId: string;
  phone: string;
  department: string;
  email: string;

  discordUsername: string;
  nickname: string;
  univEmail: string;
  discordStatus: Status;
  emailStatus: Status;
};

export type GuestUser = Pick<
  User,
  'name' | 'studentId' | 'phone' | 'department' | 'email'
>;
