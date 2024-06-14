'use server';

import {apitable} from '@/utils/api-table';

const datasheet = apitable.datasheet('dstKt9KEFDMSvJBjxN');

export async function addSubscriberAction({
  email,
  firstName,
  lastName,
}: {
  email: string;
  firstName: string;
  lastName: string;
}) {
  const existing = await datasheet.records.query({
    filterByFormula: `{email} = "${email}"`,
  });

  if (!existing.success) {
    return {
      success: false,
      message: 'An error has occured',
    };
  }

  if (existing?.data?.total && existing.data.total > 0) {
    return {
      success: false,
      message: "You're already subscribed!",
    };
  }

  const {success, code} = await datasheet.records.create([
    {
      fields: {
        email,
        first_name: firstName,
        last_name: lastName,
      },
    },
  ]);

  return {
    success,
    message: success ? undefined : `Error: ${code}`,
  };
}
