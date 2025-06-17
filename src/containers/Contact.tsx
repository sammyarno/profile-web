import { useCallback, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { sendGAEvent } from '@next/third-parties/google';
import useViewportSize from 'hooks/ViewportSize';

interface IFormInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
}

interface IForm {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const FormInput = (props: IFormInputProps) => {
  const { label, name, onChange, placeholder, type } = props;

  const renderInput = useCallback(() => {
    switch (type) {
      case 'text':
        return (
          <input
            className="w-full border px-4 py-2 focus:outline-none md:border-0 md:border-b"
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
          />
        );
      case 'email':
        return (
          <input
            className="w-full border px-4 py-2 focus:outline-none md:border-0 md:border-b"
            type="email"
            name={name}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
          />
        );
      case 'textarea':
        return (
          <textarea
            className="w-full border px-4 py-2 focus:outline-none md:border-0 md:border-b"
            placeholder={placeholder}
            name={name}
            onChange={e => onChange(e.target.value)}
            rows={3}
          />
        );
    }
  }, [type]);

  return (
    <div className="flex w-full flex-col items-start gap-1 md:flex-row md:items-center md:gap-0">
      <div className="border-primary w-1/3 md:border-r">
        <p className="font-fira text-left tracking-wider md:text-center">{label}</p>
      </div>
      <div className="w-full md:w-2/3 md:px-4">{renderInput()}</div>
    </div>
  );
};

const defaultFormValue: IForm = {
  name: '',
  email: '',
  phone: '',
  notes: '',
};

const Contact = () => {
  const viewportSize = useViewportSize();
  const [form, setForm] = useState<IForm>(defaultFormValue);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChatClicked = () => {
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text="Hi, Sam. I want to inquire about the website development`,
      '_blank'
    );
  };

  const handleSubmitForm = () => {
    console.log('form', form);
    setIsFormSubmitted(true);
  };

  useEffect(() => {
    sendGAEvent('event', 'pageview', { value: window.location.pathname + window.location.search });
  }, []);

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
        <hr className="border-primary w-1/12" />
        {isFormSubmitted && (
          <div className="bg-primary/30 flex items-center gap-4 rounded px-4 py-2">
            <FaCheckCircle className="text-primary size-5" />
            <p className="text-primary text-lg">Form has been submitted !</p>
          </div>
        )}
        <div className="relative flex w-11/12 items-center rounded-lg bg-white/20 p-4 md:w-full">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm">
            <p className="font-fira text-secondary text-4xl font-bold tracking-widest uppercase">Coming Soon</p>
          </div>
          <div className="flex w-12/12 flex-col items-end gap-4">
            <FormInput
              label="Name"
              name="name"
              placeholder="e.g. Samuel Arno"
              type="text"
              onChange={value => setForm({ ...form, name: value })}
            />
            <FormInput
              label="Phone Number"
              name="phone"
              placeholder="e.g. +62877880xxxxx"
              type="text"
              onChange={value => setForm({ ...form, phone: value })}
            />
            <FormInput
              label="Email"
              name="email"
              placeholder="e.g. testmyemail@gmail.com"
              type="email"
              onChange={value => setForm({ ...form, email: value })}
            />
            <FormInput
              label="Notes"
              name="notes"
              placeholder="this is optional if you have extra notes for me. thank you :)"
              type="textarea"
              onChange={value => setForm({ ...form, notes: value })}
            />
            <button
              role="button"
              className="bg-primary text-secondary w-full cursor-pointer px-4 py-2 md:w-fit"
              onClick={handleSubmitForm}
            >
              <strong>Text Me ASAP</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
