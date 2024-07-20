import React from 'react';
import { useGetDepartmentList } from '@/hooks/query';
import { Control, Controller } from 'react-hook-form';
import DropDown from 'wowds-ui/DropDown';
import DropDownOption from 'wowds-ui/DropDownOption';
type DepartmentSelectProps = {
  control: Control<{
    name: '';
    studentId: '';
    phone: '';
    department: '';
    email: '';
    terms: false;
    personalPrivacy: false;
  }>;
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
        <DropDown {...field} label="학과" placeholder="선택하세요">
          {' '}
          <React.Fragment key=".0">
            {departmentList.map((department, index) => {
              return (
                <DropDownOption
                  key={`${index}-dropdownOption`}
                  text={department.name}
                  value={department.name}
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
