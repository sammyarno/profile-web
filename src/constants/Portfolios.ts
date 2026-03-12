import creant from 'assets/images/creant-home.jpg';
import egaGarment from 'assets/images/egagarment-home.jpg';
import tomatoBricks from 'assets/images/tomato-home.jpg';
import tutorAja from 'assets/images/tutor-home.jpg';

export const colorMap = {
  creant: 'border-creant',
  tomatobricks: 'border-tomatobricks',
  tutoraja: 'border-tutoraja',
  'ega-garment': 'border-egagarment',
} as const;

export type IColorKey = keyof typeof colorMap;

const portfolios = [
  {
    id: 'creant',
    logo: 'https://creant.id/images/creant-logo.svg',
    preview: creant,
    name: 'CRÉANT Beauty',
    description:
      'CRÉANT Beauty is a beauty brand that focused on explore your inner natural beauty. The web application provides Company Profile and Online Shop.',
    url: 'https://creant.id',
    themeColor: '#c7b8d9',
    skills: ['React', 'Typescript', 'SCSS', 'Express', 'mySQL'],
  },
  {
    id: 'tomatobricks',
    logo: 'https://tomatobricks.com/images/logo_inline.png',
    preview: tomatoBricks,
    name: 'Tomato Bricks',
    description:
      'Tomato Bricks is an Indonesian Property Agent focused in providing the best property solution for you. The web application provides Company Profile and Property Listing.',
    url: 'https://tomatobricks.com',
    themeColor: '#ae1a1f',
    skills: ['React', 'Javascript', 'SCSS', 'Express', 'mySQL'],
  },
  {
    id: 'tutoraja',
    logo: 'https://tutoraja.com/images/logo@2x.png',
    preview: tutorAja,
    name: 'Tutor Aja',
    description:
      'Tutor Aja is an Indonesian on-demand learning course for universities. The web application provides Company Profile and Course booking.',
    url: 'https://tutoraja.com',
    themeColor: '#f4983d',
    skills: ['React', 'Javascript', 'SCSS', 'Express', 'mySQL'],
  },
  {
    id: 'ega-garment',
    logo: 'https://egagarment.com/images/logo.png',
    preview: egaGarment,
    name: 'Ega Garment',
    description:
      'Ega Garment is a textile warehouse placed in Indonesia. The web application provides Company Profile and its products.',
    url: 'https://egagarment.com',
    themeColor: '#c62028',
    skills: ['React', 'Javascript', 'SCSS', 'Redux'],
  },
];

export default portfolios;
