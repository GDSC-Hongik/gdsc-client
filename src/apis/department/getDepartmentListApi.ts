import apiClient from '@/apis';
import { Department } from '@/types/department';

export default async function getDepartmentListApi(): Promise<Department[]> {
  return (await apiClient.get(`/common/members/departments`)).data;
}
