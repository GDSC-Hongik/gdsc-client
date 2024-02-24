import { Status } from '@/types/status';

export type User = {
  studentId: string; // C000000 (학번)
  name: string;
  phone: string; // 01012345678
  department: string; // D001(학과 code)
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
