import styled from 'styled-components';
import checkbox from '../../asset/icon/checkbox.png';
import checkboxChecked from '../../asset/icon/checkbox_checked.png';

interface CheckboxProps {
  id: string;
}

const Checkbox = ({ id }: CheckboxProps) => {
  return (
    <Label>
      <input type='checkbox' />
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
