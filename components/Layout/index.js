import Navbar from '../Navbar';

export default function Layout({ children }) {
  return (
    <div className='w-full min-h-screen bg-cool-gray-100 pt-20'>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
