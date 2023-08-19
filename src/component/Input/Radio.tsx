import { FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import radio from '../../asset/icon/radio.png';
import radioChecked from '../../asset/icon/radio_checked.png';

interface RadioProps {
  id: string;
  label: string;
  defaultChecked: boolean;
  register: UseFormRegister<FieldValues>;
}

const Radio = ({ id, label, defaultChecked, register }: RadioProps) => {
  return (
    <Label id={id}>
      <input type='radio' id={id} defaultChecked={defaultChecked} {...register(id)} />
      <div className='showRadio'></div>
      <span>{label}</span>
    </Label>
  );
};

const Label = styled.label`
  overflow: hidden;
  font-size: 14px;

  & input[type='radio'] {
    display: none;
  }

  & input[type='radio']:checked + .showRadio {
    background-image: url(${radioChecked});
    background-repeat: no-repeat;
    background-size: contain;
  }

  & .showRadio {
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    background-image: url(${radio});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default Radio;
