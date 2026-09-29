import { deptIcon } from '../utils/deptIcons.js';

export const ugPrograms = [
  ['Agricultural Engineering', 'Sustainable solutions for a better tomorrow', 'agri'],
  ['Artificial Intelligence & Data Science', 'From data to real-world impact', 'aids'],
  ['Artificial Intelligence & Machine Learning', 'Building intelligent systems', 'aiml'],
  ['Biomedical Engineering', 'Technology for healthier lives', 'biomed'],
  ['Biotechnology', 'Innovating for a brighter future', 'biotech'],
  ['Civil Engineering', 'Building strong, resilient communities', 'civil'],
  ['Computer Science & Engineering', 'Coding tomorrow’s possibilities', 'cse'],
  ['Computer Science & Engineering (Cyber Security)', 'Defending the digital frontier', 'cyber'],
  ['Electrical & Electronics Engineering', 'Powering modern progress', 'eee'],
  ['Electronics & Communication Engineering', 'Connecting minds, devices & data', 'ece'],
  ['Food Technology', 'Nourishing the future safely', 'food'],
  ['Information Technology', 'Driving the digital revolution', 'it'],
  ['Mechanical Engineering', 'Engineering motion, shaping industries', 'mech']
];

export const pgPrograms = [
  ['M.E. CAD / CAM', 'Precision manufacturing & digital design', 'mech'],
  ['M.E. Computer Science & Engineering', 'Advanced computing architectures & algorithms', 'cse'],
  ['M.E. Embedded System Technologies', 'Edge computing & connected smart devices', 'eee'],
  ['M.Tech. Farm Machinery', 'Next-gen agricultural mechanization', 'agri'],
  ['M.Tech. Food Technology', 'Advanced food processing & quality preservation', 'food'],
  ['M.E. Structural Engineering', 'Sustainable structures & modern materials', 'civil'],
  ['M.E. VLSI Design', 'Next-generation semiconductor architectures', 'vlsi'],
  ['Master of Business Administration (MBA)', 'Strategic leadership & global enterprise management', 'aids'],
  ['Master of Computer Applications (MCA)', 'Enterprise software architecture & development', 'it']
];

export const programs = ugPrograms;

export const ugProgramsDetailed = [
  {
    code: 'AGRI',
    degree: 'B.Tech',
    name: 'Agricultural Engineering',
    fullName: 'B.Tech - Agricultural Engineering',
    desc: 'Smart farming, precision irrigation, agro-machinery automation and sustainable food systems.',
    duration: '4 Years',
    img: '/assets/images/category/cat1.jpg',
    deptSlug: 'agricultural-engineering'
  },
  {
    code: 'AI&DS',
    degree: 'B.Tech',
    name: 'Artificial Intelligence and Data Science',
    fullName: 'B.Tech - Artificial Intelligence and Data Science',
    desc: 'Mathematical foundations, predictive modeling, big data analytics, neural computing and data engineering.',
    duration: '4 Years',
    img: '/assets/images/course/3.jpg',
    deptSlug: 'artificial-intelligence-and-data-science'
  },
  {
    code: 'AI&ML',
    degree: 'B.Tech',
    name: 'Artificial Intelligence and Machine Learning',
    fullName: 'B.Tech - Artificial Intelligence and Machine Learning',
    desc: 'Deep learning architectures, computer vision, generative AI algorithms, NLP and intelligent robotics.',
    duration: '4 Years',
    img: '/assets/images/category/cat5.jpg',
    deptSlug: 'artificial-intelligence-and-machine-learning'
  },
  {
    code: 'BME',
    degree: 'B.E',
    name: 'Biomedical Engineering',
    fullName: 'B.E - Biomedical Engineering',
    desc: 'Medical instrumentation, physiological monitoring, biomaterials, diagnostic imaging and assistive healthcare robotics.',
    duration: '4 Years',
    img: '/assets/images/category/cat2.jpg',
    deptSlug: 'biomedical-engineering'
  },
  {
    code: 'BIOTECH',
    degree: 'B.Tech',
    name: 'Biotechnology',
    fullName: 'B.Tech - Biotechnology',
    desc: 'Molecular science, bioprocessing, genetic engineering, industrial microbiology, downstream separation and bioinformatics.',
    duration: '4 Years',
    img: '/assets/images/category/cat3.jpg',
    deptSlug: 'biotechnology'
  },
  {
    code: 'CIVIL',
    degree: 'B.E',
    name: 'Civil Engineering',
    fullName: 'B.E - Civil Engineering',
    desc: 'Smart structural analysis, geotechnical design, green building technology, BIM and environmental hydraulics.',
    duration: '4 Years',
    img: '/assets/images/category/cat4.jpg',
    deptSlug: 'civil-engineering'
  },
  {
    code: 'CSE',
    degree: 'B.E',
    name: 'Computer Science and Engineering',
    fullName: 'B.E - Computer Science and Engineering',
    desc: 'Core computer science foundations, intelligent algorithms, cloud computing, data structures and enterprise systems.',
    duration: '4 Years',
    img: '/assets/images/category/cat5.jpg',
    deptSlug: 'computer-science-and-engineering'
  },
  {
    code: 'CYBER',
    degree: 'B.E',
    name: 'Computer Science and Engineering ( Cyber Security )',
    fullName: 'B.E - Computer Science and Engineering ( Cyber Security )',
    desc: 'Digital forensics, ethical hacking, cryptographic protocols, cloud security frameworks and SOC threat intelligence.',
    duration: '4 Years',
    img: '/assets/images/course/3.jpg',
    deptSlug: 'computer-science-and-engineering'
  },
  {
    code: 'EEE',
    degree: 'B.E',
    name: 'Electrical and Electronics Engineering',
    fullName: 'B.E - Electrical and Electronics Engineering',
    desc: 'Power systems, smart grid architectures, electric mobility, renewable energy conversion and industrial drives.',
    duration: '4 Years',
    img: '/assets/images/category/cat6.jpg',
    deptSlug: 'electrical-and-electronics'
  },
  {
    code: 'ECE',
    degree: 'B.E',
    name: 'Electronics and Communication Engineering',
    fullName: 'B.E - Electronics and Communication Engineering',
    desc: '5G RF communications, embedded IoT systems, digital signal processing, microelectronics and modern telecommunication.',
    duration: '4 Years',
    img: '/assets/images/category/cat7.jpg',
    deptSlug: 'electronics-and-communication'
  },
  {
    code: 'FOOD',
    degree: 'B.Tech',
    name: 'Food Technology',
    fullName: 'B.Tech - Food Technology',
    desc: 'Food preservation, dairy processing, industrial packaging, safety certifications and precision nutrition formulation.',
    duration: '4 Years',
    img: '/assets/images/category/cat8.jpg',
    deptSlug: 'food-technology'
  },
  {
    code: 'IT',
    degree: 'B.Tech',
    name: 'Information Technology',
    fullName: 'B.Tech - Information Technology',
    desc: 'Full-stack software engineering, cloud networking, DevOps automation, enterprise database systems and cyber infrastructure.',
    duration: '4 Years',
    img: '/assets/images/course/3.jpg',
    deptSlug: 'information-technology'
  },
  {
    code: 'MECH',
    degree: 'B.E',
    name: 'Mechanical Engineering',
    fullName: 'B.E - Mechanical Engineering',
    desc: 'Computational mechanics, thermodynamics, additive manufacturing, automotive engineering and advanced robotics.',
    duration: '4 Years',
    img: '/assets/images/course/6.jpg',
    deptSlug: 'mechanical-engineering'
  }
];

