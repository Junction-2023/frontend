import { ChangeEventHandler, useState } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
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
    <>
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
      <button
        type='button'
        className='search-icon-button'
        aria-label='버튼'
        onClick={handleSearch}
        disabled={disabled}
      />
    </>
  );
}

export default SearchInput;
