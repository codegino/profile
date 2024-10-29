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
      <div className="h-screen min-h-[40rem] px-2 w-full flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
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
          className="relative mt-8 overflow-hidden w-full dark:bg-neutral-800
          max-w-xl min-w-2xl mb-24 rounded-2xl min-h-[23rem] ring-1 ring-neutral-700 bg-white/90"
          id="1j27oq"
        >
          <div className="flex justify-center py-4 items-center">
            <p className="text-2xl">{t('form.title')}</p>
          </div>
          <div className="flex flex-col py-4 px-8 gap-4">
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
              <div className="w-full text-center text-red-500 font-bold">
                {error}
              </div>
            )}
            <Button
              type="submit"
              className="text-xl mt-4 font-bold disabled:bg-slate-500 disabled:text-slate-50 disabled:cursor-not-allowed"
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
