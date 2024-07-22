import { useState, useEffect } from 'react';
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

  const { strDiscount, setDiscount } = useProduct();

  const [selectedCoupon, setSelectedCoupon] = useState<CouponResponse | null>(
    coupons && coupons.length ? coupons[0] : null
  );

  useEffect(() => {
    if (selectedCoupon) {
      setDiscount(selectedCoupon.discountAmount, selectedCoupon.issuedCouponId);
    }
  }, [selectedCoupon, setDiscount]);

  const handleChange = (value: string) => {
    if (coupons) {
      const coupon = coupons.filter((coupon) => coupon.couponName === value)[0];
      setSelectedCoupon(coupon);
    }
  };

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        할인 쿠폰
      </Text>
      <DropDown
        style={{ width: '100%' }}
        placeholder="목록을 입력하세요"
        value={
          selectedCoupon ? selectedCoupon.couponName : '보유한 쿠폰이 없어요'
        }
        onChange={handleChange}>
        {coupons?.map((coupon: CouponResponse) => {
          return (
            <DropDownOption
              key={coupon.issuedCouponId}
              text={`${coupon.couponName}${coupon.discountAmount ? ` (-${coupon.discountAmount.toLocaleString()}원)` : ''}`}
              value={coupon.couponName}
            />
          );
        })}
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
