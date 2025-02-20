import { Status, UnivEmailStatus } from '@/types/status';

export type User = {
  memberId: string; // C000000 (학번)
  role: UserRoleType;
  basicInfo: UserBasicInfo;
  associateRequirement: {
    univStatus: UnivEmailStatus;
    discordStatus: Status;
    infoStatus: Status;
  };
};

export type UserRoleType = 'GUEST' | 'ASSOCIATE' | 'REGULAR';

export type AssociateRequirement = {
  univStatus: UnivEmailStatus;
  discordStatus: Status;
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
