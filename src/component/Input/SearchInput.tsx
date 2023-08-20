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
  height?: string;
  $isDark?: boolean;
};

function SearchInput({
  id,
  search,
  optionSetting,
  register,
  readOnly,
  required = false,
  defaultValue,
  disabled,
  width,
  height,
  $isDark = false,
}: SearchInputType) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    search(searchValue);
  };

  return (
    <SearchInputBox width={width} height={height} $isDark={$isDark}>
      <SearchIcon $isDark={$isDark} />
      <Input
        type='text'
        id={id}
        {...register(id, { ...optionSetting })}
        readOnly={readOnly}
        placeholder='Search'
        defaultValue={defaultValue}
        disabled={disabled}
        onClick={readOnly ? handleSearch : undefined}
        onChange={(e) => {
          register(id).onChange(e);
          handleChange(e);
        }}
        required={required}
        $isDark={$isDark}
      />
    </SearchInputBox>
  );
}

const SearchInputBox = styled.div<{ width?: string; height?: string; $isDark: boolean }>`
  display: flex;
  align-items: center;
  border: ${(props) => (props.$isDark ? '' : '1px solid #EAEBEE')};
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '40px'};
  color: ${(props) => (props.$isDark ? '#D1D3D8' : '#212124')};
  background-color: ${(props) => (props.$isDark ? '#393A40' : '#FFF')};
  border-radius: 4px;
  padding: 16px 12px;
`;

const Input = styled.input<{ $isDark: boolean }>`
  width: 100%;
  color: ${(props) => (props.$isDark ? '#D1D3D8' : '#212124')};
  background-color: ${(props) => (props.$isDark ? '#393A40' : '#FFF')};
  outline: 0;
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    color: ${(props) => (props.$isDark ? '#D1D3D8' : '#212124')};
  }
`;

const SearchIcon = styled.span<{ $isDark: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${(props) => (props.$isDark ? '#393A40' : '#FFF')};
  background-image: url(${searchIcon20});
  background-repeat: no-repeat;
  background-position: center;
`;

export default SearchInput;
