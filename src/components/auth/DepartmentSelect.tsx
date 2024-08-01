import React from 'react';
import { useGetDepartmentList } from '@/hooks/query';
import { Control, Controller } from 'react-hook-form';
import DropDown from 'wowds-ui/DropDown';
import DropDownOption from 'wowds-ui/DropDownOption';
type DepartmentSelectProps = {
  control:
    | Control<{
        name: string;
        studentId: string;
        phone: string;
        department: string;
        email: string;
        emailDomain: string;
        terms: boolean;
        personalPrivacy: boolean;
      }>
    | undefined;
};

const DepartmentSelect = ({ control }: DepartmentSelectProps) => {
  const { departmentList } = useGetDepartmentList();
  return (
    <Controller
      name="department"
      control={control}
      defaultValue=""
      rules={{
        required: {
          value: true,
          message: '* 정보를 입력해주세요.'
        }
      }}
      render={({ field }) => (
        <DropDown
          {...field}
          label="학과"
          placeholder="선택하세요"
          onChange={({ selectedValue }) => {
            field.onChange(selectedValue);
          }}>
          <React.Fragment key={`${field}-option`}>
            {departmentList.map((department, index) => {
              return (
                <DropDownOption
                  key={`${index}-dropdownOption`}
                  text={department.name}
                  value={department.code}
                />
              );
            })}
          </React.Fragment>
        </DropDown>
      )}
    />
  );
};

export default DepartmentSelect;
