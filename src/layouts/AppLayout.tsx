import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Header />

      <main className="grid grid-cols-1 mx-auto lg:grid-cols-2">
        <Outlet />
      </main>
    </>
  );
}
