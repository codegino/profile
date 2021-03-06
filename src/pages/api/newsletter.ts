// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  ContactsApi,
  ContactsApiApiKeys,
  CreateContact,
} from '@sendinblue/client';
import type {NextApiRequest, NextApiResponse} from 'next';

const apiInstance = new ContactsApi();

apiInstance.setApiKey(
  ContactsApiApiKeys.apiKey,
  process.env.SIB_API_KEY as string,
);

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {email, name} = req.body;

  // Easier to  hardcode
  const isSameOrigin = req.headers.origin !== 'https://codegino.com';

  if (isSameOrigin || req.method !== 'POST') {
    return res.status(400).json({message: 'An error has occur'});
  }

  try {
    let createContact = new CreateContact();

    createContact.email = email;
    createContact.attributes = {FNAME: name};
    createContact.listIds = [5];

    const data = await apiInstance.createContact(createContact);

    if (data?.response?.statusCode === 201) {
      return res.status(201).json({message: 'success'});
    }
    return res
      .status(400)
      .json({message: 'An error has occur, please check your email.'});
  } catch (error: any) {
    return res
      .status(error?.response?.statusCode ?? 500)
      .json({message: error?.response?.body?.message ?? 'An error has occur'});
  }
};

export default handler;
