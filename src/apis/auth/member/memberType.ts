export interface MemberInfoResponse {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: string;
  email: string;
  discordUsername: string;
  nickname: string;
  paymentStatus: 'PENDING' | 'VERIFIED';
  discordStatus: 'PENDING' | 'VERIFIED';
  bevyStatus: 'PENDING' | 'VERIFIED';
  role: 'GUEST' | 'USER' | 'ADMIN';
  depositorName: string;
  registrationStatus: 'APPLIED' | 'PENDING' | 'GRANTED';
}
