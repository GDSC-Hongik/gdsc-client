import { Status } from '@/types/status';
import { User } from '@/types/user';

export interface MemberBasicInfoType {
  studentId: string;
  name: string;
  phone: string;
  department: string;
  email: string;
}

export interface MemberInfoResponse {
  member: User;
  currentRecruitmentRound: CurrentRecruitmentType;
  currentMembership: CurrentMembershipType;
}

export interface CurrentRecruitmentType {
  recruitmentId: number;
  name: string;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
  fee: number;
  roundType: 'FIRST' | 'SECOND';
  roundTypeValue: string;
}

export interface CurrentMembershipType {
  membershipId: number;
  memberId: number;
  recruitmentId: number;
  regularRequirement: {
    paymentStatus: Status;
    allSatisfied: boolean;
    paymentSatisfied: boolean;
  };
}
