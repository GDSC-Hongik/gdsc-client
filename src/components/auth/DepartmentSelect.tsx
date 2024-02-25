import { Select } from '@/components/common/Select';
import { useGetDepartmentList } from '@/hooks/query';
import { Control, Controller, FieldValues } from 'react-hook-form';

type DepartmentSelectProps = {
  control: Control<FieldValues, any, FieldValues>;
};

export default function DepartmentSelect({ control }: DepartmentSelectProps) {
  const { departmentList } = useGetDepartmentList();

  return (
    <Controller
      name="department"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select
          {...field}
          label="학과"
          required
          items={departmentList}
          idField="code"
          displayField="name"
        />
      )}
    />
  );
}
