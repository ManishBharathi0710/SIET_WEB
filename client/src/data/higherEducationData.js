export const higherEducationStats = [
  {
    id: 'countries',
    icon: 'globe',
    num: 7,
    suffix: '+',
    prefix: '0',
    label: 'Countries'
  },
  {
    id: 'exams',
    icon: 'grad',
    num: 15,
    suffix: '+',
    prefix: '',
    label: 'Exams'
  },
  {
    id: 'programs',
    icon: 'book',
    num: 25,
    suffix: '+',
    prefix: '',
    label: 'Programs'
  },
  {
    id: 'possibilities',
    icon: 'infinity',
    num: null,
    display: '∞',
    label: 'Possibilities'
  }
];

export const destinationsData = [
  {
    id: 'usa',
    country: 'United States',
    flagKey: 'us',
    region: 'North America',
    universities: '250+',
    courses: 'MS, MBA, Engineering',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop&q=80',
    link: '#/admission-enquiry?dest=usa'
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flagKey: 'uk',
    region: 'Europe',
    universities: '150+',
    courses: 'MBA, Law, Data Science',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=80',
    link: '#/admission-enquiry?dest=uk'
  },
  {
    id: 'canada',
    country: 'Canada',
    flagKey: 'ca',
    region: 'North America',
    universities: '120+',
    courses: 'Engineering, Business',
    image: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?w=800&auto=format&fit=crop&q=80',
    link: '#/admission-enquiry?dest=canada'
  },
  {
    id: 'australia',
    country: 'Australia',
    flagKey: 'au',
    region: 'Oceania',
    universities: '100+',
    courses: 'IT, Healthcare, MBA',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=80',
    link: '#/admission-enquiry?dest=australia'
  },
  {
    id: 'germany',
    country: 'Germany',
    flagKey: 'de',
    region: 'Europe',
    universities: '80+',
    courses: 'Engineering, Research',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&auto=format&fit=crop&q=80',
    link: '#/admission-enquiry?dest=germany'
  },
  {
    id: 'singapore',
    country: 'Singapore',
    flagKey: 'sg',
    region: 'Asia',
    universities: '60+',
    courses: 'Business, Tech, Design',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=80',
    link: '#/admission-enquiry?dest=singapore'
  }
];

export const examCardsData = [
  {
    id: 'gate',
    name: 'GATE',
    icon: 'gear',
    desc: 'Graduate Aptitude Test in Engineering',
    link: '#/admission-enquiry?exam=gate'
  },
  {
    id: 'gre',
    name: 'GRE',
    icon: 'grad',
    desc: 'Graduate Record Examination',
    link: '#/admission-enquiry?exam=gre'
  },
  {
    id: 'ielts',
    name: 'IELTS',
    icon: 'headphones',
    desc: 'International English Language Testing System',
    link: '#/admission-enquiry?exam=ielts'
  },
  {
    id: 'toefl',
    name: 'TOEFL',
    icon: 'translate',
    desc: 'Test of English as a Foreign Language',
    link: '#/admission-enquiry?exam=toefl'
  },
  {
    id: 'cat',
    name: 'CAT',
    icon: 'chart',
    desc: 'Common Admission Test',
    link: '#/admission-enquiry?exam=cat'
  }
];

export const choosePathData = [
  {
    id: 'ug',
    title: 'UG Studies',
    icon: 'grad',
    isYellow: false,
    desc: 'Explore undergraduate programs worldwide.',
    link: '#/programmes'
  },
  {
    id: 'abroad',
    title: 'Study Abroad',
    icon: 'globe',
    isYellow: false,
    desc: 'Find the best countries and universities.',
    link: '#/admission-enquiry?intent=abroad'
  },
  {
    id: 'exams',
    title: 'Exams & Tests',
    icon: 'document',
    isYellow: false,
    desc: 'Find exam information and preparation tips.',
    link: '#/admission-enquiry?intent=exams'
  },
  {
    id: 'career',
    title: 'Career Paths',
    icon: 'briefcase-solid',
    isYellow: true,
    desc: 'Discover career options and future opportunities.',
    link: '#/careers'
  }
];
