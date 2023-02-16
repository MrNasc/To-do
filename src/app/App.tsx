import { Dashboard } from "./pages";
import { Header } from "./pages/dashboard/Header";
import "./styles/global.css";
import "/DEV/ToDo/to-do/src/app/styles/popover.css";
import { useState } from 'react';

export const App = () => {
  const [data, setData] = useState<any>('');

  const setDataString = "setData";
  return (
    <>
      <div className="bg-back_background w-screen h-screen flex justify-center items-center">
        <div className="bg-background rounded-lg h-full w-full max-w-5xl px-6 py-12 flex flex-col gap-16">
          <Header data={data} />
          <Dashboard changeData={setData} />
        </div>
      </div>
    </>
  );
};
