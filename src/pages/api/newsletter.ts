// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {email, name, token} = req.body;

  const result = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  ).then(res => res.json());

  if (
    !result.success ||
    result.action !== 'newsletter_subscribe' ||
    result.score < 0.5
  ) {
    return res.status(400).json({
      message: 'We detected that you might be a robot. Please try again.',
    });
  }

  // Easier to  hardcode
  const isSameOrigin = req.headers.origin !== 'https://codegino.com';

  if (isSameOrigin || req.method !== 'POST') {
    return res.status(400).json({message: 'An error has occur'});
  }

  try {
    const result = await fetch('https://emails.pabbly.com/api/subscribers', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PABBLY_EMAIL_API_KEY}`,
      }),
      body: JSON.stringify({
        list_id: 'IjkyNTM3OSI',
        import: 'single',
        email,
        name,
      }),
    }).then(res => res.json());

    if (result.status === 'success') {
      return res.status(201).json({message: 'success'});
    }
    return res.status(400).json({message: result.message});
  } catch (error) {
    return res.status(500).json({message: 'an error has occur'});
  }
};

export default handler;
