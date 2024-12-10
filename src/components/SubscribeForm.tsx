'use client';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import {useRouter} from 'next/navigation';
import type {FormEvent} from 'react';
import {useState} from 'react';
import {useTranslation} from '../app/i18n/client';
import Button from './basic/Button';
import Input from './basic/Input';
import {addSubscriberAction} from './subscribe.action';

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
}
interface SubscribeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const SubscribeForm = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {t} = useTranslation('newsletter');

  const handleSubmit = async (e: FormEvent<SubscribeFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const {email, firstName, lastName} = e.currentTarget.elements;

    await addSubscriberAction({
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
    }).then(res => {
      if (res.success) {
        router.push('/signup-success');
      } else {
        setError(res?.message as string);
      }
    });

    setIsLoading(false);
  };

  return (
    <>
      <div className="flex h-screen min-h-[40rem] w-full flex-col items-center justify-center px-2">
        <div className="max-w-2xl text-center">
          <h2 className="my-8 text-4xl">{t('title')}</h2>
          <h3 className="mb-8 text-2xl">{t('subtitle')}</h3>
          <h4 className="text-neutral-700 dark:text-neutral-400">
            {t('noSpam')}
            <RiSpamLine size={25} />. {t('unsubscribe')}
            <BiCool size={25} />
          </h4>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-w-2xl relative mb-24 mt-8 min-h-[23rem]
          w-full max-w-xl overflow-hidden rounded-2xl bg-white/90 ring-1 ring-neutral-700 dark:bg-neutral-800"
          id="1j27oq"
        >
          <div className="flex items-center justify-center py-4">
            <p className="text-2xl">{t('form.title')}</p>
          </div>
          <div className="flex flex-col gap-4 px-8 py-4">
            <Input
              type="email"
              placeholder={'*' + t('form.email')}
              name="email"
              className="mb-2"
              required
            />
            <Input
              type="text"
              placeholder={'*' + t('form.firstName')}
              name="firstName"
              required
            />
            <Input
              type="text"
              placeholder={t('form.lastName') ?? ''}
              name="lastName"
            />
            {error && (
              <div className="w-full text-center font-bold text-red-500">
                {error}
              </div>
            )}
            <Button
              type="submit"
              className="mt-4 text-xl font-bold disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-50"
              disabled={isLoading}
            >
              {t('form.button')}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
