import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {email, firstName, lastName} = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(200).json({
      message: 'Missing required fields',
    });
  }

  const queryParams = `lists[]=303346&email=${email}&first_name=${firstName}&last_name={lastName}`;

  const data = await fetch(`https://api.sendfox.com/contacts?${queryParams}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SEND_FOX_TOKEN}`,
    },
  }).then(res => res.json());

  res.status(200).json(data);
}
