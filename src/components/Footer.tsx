import type { ReactNode } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface ISocMedIconProps {
  icon: ReactNode;
  href: string;
}

const SocMedIcon = ({ icon, href }: ISocMedIconProps) => (
  <a href={href} rel="noreferrer" target="_blank">
    <span className="text-3xl md:text-lg">{icon}</span>
  </a>
);

const Footer = () => (
  <div className="border-primary mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-4 border-t px-4 py-3 md:flex-row md:gap-0">
    <div className="text-center md:w-3/12 md:flex-none md:text-left">
      <p className="font-fira text-sm tracking-wide">Built by Samuel Arno Saputra</p>
    </div>
    <div className="flex justify-center gap-3 md:w-9/12 md:justify-end">
      <SocMedIcon
        href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text="Hi, Sam. I want to inquire about the website development`}
        icon={<FaWhatsapp />}
      />
      <SocMedIcon href="https://instagram.com/sammyarno" icon={<FaInstagram />} />
      <SocMedIcon href="https://www.linkedin.com/in/samuelsaputra/" icon={<FaLinkedin />} />
      <SocMedIcon href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} icon={<FaEnvelope />} />
    </div>
  </div>
);

export default Footer;
