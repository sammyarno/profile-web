import { FaTools } from 'react-icons/fa';

const UnderConstruction = () => {
  const handleChatClicked = () => {
    window.open(
      `https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`,
      '_blank'
    );
  };

  const handleResumeClicked = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/file/Samuel.pdf`, '_blank');
  };

  return (
    <div className="under-construction d-flex align-items-center justify-content-center flex-column px-3 text-center">
      <FaTools size="5x" className="mb-4" />
      <p className="text-muted mb-4">
        Sorry, our mobile site is under maintenance. Will be back soon!{' '}
        <span className="text-primary">Please check through your desktop :&#41;</span>
      </p>
      <div className="button-wrapper">
        <button
          role="button"
          className="cursor-pointer rounded bg-red-900 px-4 py-2 md:me-3"
          onClick={handleChatClicked}
        >
          Let&apos;s Chat
        </button>
        <button
          role="button"
          className="bg-primary text-secondary cursor-pointer rounded px-4 py-2 md:me-3"
          onClick={handleResumeClicked}
        >
          Check Resume
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