export const pgProgramsDetailed = [
  {
    code: 'M-CSE',
    degree: 'M.E',
    name: 'Computer Science and Engineering',
    fullName: 'M.E - Computer Science and Engineering',
    desc: 'Advanced algorithms, machine learning research, distributed cloud systems and high-performance computing.',
    duration: '2 Years',
    img: '/assets/images/category/cat5.jpg',
    deptSlug: 'computer-science-and-engineering'
  },
  {
    code: 'M-VLSI',
    degree: 'M.E',
    name: 'VLSI Design',
    fullName: 'M.E - VLSI Design',
    desc: 'Advanced semiconductor microelectronics, ASIC design flows, physical synthesis, low-power VLSI and SoC testing.',
    duration: '2 Years',
    img: '/assets/images/category/cat7.jpg',
    deptSlug: 'electronics-and-communication'
  },
  {
    code: 'M-CAD',
    degree: 'M.E',
    name: 'CAD/CAM',
    fullName: 'M.E - CAD/CAM',
    desc: 'Advanced computer-aided design, generative modeling, CNC automation, finite element simulation and precision tooling.',
    duration: '2 Years',
    img: '/assets/images/course/6.jpg',
    deptSlug: 'mechanical-engineering'
  },
  {
    code: 'M-EMB',
    degree: 'M.E',
    name: 'Embedded System Technologies',
    fullName: 'M.E - Embedded System Technologies',
    desc: 'Real-time operating systems (RTOS), IoT architectures, ARM microcontrollers, automotive electronics and firmware engineering.',
    duration: '2 Years',
    img: '/assets/images/category/cat6.jpg',
    deptSlug: 'electrical-and-electronics'
  },
  {
    code: 'M-STR',
    degree: 'M.E',
    name: 'Structural Engineering',
    fullName: 'M.E - Structural Engineering',
    desc: 'Advanced earthquake-resistant design, prestressed concrete, smart materials, tall structures and structural health monitoring.',
    duration: '2 Years',
    img: '/assets/images/category/cat4.jpg',
    deptSlug: 'civil-engineering'
  },
  {
    code: 'M-FOOD',
    degree: 'M.Tech',
    name: 'Food Technology',
    fullName: 'M.Tech - Food Technology',
    desc: 'Advanced food processing technologies, biopolymers, food biotechnology, functional food development and global quality systems.',
    duration: '2 Years',
    img: '/assets/images/category/cat8.jpg',
    deptSlug: 'food-technology'
  },
  {
    code: 'M-FARM',
    degree: 'M.Tech',
    name: 'Farm Machinery',
    fullName: 'M.Tech - Farm Machinery',
    desc: 'Advanced agricultural power machinery, precision agro-robotics, bio-energy engineering and automated harvesting systems.',
    duration: '2 Years',
    img: '/assets/images/category/cat1.jpg',
    deptSlug: 'agricultural-engineering'
  }
];

export const bottomBannerHtml = `<div class="programme-bottom-banner reveal"><div class="bottom-banner-cap">${deptIcon(
  'grad'
)}</div><div class="bottom-banner-text"><h4>Choose a programme.</h4><p>Shape a better tomorrow.</p></div><div class="bottom-banner-line"></div><div class="bottom-banner-script">Engineers for a Better Tomorrow</div></div>`;
