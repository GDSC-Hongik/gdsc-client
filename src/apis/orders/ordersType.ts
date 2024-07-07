export interface OrderRequest {
  orderNanoId: string;
  membershipId: number;
  issuedCouponId: number;
  totalAmount: number;
  discountAmount: number;
  finalPaymentAmount: number;
}
