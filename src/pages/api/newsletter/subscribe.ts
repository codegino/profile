import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {email, firstName} = req.body;

  if (!email || !firstName) {
    return res.status(400).json({
      message: 'Missing required fields',
    });
  }

  const queryParams = `lists[]=303839&email=${email}&first_name=${firstName}&last_name={lastName}`;

  const data = await fetch(`https://api.sendfox.com/contacts?${queryParams}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SEND_FOX_TOKEN}`,
    },
  }).then(res => res.json());

  if (typeof data.email === 'object') {
    return res.status(400).json({message: data.email[0]});
  }

  res.status(200).json(data);
}
