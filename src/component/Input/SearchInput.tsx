import { ChangeEventHandler, useState } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import searchIcon20 from '../../asset/icon/search_icon_black.png';
import { InputBox } from '../../style/input';
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
}: SearchInputType) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    search(searchValue);
  };

  return (
    <SearchInputBox>
      <input
        type='text'
        id={id}
        {...register(id, { ...optionSetting })}
        className={readOnly ? 'bg-white has-click-handler' : ''}
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
      <SearchButton type='button' onClick={handleSearch} disabled={disabled} />
    </SearchInputBox>
  );
}

const SearchInputBox = styled(InputBox)`
  display: flex;
`;

const SearchButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 0;
  background-color: #fff;
  background-image: url(${searchIcon20});
  background-repeat: no-repeat;
  background-position: center;

  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.gray1_5};
  }
`;

export default SearchInput;
