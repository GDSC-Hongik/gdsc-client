export interface OrderRequest {
  orderNanoId: string;
  membershipId: number;
  issuedCouponId: number | null;
  totalAmount: number;
  discountAmount: number;
  finalPaymentAmount: number;
}

export interface OrderCompleteRequest {
  paymentKey: string;
  orderNanoId: string;
  amount: number;
}
