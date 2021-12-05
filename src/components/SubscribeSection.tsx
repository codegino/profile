import styled from '@emotion/styled';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import SubscribeButton from './SubscribeButton';

const SubscribeSection = () => {
  return (
    <Container>
      <MessageContainer>
        <h2>Stay up to date🚀</h2>
        <h3>
          Subscribe to my newsletter, and you&lsquo;ll be the first to know my
          latest content📰.
        </h3>
        <h4>
          No spam
          <RiSpamLine size={25} />. Unsubscribe anytime.
          <BiCool size={25} />
        </h4>
      </MessageContainer>

      <form action="https://sendfox.com/codegino" style={{marginTop: '5rem'}}>
        <SubscribeButton>Subscribe to my Newsletter</SubscribeButton>
      </form>
    </Container>
  );
};

const MessageContainer = styled.div`
  text-align: center;
  max-width: 45rem;

  > p {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: var(--spacing-big);
    font-size: 3em;
  }

  h3 {
    margin-bottom: var(--spacing-medium);
    font-size: 2em;
  }

  h4 {
    font-size: 1.5em;
  }
`;

const Container = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default SubscribeSection;
