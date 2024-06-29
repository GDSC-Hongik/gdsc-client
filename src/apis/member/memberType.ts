import { Status } from '@/types/status';
import { User } from '@/types/user';

export interface MemberInfoResponse {
  member: User;
  currentRecruitment: {
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
  };
  currentMembership: {
    membershipId: number;
    memberId: number;
    recruitmentId: number;
    regularRequirement: {
      paymentStatus: Status;
      allSatisfied: boolean;
      paymentSatisfied: boolean;
    };
  };
}

export interface DashboardResponse extends User {}
