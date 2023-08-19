import styled from 'styled-components';

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
    background: url('https://blog.kakaocdn.net/dn/p2kpN/btrL4lwWrqf/KqNevAyZKWsoCB5ijL9qcK/img.png')
      no-repeat;
    background-size: contain;
  }

  & .showCheckbox {
    width: 20px;
    height: 20px;

    background: url('https://blog.kakaocdn.net/dn/bjVlZ3/btrL5bHw92G/bg8CBmi4x6zklkecdJ1dpk/img.png')
      no-repeat;
    background-size: contain;
  }
`;

export default Checkbox;
