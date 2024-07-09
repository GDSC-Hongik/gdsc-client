import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import DropDown from 'wowds-ui/DropDown';
import DropDownOption from 'wowds-ui/DropDownOption';

import couponApi from '@/apis/coupon/couponApi';
import { CouponResponse } from '@/apis/coupon/couponType';
import useProduct from '@/hooks/zustand/useProduct';

import { Flex, Text } from '../common/Wrapper';

const CouponDropDown = () => {
  // const { data: coupons } = useQuery({
  //   queryKey: ['coupon'],
  //   queryFn: couponApi.GET_COUPONS_ME
  // });

  const coupons: CouponResponse[] = [
    {
      issuedCouponId: 0,
      couponName: '선택안함',
      member: {},
      discountAmount: 0,
      usedAt: '',
      issuedAt: '',
      isUsed: false,
      isRevoked: false
    },
    {
      issuedCouponId: 1,
      couponName: '테스트 쿠폰',
      member: {},
      discountAmount: 5000,
      usedAt: '',
      issuedAt: '',
      isUsed: false,
      isRevoked: false
    }
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value: string) => {
    const coupon = coupons.filter((coupon) => coupon.couponName === value)[0];
    setSelectedValue(value);
    setDiscount(coupon.discountAmount);
  };

  const { strDiscount, setDiscount } = useProduct();

  return (
    <>
      <DropDown
        style={{ width: '100%' }}
        placeholder="목록을 입력하세요"
        value={selectedValue}
        onChange={handleChange}>
        {coupons?.map((coupon: CouponResponse) => {
          return (
            <DropDownOption
              key={coupon.issuedCouponId}
              text={`${coupon.couponName} (-${coupon.discountAmount.toLocaleString()}원)`}
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
    </>
  );
};

export default CouponDropDown;
