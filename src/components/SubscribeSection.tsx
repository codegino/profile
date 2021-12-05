import styled from '@emotion/styled';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import Script from 'next/script';
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

      {/* <form action="https://sendfox.com/codegino" style={{marginTop: '5rem'}}>
        <SubscribeButton>Subscribe to my Newsletter</SubscribeButton>
      </form> */}
      <Script src="https://sendfox.com/js/form.js"></Script>
      <form
        method="post"
        action="https://sendfox.com/form/m2xeq6/1j27oq"
        className="sendfox-form"
        id="1j27oq"
        data-async="true"
        data-recaptcha="true"
      >
        <p>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            required
          />
        </p>
        <p>
          <input type="email" placeholder="Email" name="email" required />
        </p>
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
          <input
            type="text"
            name="a_password"
            tabIndex={-1}
            defaultValue=""
            autoComplete="off"
          />
        </div>
        <p>
          <SubscribeButton type="submit">Sign up</SubscribeButton>
        </p>
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
