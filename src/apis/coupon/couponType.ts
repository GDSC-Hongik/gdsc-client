export interface Coupon {
  issuedCouponId: number;
  member: {
    memberId: number;
    name: string;
    email: string;
    phone: string;
  };
  couponName: string;
  discountAmount: number;
  usedAt: string;
  isUsed: boolean;
}
