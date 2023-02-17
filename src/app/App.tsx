import { Dashboard } from "./pages";
import { Header } from "./pages/dashboard/Header";
import "./styles/global.css";
import "./styles/popover.css";
import { useState } from 'react';

export const App = () => {
    const [ data, setData ] = useState<string>('');

  return (
    <>
      <div className="bg-back_background w-screen h-screen flex justify-center items-center">
        <div className="bg-background rounded-lg h-full w-full max-w-5xl px-6 py-12 flex flex-col gap-16">
          <Header data={data} />
          <Dashboard setData={setData}/>
        </div>
      </div>
    </>
  );
};
