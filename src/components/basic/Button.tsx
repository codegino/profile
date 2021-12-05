import styled from '@emotion/styled';

const SubscribeButton = styled.button`
  cursor: pointer;
  border-radius: 1rem;

  padding: var(--spacing-small);
  background-color: var(--color-primary-dark);
  outline: none;
  border: 1px solid var(--color-primary-dark);
  color: var(--color-light);
  font-weight: bold;

  :hover {
    background-color: var(--color-primary);
    color: #ffffff;
  }
`;

export default SubscribeButton;
