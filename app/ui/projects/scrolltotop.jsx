'use client';
import { MdKeyboardDoubleArrowUp } from '../icons';
const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      className="sticky bottom-4 ml-[50vw] w-8 rounded-full shadow-lg"
      onClick={handleScroll}
    >
      <MdKeyboardDoubleArrowUp className="mx-auto text-xl" />
    </button>
  );
};

export default ScrollToTop;
