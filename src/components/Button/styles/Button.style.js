import color from './color';
import shape from './shape';
import styled from 'styled-components';




export const StyledButton=styled.button`

    font-size: 1.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: 0.2px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${(props)=>color[props.color]}
    ${(props) => shape[props.shape]}

`

export const LeftIcon = styled.span`
  margin-inline-end: ${(props) => props}rem;
`;

export const RightIcon = styled.span`
  margin-inline-start: ${(props) => props}rem;
`;

export default StyledButton;