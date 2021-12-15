import React from 'react';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import Button from './basic/Button';
import Input from './basic/Input';

const SubscribeForm = () => {
  return (
    <>
      <div className="h-screen min-h-[45rem] px-2 w-full flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl ">
          <h2 className="my-8 text-4xl">Stay up to date🚀</h2>
          <h3 className="mb-8 text-2xl">
            Subscribe to my newsletter, and you&lsquo;ll be the first to know my
            latest content📰.
          </h3>
          <h4>
            No spam
            <RiSpamLine size={25} />. Unsubscribe anytime.
            <BiCool size={25} />
          </h4>
        </div>

        <form
          method="post"
          action="https://codegino.us20.list-manage.com/subscribe/post?u=9821406d00b8039df9f681e58&amp;id=76050ac432"
          className="relative mt-8 shadow-sm shadow-dark overflow-hidden bg-light w-full
          max-w-3xl min-w-3xl mb-24 rounded-2xl min-h-[20rem]"
          id="1j27oq"
          data-async="true"
          data-recaptcha="true"
        >
          <div
            className="flex justify-center bg-primary-dark h-16 py-8 items-center
          "
          >
            <p className="text-light text-2xl">Get started</p>
          </div>
          <div className="flex flex-col py-8 px-4 bg-light">
            <Input
              type="text"
              placeholder="First Name"
              name="FNAME"
              className="mb-4"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="EMAIL"
              required
              className="mb-8"
            />
            <div aria-hidden="true">
              <input
                type="text"
                name="a_password"
                tabIndex={-1}
                defaultValue=""
                autoComplete="off"
                className="absolute -left-full"
              />
            </div>
            <Button type="submit" className="text-2xl font-bold">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
