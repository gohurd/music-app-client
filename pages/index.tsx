import type { NextPage } from 'next';
import { Button } from '@mui/material';
import Navbar from '../comtponents/Navbar';
import MainLayout from '../layout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="center">
        <h1>Добро пожаловать</h1>
        <h2> Здесь собраны лучшие треки</h2>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </MainLayout>
  );
};

export default Home;
