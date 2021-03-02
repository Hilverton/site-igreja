export default function Footer() {
  return (
    <footer className='p-4 bg-gradient-to-l to-my-blue from-my-green font-sans w-full'>
      <div className='w-11/12 mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:justify-between items-center'>
        <img
          src='/assets/Logo_assembleia.png'
          className='h-64'
          alt='logo igreja sede'
        />
        <div>
          <h3 className='text-2xl text-white mb-8'>Nossas mídias</h3>
          <ul className='space-x-4 flex justify-center items-center'>
            <li className='p-3 rounded-lg h-12 bg-white cursor-pointer flex justify-center items-center'>
              <img className='h-9' src='/assets/socials/youtube_logo.png' />
            </li>
            <li className='p-3 rounded-lg h-12 text-center bg-white cursor-pointer flex justify-center items-center'>
              <img className='h-9' src='/assets/socials/instagram_logo.png' />
            </li>
            <li className='p-3 rounded-lg h-12 bg-white cursor-pointer flex justify-center items-center'>
              <img className='h-9' src='/assets/socials/f_logo.png' />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
