import dynamic from 'next/dynamic';
import 'react-typist/dist/Typist.css';

const DynamicGreetings = dynamic(() => import('./GreetingsContent'), {
  ssr: false,
});

export default function Greetings() {
  return (
    <div
      className="flex justify-center flex-col items-center min-h-screen w-full relative overflow-hidden z-1"
      id="greetings"
    >
      <DynamicGreetings />
      <div className="top-0 left-0 z-[-1] h-full w-full absolute bg-gradient-to-r from-light to-dark" />
    </div>
  );
}
