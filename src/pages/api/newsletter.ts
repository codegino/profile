import type {NextApiRequest, NextApiResponse} from 'next';
import {supabase} from '../../utils/supabase-client';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Easier to  hardcode
  const isSameOrigin = req.headers.origin !== 'https://codegino.com';

  if (isSameOrigin || req.method !== 'POST') {
    return res.status(400).json({message: 'An error has occur'});
  }

  const {email, firstName, lastName} = req.body;

  const {error} = await supabase
    .from('email_subscribers')
    .insert([{first_name: firstName, last_name: lastName, email: email}]);

  if (error) {
    return res
      .status(400)
      .json({message: 'An error has occur, please check your email.'});
  } else {
    return res.status(201).json({message: 'success'});
  }
};

export default handler;
