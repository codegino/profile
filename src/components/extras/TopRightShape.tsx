import styled from '@emotion/styled';
import {CornerShape} from './Triangle';

export const TopRightShape = styled(CornerShape)`
  top: 0;
  right: 0;
  transform: skew(45deg) translateX(50%);
  background-color: var(--color-primary-dark);
  border-left: 1rem solid var(--color-primary-light);
`;
