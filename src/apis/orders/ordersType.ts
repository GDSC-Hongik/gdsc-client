export interface OrderRequest {
  orderNanoId: string;
  membershipId: number;
  issuedCouponId: number | null;
  totalAmount: number;
  discountAmount: number;
  finalPaymentAmount: number;
}
