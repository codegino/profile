import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter';
import {IBlogMetadata} from '../../models/blog';
import Coffee from '../Coffee';
import SubscribeButton from '../basic/Button';
import NextLink from '../basic/NextLink';
import ShareToSocialMedia from './ShareToSocialMedia';

const BlogFooter = ({blog}: {blog: IBlogMetadata}) => {
  return (
    <footer className="flex w-full m-auto flex-col text-center">
      <ShareToSocialMedia blog={blog} />
      <p className="m-6">
        <i>Get latest updates directly into your mailbox.</i>
      </p>
      <form action="https://mailchi.mp/5d28d757da7a/codegino-newsletter">
        <SubscribeButton className="px-4">
          Subscribe to my Newsletter
        </SubscribeButton>
      </form>

      <p className="my-4">
        <i>If you find this useful and you want to support me</i>
      </p>
      <Coffee />

      <p className="my-2">
        <i>Connect with me</i>
      </p>
      <NextLink
        href="https://twitter.com/code_gino"
        aria-label="Follow me on Twitter"
        target="_blank"
        className="mt-2"
        rel="nnoreferrer"
      >
        <span className="relative h-10 bg-[#1da1f2] text-white py-2 px-6 rounded-3xl hover:shadow-sm hover:shadow-dark">
          <FaTwitter /> Follow @code_gino
        </span>
      </NextLink>
    </footer>
  );
};

export default BlogFooter;
