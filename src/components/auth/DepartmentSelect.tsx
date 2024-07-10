import React from 'react';
import { useGetDepartmentList } from '@/hooks/query';
import { Control, Controller } from 'react-hook-form';
import DropDown from 'wowds-ui/DropDown';
import DropDownOption from 'wowds-ui/DropDownOption';
import { FormStateType } from '@/pages';

type DepartmentSelectProps = {
  control: Control<FormStateType, unknown, FormStateType>;
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
          onChange={field.onChange}
          value={field.value}
          label="학과"
          placeholder="선택하세요">
          <React.Fragment key=".0">
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
