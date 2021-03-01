import { Navbar, Card } from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-3xl text-green-500'>Site Igreja</h1>
      </div>
    </>
  );
}
