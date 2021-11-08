import {css} from 'styled-components';

const rectangle = css`
  padding: 0 rem;
  height: 4 rem;
  border-radius: 0.7rem;
`;

const circular =css`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const shape={rectangle,circular};

export default shape;