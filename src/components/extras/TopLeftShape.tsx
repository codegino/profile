import styled from '@emotion/styled';
import {CornerShape} from './Triangle';

export const TopLeftShape = styled(CornerShape)`
  top: 0;
  left: 0;
  transform: skew(135deg) translateX(-60%);
  background-color: var(--color-primary-dark);
  border-right: 1rem solid var(--color-primary-light);
`;
