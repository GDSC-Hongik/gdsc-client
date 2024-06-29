import { Status } from '@/types/status';

export type User = {
  memberId: string; // C000000 (학번)
  role: UserRole;
  basicInfo : UserBasicInfo
  associateRequirement: {
    univStatus: Status,
    discordStatus: Status,
    bevyStatus: Status,
    infoStatus: Status
  }
};

export type GuestUser = Pick<
  UserBasicInfo,
  'name' | 'studentId' | 'phone' | 'department' | 'email'
>;

export type UserRole = 'GUEST' | 'ASSOCIATE' | 'REGULAR' | 'ADMIN'

export type UserBasicInfo = {
  name: string;
  studentId: string;
  email: string;
  department: string;
  phone: string;
  discordUsername: string;
  nickname:string;
}