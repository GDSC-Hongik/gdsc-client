import type { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

import DropDown from 'wowds-ui/DropDown';
import DropDownOption from 'wowds-ui/DropDownOption';

import couponApi from '@/apis/coupon/couponApi';
import { CouponResponse } from '@/apis/coupon/couponType';
import { useProduct } from '@/hooks/zustand/useProduct';

import { Flex, Text } from '../common/Wrapper';

export const CouponDropDown = () => {
  const { data: coupons } = useQuery({
    queryKey: ['coupon'],
    queryFn: couponApi.GET_COUPONS_ME
  });

  const { issuedCouponId, strDiscount, setDiscount } = useProduct();

  const handleChange = (value: {
    selectedValue: string;
    selectedText: ReactNode;
  }) => {
    if (coupons?.length) {
      const coupon = coupons.find(
        (coupon) => coupon.issuedCouponId === +value.selectedValue
      );
      if (coupon) setDiscount(coupon.discountAmount, coupon.issuedCouponId);
    }
  };

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        할인 쿠폰
      </Text>
      <DropDown
        style={{ width: '100%' }}
        placeholder="목록을 눌러 선택하세요"
        value={issuedCouponId?.toString()}
        onChange={handleChange}>
        {coupons?.length ? (
          coupons.map((coupon: CouponResponse) => (
            <DropDownOption
              key={coupon.issuedCouponId}
              text={`${coupon.couponName} (-${coupon.discountAmount.toLocaleString()}원)`}
              value={coupon.issuedCouponId.toString()}
            />
          ))
        ) : (
          <DropDownOption text={'보유한 쿠폰이 없어요'} value={'0'} />
        )}
      </DropDown>
      <Flex gap="xxs" justify="flex-end">
        <Text typo="label1" color="sub">
          예상 할인금액
        </Text>
        <Text typo="label1" color="textBlack">
          {strDiscount}원
        </Text>
      </Flex>
    </Flex>
  );
};
