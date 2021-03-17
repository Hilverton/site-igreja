import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div className='w-full min-h-screen bg-cool-gray-100 pt-20 lg:pt-28'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
