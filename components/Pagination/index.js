export default function Pagination({
  firstPage,
  page,
  lastPage,
  prevClick,
  nextClick,
}) {
  return (
    <section className='flex justify-center items-center space-x-4'>
      <button
        className={`bg-white p-2 rounded-md border border-gray-200 ${
          firstPage && 'bg-gray-300'
        }`}
        disabled={firstPage}
        onClick={prevClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-chevron-left w-6 h-6'
        >
          <polyline points='15 18 9 12 15 6'></polyline>
        </svg>
      </button>
      <p>Página: {page}</p>
      <button
        className={`bg-white p-2 rounded-md border border-gray-200 ${
          lastPage && 'bg-gray-300'
        }`}
        disabled={lastPage}
        onClick={nextClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-chevron-right w-6 h-6'
        >
          <polyline points='9 18 15 12 9 6'></polyline>
        </svg>
      </button>
    </section>
  );
}
