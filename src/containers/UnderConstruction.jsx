import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const UnderConstruction = () => {
  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
  };

  const handleResumeClicked = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/file/Samuel.pdf`, '_blank');
  };

  return (
    <div className="under-construction d-flex align-items-center justify-content-center flex-column text-center px-3">
      <FontAwesomeIcon icon="tools" size="5x" className="mb-4" />
      <p className="text-muted mb-4">
        Sorry, our mobile site is under maintenance. Will be back soon!
        {' '}
        <span className="text-primary">Please check through your desktop :&#41;</span>
      </p>
      <div className="button-wrapper">
        <Button block size="sm" className="me-3" onClick={handleChatClicked}>Let&apos;s Chat</Button>
        <Button block variant="outline-primary" size="sm" onClick={handleResumeClicked}>Check Resume</Button>
      </div>
    </div>
  );
};

export default UnderConstruction;
