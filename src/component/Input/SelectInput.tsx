import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

export type SelectInputType = {
  id: string;
  optionSetting?: RegisterOptions;
  defaultOption?: {
    name: string;
    value: string;
  };
  defaultOptionValue?: number | string;
  options: { name: string; value: number | string }[];
  register: UseFormRegister<FieldValues>;
  disabled?: boolean;
  required?: boolean;
};

function SelectInput({
  id,
  optionSetting,
  defaultOption,
  options,
  defaultOptionValue,
  disabled,
  required = false,
  register,
}: SelectInputType) {
  return (
    <SelectDiv
      id={id}
      {...register(id, { ...optionSetting })}
      defaultValue={defaultOptionValue}
      disabled={disabled}
      required={required}
    >
      {defaultOption && <option value={defaultOption.value}>{defaultOption.name}</option>}
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </SelectDiv>
  );
}

const SelectDiv = styled.select`
  width: 100%;
  height: 20px;
  font-size: 1rem;
  padding: 0 22px 0 6px;

  &:not(:has(option:checked)) {
    color: ${({ theme }) => theme.gray3};
  }
  option {
    color: ${({ theme }) => theme.black};
  }
`;

export default SelectInput;
