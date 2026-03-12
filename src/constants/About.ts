import beyondsoftLogo from '@/assets/images/beyondsoft.png';
import jatLogo from '@/assets/images/jat.png';
import modalRakyatLogo from '@/assets/images/modalrakyat.png';
import tokopediaLogo from '@/assets/images/tokopedia.png';

export const services = [
  {
    title: 'Web Development',
    icon: 'code',
    description: 'From interface design to client-oriented friendly experience. I help visualizing the requirements.',
  },
  {
    title: 'Internal System Development',
    icon: 'database',
    description:
      'Design and build custom internal systems that streamline operations, boost productivity, and scale with your business needs.',
  },
];

export const skills = [
  {
    category: 'Frontend',
    stacks: ['React.js', 'Typescript', 'TailwindCSS', 'Material UI'],
  },
  {
    category: 'Backend',
    stacks: ['Express.js', 'Golang', 'Python'],
  },
  {
    category: 'Database & Platforms',
    stacks: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
];

export const experiences = [
  {
    company: 'Jaya Agung Teknologi',
    logo: jatLogo,
    url: 'https://www.jayaagung.tech/',
    title: 'Software Engineer',
    duration: 'Jan 2024 - Now',
    list: [
      'Developed enterprise level internal system',
      'Working with React.js, Next.Js, Go, Python, and Typescript',
      'Migrating old codes into new ones and fixing production bugs',
      'Manage to work on a team with Agile Scrum Development process using Kanban Board and Daily Stand-ups',
      'Help new colleagues and always deliver the work on time',
    ],
  },
  {
    company: 'Beyondsoft',
    logo: beyondsoftLogo,
    url: 'https://beyondsoft.com/',
    title: 'ReactJs Developer',
    duration: 'May 2022 - Dec 2023',
    list: [
      'Worked for DBS Bank Singapore',
      'Part of Transformers Team',
      'Worked closely with Next.js and SASS and OpenText TeamSite CMS',
      'Managed to work on a team with Agile Scrum Development process using Kanban Board',
      'Help new colleagues and always deliver the work on time',
    ],
  },
  {
    company: 'Tokopedia',
    logo: tokopediaLogo,
    url: 'https://tokopedia.com',
    title: 'Software Engineer - Web Platform',
    duration: 'March 2021 - May 2022',
    list: [
      'Part of Home and Search Division',
      'Worked closely with React.js and React-Emotion',
      'Managed to work on a team with Agile Scrum Development process using Kanban Board',
      'Received positive feedbacks from work colleagues and always delivered the work on time',
    ],
  },
  {
    company: 'Modal Rakyat',
    logo: modalRakyatLogo,
    url: 'https://modalrakyat.id',
    title: 'Frontend Software Engineer',
    duration: 'August 2019 - March 2021',
    list: [
      "Developed an enterprise level website for Modal Rakyat and some of its internal system to help them doing company's business",
      'Worked in a team and report directly to our CTO and Product Manager',
      'Worked with React.js. Vue.js, Nuxt.js, and SASS',
      'Managed to work on customized Agile Scrum Development process using Kanban Board',
    ],
  },
];
