import styled from '@emotion/styled';
import {mediaQuery} from '../../utils/media-query';

export const CornerShape: React.FC = props => {
  return <Container {...props} />;
};

const Container = styled.div`
  position: absolute;

  height: 3rem;
  width: 3rem;

  ${mediaQuery(
    600,
    `
  height: 5rem;
	width: 5rem;
	`,
  )}

  z-index: 2;
`;
