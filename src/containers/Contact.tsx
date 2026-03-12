'use client';

const Contact = () => {
  const handleChatClicked = () => {
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text="Hi, Sam. I want to inquire about the website development`,
      '_blank'
    );
  };

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl items-center justify-center py-8 md:min-h-[calc(100dvh-106px)]">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-primary font-fira text-5xl font-bold tracking-wider">Let's Build Something Cool!</h1>
        <h4 className="text-lg">
          Have an exciting project or questions that you want to discuss? Send me a message and let&apos;s chat.
        </h4>
        <button
          role="button"
          className="cursor-pointer rounded bg-red-900 px-4 py-2 md:me-3"
          onClick={handleChatClicked}
        >
          <strong>Let's Discuss !</strong>
        </button>
      </div>
    </div>
  );
};

export default Contact;
