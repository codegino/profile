'use client';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import {useRouter} from 'next/navigation';
import type {SubmitEvent} from 'react';
import {useState} from 'react';
import {Fade} from 'react-awesome-reveal';
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

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const {email, firstName, lastName} = (
      e.currentTarget as SubscribeFormElement
    ).elements;

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
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:py-20">
      <Fade direction="up" triggerOnce>
        <div className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-linear-to-br from-neutral-50 to-primary-50 p-8 text-center shadow-xs dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-800 sm:p-12">
          <div className="max-w-2xl text-center">
            <h2 className="m-0 text-3xl font-bold sm:text-4xl">{t('title')}</h2>
            <h3 className="mx-auto mt-3 max-w-xl text-lg font-normal text-neutral-600 dark:text-neutral-300">
              {t('subtitle')}
            </h3>
            <h4 className="mt-4 font-normal text-neutral-700 dark:text-neutral-400">
              {t('noSpam')}
              <RiSpamLine size={25} />. {t('unsubscribe')}
              <BiCool size={25} />
            </h4>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mt-8 w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white/90 shadow-xs dark:border-neutral-600 dark:bg-neutral-800"
            id="1j27oq"
          >
            <div className="flex items-center justify-center pt-6">
              <p className="text-2xl font-semibold">{t('form.title')}</p>
            </div>
            <div className="flex flex-col gap-4 px-8 py-6">
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
      </Fade>
    </section>
  );
};

export default SubscribeForm;
