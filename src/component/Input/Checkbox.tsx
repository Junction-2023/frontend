import styled from 'styled-components';
import checkbox from '../../asset/icon/checkbox.png';
import checkboxChecked from '../../asset/icon/checkbox_checked.png';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface CheckboxProps {
  id: string;
  register: UseFormRegister<FieldValues>;
}

const Checkbox = ({ id, register }: CheckboxProps) => {
  return (
    <Label>
      <input type='checkbox' value={id} {...register(id)}/>
      <div className='showCheckbox'></div>
    </Label>
  );
};

const Label = styled.label`
  & input[type='checkbox'] {
    display: none;
  }

  & input[type='checkbox']:checked + .showCheckbox {
    background-image: url(${checkboxChecked});
    background-repeat: no-repeat;
    background-size: contain;
  }

  & .showCheckbox {
    width: 20px;
    height: 20px;

    background-image: url(${checkbox});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default Checkbox;
