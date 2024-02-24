import { getDepartmentListApi } from '@/apis/department';
import QueryKeys from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useGetDepartmentList() {
  const { data: departmentList, ...rest } = useSuspenseQuery({
    queryKey: [QueryKeys.DepartmentList],
    queryFn: getDepartmentListApi
  });

  return { departmentList, ...rest };
}
