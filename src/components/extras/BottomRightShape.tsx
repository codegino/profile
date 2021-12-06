import styled from '@emotion/styled';
import {CornerShape} from './Triangle';

export const BottomRightShape = styled(CornerShape)`
  bottom: 0;
  right: 0;
  transform: skew(315deg) translateX(50%);
  background-color: var(--color-primary-light);
  border-left: 1rem solid var(--color-primary-dark);
`;
