import { User } from '@/types/user';

export interface MemberInfoResponse extends User {
  memberId: number;
  paymentStatus: 'PENDING' | 'VERIFIED';
  discordStatus: 'PENDING' | 'VERIFIED';
  bevyStatus: 'PENDING' | 'VERIFIED';
  role: 'GUEST' | 'USER' | 'ADMIN';
  depositorName: string;
  registrationStatus: 'APPLIED' | 'PENDING' | 'GRANTED';
}
