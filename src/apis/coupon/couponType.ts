import { MeResponse } from '../me/meType';

export interface CouponResponse {
  issuedCouponId: number;
  member: Omit<MeResponse, 'department' | 'discordUsername' | 'nickname'>;
  couponName: string;
  discountAmount: number;
  usedAt: string;
  issuedAt: string;
  isUsed: boolean;
  isRevoked: boolean;
}
