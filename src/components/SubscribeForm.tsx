import {useState} from 'react';
import type {FormEvent} from 'react';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import Button from './basic/Button';
import Input from './basic/Input';

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

    fetch('/api/newsletter', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      credentials: 'same-origin',
      body: JSON.stringify({
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
      }),
    })
      .then(async (res: any) => {
        const body = await res.json();
        if (res.status >= 400 && res.status < 600) {
          throw new Error(body.message);
        }
        return body;
      })
      .then(() => {
        router.push('/signup-success');
      })
      .finally(() => setIsLoading(false))
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <>
      <div className="h-screen min-h-[40rem] px-2 w-full flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl ">
          <h2 className="my-8 text-4xl">{t('title')}</h2>
          <h3 className="mb-8 text-2xl">{t('subtitle')}</h3>
          <h4>
            {t('noSpam')}
            <RiSpamLine size={25} />. {t('unsubscribe')}
            <BiCool size={25} />
          </h4>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative mt-8 shadow-sm shadow-dark overflow-hidden bg-light w-full
          max-w-2xl min-w-2xl mb-24 rounded-2xl min-h-[20rem]"
          id="1j27oq"
        >
          <div
            className="flex justify-center bg-primary-dark py-2 items-center
          "
          >
            <p className="text-light text-2xl">{t('form.title')}</p>
          </div>
          <div className="flex flex-col py-8 px-4 bg-light">
            <Input
              type="email"
              placeholder={'*' + t('form.email') ?? ''}
              name="email"
              className="mb-6"
              required
            />
            <Input
              type="text"
              placeholder={'*' + t('form.firstName') ?? ''}
              name="firstName"
              className="mb-4"
              required
            />
            <Input
              type="text"
              placeholder={t('form.lastName') ?? ''}
              name="lastName"
              className="mb-8"
            />
            {error && (
              <div className="w-full text-center text-red-500 font-bold mb-2">
                {error}
              </div>
            )}
            <Button
              type="submit"
              className="text-2xl font-bold disabled:bg-slate-500 disabled:text-slate-50 disabled:cursor-not-allowed"
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
