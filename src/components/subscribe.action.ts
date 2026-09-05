'use server';

import {createSubscriber, findSubscriberByEmail} from '@/utils/teable';

export async function addSubscriberAction({
  email,
  firstName,
  lastName,
}: {
  email: string;
  firstName: string;
  lastName: string;
}) {
  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existing = await findSubscriberByEmail(normalizedEmail);

    if (existing) {
      return {
        success: false,
        message: "You're already subscribed!",
      };
    }

    await createSubscriber({
      'Email': normalizedEmail,
      'First Name': firstName.trim(),
      'Last Name': lastName.trim(),
    });

    return {
      success: true,
      message: undefined,
    };
  } catch (error) {
    console.error('Failed to add subscriber', error);

    return {
      success: false,
      message: 'An error has occured',
    };
  }
}
