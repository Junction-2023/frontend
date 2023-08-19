import { ChangeEventHandler, useState } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import searchIcon20 from '../../asset/icon/search.png';
import { CallBackFunction } from '../../types/common';

type SearchInputType = {
  id: string;
  search: CallBackFunction<void, string>;
  optionSetting?: RegisterOptions;
  register: UseFormRegister<FieldValues>;
  placeHolder?: string;
  readOnly?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  width?: string;
};

function SearchInput({
  id,
  search,
  optionSetting,
  register,
  placeHolder,
  readOnly,
  required = false,
  defaultValue,
  disabled,
  width,
}: SearchInputType) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    search(searchValue);
  };

  return (
    <SearchInputBox width={width}>
      <SearchIcon />
      <Input
        type='text'
        id={id}
        {...register(id, { ...optionSetting })}
        readOnly={readOnly}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        disabled={disabled}
        onClick={readOnly ? handleSearch : undefined}
        onChange={(e) => {
          register(id).onChange(e);
          handleChange(e);
        }}
        required={required}
      />
    </SearchInputBox>
  );
}

const SearchInputBox = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  width: ${(props) => props.width ?? '100%'};
  background-color: ${({ theme }) => theme.color.gray_800};
  border-radius: 4px;
  padding: 16px 12px;
`;

const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.color.gray_400};
  background-color: ${({ theme }) => theme.color.gray_800};
  outline: 0;
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray_600};
  }
`;

const SearchIcon = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.color.gray_800};
  background-image: url(${searchIcon20});
  background-repeat: no-repeat;
  background-position: center;
`;

export default SearchInput;
