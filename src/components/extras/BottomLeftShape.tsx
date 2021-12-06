import styled from '@emotion/styled';
import {CornerShape} from './Triangle';

export const BottomLeftShape = styled(CornerShape)`
  bottom: 0;
  left: 0;
  transform: skew(225deg) translateX(-60%);
  background-color: var(--color-primary-light);
  border-right: 1rem solid var(--color-primary-dark);
`;
