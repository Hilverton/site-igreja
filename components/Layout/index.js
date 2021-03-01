import Navbar from '../Navbar';

export default function Layout({ children }) {
  return (
    <div className='w-full h-screen bg-cool-gray-100'>
      <Navbar />
      {children}
    </div>
  );
}
