import memberApi from '@/apis/member/memberApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BottomSheetContext } from '@/context/BottomSheetContext';

import { useContext } from 'react';

export default function useJoinRegularMember() {
  const queryClient = useQueryClient();
  const { handleBottomSheet, ...rest } = useContext(BottomSheetContext);
  const { mutate: joinRegularMember } = useMutation({
    mutationFn: memberApi.JOIN_MEMBERSHIP,
    onSuccess: () => {
      handleBottomSheet();
      queryClient.invalidateQueries({ queryKey: ['member'] });
    }
  });
  return { joinRegularMember, ...rest };
}
