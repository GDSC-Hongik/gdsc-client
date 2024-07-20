import { Status } from '@/types/status';

export type User = {
  memberId: string; // C000000 (학번)
  role: UserRoleType;
  basicInfo: UserBasicInfo;
  associateRequirement: {
    univStatus: Status;
    discordStatus: Status;
    bevyStatus: Status;
    infoStatus: Status;
  };
};

export type UserRoleType = 'GUEST' | 'ASSOCIATE' | 'REGULAR' | 'ADMIN';

export type AssociateRequirement = {
  univStatus: Status;
  discordStatus: Status;
  bevyStatus: Status;
  infoStatus: Status;
};

export type UserBasicInfo = {
  name: string;
  studentId: string;
  email: string;
  department: string;
  phone: string;
  discordUsername: string;
  nickname: string;
};
