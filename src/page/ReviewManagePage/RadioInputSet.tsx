import styled from 'styled-components';

interface ReviewRadioSet {}

const ReviewRadioSet = () => {
  return (
    <CheckBoxList>
      <input type='radio' id='option1' name='options' defaultChecked />
      <Label htmlFor='option1'>Displayed</Label>
      <input type='radio' id='option2' name='options' />
      <Label htmlFor='option2'>Concealed</Label>
    </CheckBoxList>
  );
};

const CheckBoxList = styled.div`
  position: relative;

  & input[type='radio'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  & input[type='radio'] + label {
    display: inline-block;
    position: relative;
    width: 120px;
    height: 48px;
    border-radius: 4px;
    color: var(--gray-900, #212124);
    border: 1px solid var(--gray-200, #eaebee);
    background: var(--white, #fff);
    cursor: pointer;
    margin-left: 4px;

    &:first-of-type {
      margin-left: 0;
    }
  }

  & input[type='radio']:checked + label {
    color: var(--primary-400, #6143ff);
    border: 1px solid var(--primary-400, #6143ff);
    background: var(--primary-050, #f4f2ff);
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #666;
  padding: 12px 0;
  text-align: center;
  vertical-align: middle;
`;

export default ReviewRadioSet;
