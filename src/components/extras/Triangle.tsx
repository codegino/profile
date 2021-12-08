import styled from '@emotion/styled';

export const CornerShape: React.FC = props => {
  return <Container {...props} />;
};

const Container = styled.div`
  position: absolute;

  height: 2rem;
  width: 2rem;

  z-index: 2;
`;
