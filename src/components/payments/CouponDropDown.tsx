import { useState } from 'react';
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

  // const coupons: CouponResponse[] = [
  //   {
  //     issuedCouponId: 0,
  //     couponName: '선택안함',
  //     member: {},
  //     discountAmount: 0,
  //     usedAt: '',
  //     issuedAt: '',
  //     isUsed: false,
  //     isRevoked: false
  //   },
  //   {
  //     issuedCouponId: 1,
  //     couponName: '테스트 쿠폰',
  //     member: {},
  //     discountAmount: 5000,
  //     usedAt: '',
  //     issuedAt: '',
  //     isUsed: false,
  //     isRevoked: false
  //   }
  // ];

  const [selectedValue, setSelectedValue] = useState(
    coupons && coupons.length ? coupons[0].couponName : '보유한 쿠폰이 없어요'
  );

  const handleChange = (value: string) => {
    if (coupons) {
      const coupon = coupons.filter((coupon) => coupon.couponName === value)[0];
      setSelectedValue(value);
      setDiscount(coupon.discountAmount);
    }
  };

  const { strDiscount, setDiscount } = useProduct();

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        할인 쿠폰
      </Text>
      <DropDown
        style={{ width: '100%' }}
        placeholder="목록을 입력하세요"
        value={selectedValue}
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
