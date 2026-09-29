import { icon } from '../utils/icons.js';
import { pageGroups } from './navigationData.js';

export const internalPageData = {
  'campus-life': {
    category: 'Campus Experience',
    breadcrumbs: ['Campus', 'Campus Life'],
    heroPills: [
      { icon: 'leaf', label: '45-Acre Eco Campus' },
      { icon: 'runner', label: '26+ Sports & Clubs' },
      { icon: 'wifi', label: 'High-Speed Wi-Fi' },
      { icon: 'grad', label: 'Autonomous Hub' }
    ],
    title: 'Student Life & Campus Community',
    subtitle: 'A vibrant 45-acre eco-friendly smart campus empowering holistic leadership, cultural dynamism, and engineering breakthroughs.',
    overviewLead: 'At Sri Shakthi, campus life is an enriching journey that extends far beyond lecture halls and laboratories. Our vibrant 45-acre eco-friendly campus in Coimbatore fosters a multidisciplinary environment where academic rigor meets cultural creativity, competitive athletics, maker culture, and strong community bonds.',
    featuredImage: '/brand/campus-life/student-life.png',
    featuredBadge: '45-Acre Green Campus',
    featuredStat: '5,000+ Engaged Learners',
    pillars: [
      { icon: 'masks', tag: 'VIBRANT COMMUNITY', title: 'Student Life & Cultural Guilds', desc: 'Over 26 student-led clubs, cultural fests, music ensembles, drama troupes, and hackathons create an active atmosphere for personal expression, leadership, and lifelong friendships.' },
      { icon: 'leaf', tag: 'SUSTAINABLE LIVING', title: '45-Acre Eco-Conscious Campus', desc: 'Designed with extensive botanical gardens, solar energy installations, rainwater harvesting lakes, and pedestrian-first walkways promoting wellness and environmental mindfulness.' },
      { icon: 'runner', tag: 'CHAMPIONSHIP ATHLETICS', title: 'Sports & Recreational Arena', desc: 'Olympic-dimension outdoor stadium, 400m synthetic running track, floodlit basketball and tennis courts, plus indoor badminton arenas cultivating peak physical fitness and team spirit.' },
      { icon: 'cube', tag: 'MAKER CULTURE', title: '24/7 Innovation & Ideation Hubs', desc: 'Collaborative maker spaces, student startup incubators, and high-performance computing studios where bold engineering concepts transform into tangible prototypes.' }
    ],
    gallery: [
      { img: '/brand/campus-life/student-life.png', title: 'Dynamic Student Commons', caption: 'Lively community lounges and collaborative open-air study areas.' },
      { img: '/brand/campus-life/cultural.png', title: 'Cultural Celebrations & Fests', caption: 'Annual mega fests featuring national music artists and performing arts ensembles.' },
      { img: '/brand/campus-life/innovation.png', title: 'Maker Spaces & Labs', caption: 'Round-the-clock technical incubation workspaces and prototype hardware suites.' },
      { img: '/brand/campus-life/learning-growth.png', title: 'Collaborative Learning Hub', caption: 'Interactive study commons and multidisciplinary peer mentoring forums.' }
    ],
    metrics: [
      { val: '45', suffix: '+', label: 'Acres of Green Campus' },
      { val: '26', suffix: '+', label: 'Active Student Clubs' },
      { val: '100', suffix: '+', label: 'Annual Campus Events' },
      { val: '100', suffix: '%', label: 'Ragging-Free Safe Haven' }
    ],
    highlights: [
      { title: 'Annual Cultural Festival - DHRUVA', desc: 'Inter-college mega celebration featuring music, choreography, drama, fashion, and national celebrity performances.' },
      { title: 'Student Leadership Council', desc: 'Elected student body representing learner interests, organizing outreach, and spearheading peer mentorship programs.' },
      { title: 'Multi-Cuisine Food Courts', desc: 'Hygienic cafeterias serving fresh South Indian, North Indian, and continental options with strict quality monitoring.' },
      { title: 'Campus Security & Surveillance', desc: 'Round-the-clock security personnel, 250+ CCTV cameras, and biometric access points guaranteeing 100% safety.' }
    ],
    faqs: [
      { q: 'What is the daily schedule like on campus?', a: 'Academic sessions typically run from 8:45 AM to 4:45 PM, followed by club activities, sports practices, and library study hours until 7:30 PM.' },
      { q: 'Are there mentorship programs for freshers?', a: 'Yes, every first-year student is assigned a senior student mentor and a dedicated faculty counselor for personalized guidance throughout their journey.' }
    ],
    ctaTitle: 'Ready to Experience Life at Sri Shakthi?',
    ctaSubtitle: 'Schedule a guided campus tour or connect with our student ambassadors today.'
  },
  'facilities': {
    category: 'Infrastructure',
    breadcrumbs: ['Campus', 'Facilities'],
    heroPills: [
      { icon: 'tech', label: '50+ Specialized Labs' },
      { icon: 'wifi', label: '1 Gbps Dedicated Fiber' },
      { icon: 'grad', label: '1,500+ Compute Nodes' },
      { icon: 'sun', label: '100% Green Energy' }
    ],
    title: 'Modern Facilities & Advanced Labs',
    subtitle: 'Engineered for high-impact hands-on learning with next-gen labs, smart seminar halls, and high-speed campus fiber connectivity.',
    overviewLead: 'Sri Shakthi provides cutting-edge research facilities, world-class compute centers, and collaborative academic infrastructure that prepare aspiring engineers for modern industry environments and global breakthroughs.',
    featuredImage: '/brand/techpark-hd.jpg',
    featuredBadge: 'Next-Gen Research Labs',
    featuredStat: '1 Gbps High-Speed Net',
    pillars: [
      { icon: 'tech', tag: 'HIGH PERFORMANCE', title: 'High-Performance Computing & AI', desc: 'Dedicated GPU clusters for AI/ML training, computer vision models, data analytics, and enterprise database simulations.' },
      { icon: 'grad', tag: 'INTERACTIVE', title: 'Digital Smart Classrooms', desc: 'Acoustically tuned lecture halls equipped with interactive smart panels, hybrid streaming, and ergonomic seating.' },
      { icon: 'cube', tag: 'R&D HUBS', title: 'Central Research Facility', desc: 'Precision analytical instruments, embedded hardware analyzers, RF testbeds, and rapid 3D prototyping suites.' },
      { icon: 'masks', tag: 'AUDITORIUMS', title: 'Convention & Seminar Halls', desc: 'Fully air-conditioned 1,200-capacity auditorium and tiered symposium chambers for global conferences.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Tech Park Academic Complex', caption: 'Flagship academic infrastructure housing modern tech labs and departments.' },
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'Artificial Intelligence Lab', caption: 'High-compute workstations configured for machine learning and AI research.' },
      { img: '/brand/special-labs/lab-robotics-hd.jpg', title: 'Robotics & Automation Suite', caption: 'Industrial robotic arms, mechatronics stations, and autonomous kits.' },
      { img: '/brand/special-labs/lab-iot-hd.jpg', title: 'IoT & Embedded Systems Lab', caption: 'Sensors, microcontrollers, and wireless development testbeds.' }
    ],
    metrics: [
      { val: '50', suffix: '+', label: 'Specialized Tech Labs' },
      { val: '1', suffix: ' Gbps', label: 'High-Speed Fiber Net' },
      { val: '1500', suffix: '+', label: 'Modern Compute Nodes' },
      { val: '100', suffix: '%', label: 'Power Backup & Solar' }
    ],
    highlights: [
      { title: 'Industry-Sponsored Centers of Excellence', desc: 'Collaborative labs supported by leading tech giants for direct real-world skill development.' },
      { title: 'Campus-wide Gigabit Wi-Fi', desc: 'Seamless high-throughput wireless coverage spanning hostels, classrooms, courtyards, and cafeterias.' },
      { title: 'Green Energy Infrastructure', desc: 'Rooftop solar installations delivering sustainable power to labs and central computing infrastructure.' },
      { title: '24/7 ATM & Banking Services', desc: 'On-campus nationalized bank branch and multiple 24-hour ATM kiosks for student convenience.' }
    ],
    faqs: [
      { q: 'Can students access labs after regular college hours?', a: 'Yes, project teams and research students have special access permissions for specialized labs up to 8:00 PM with faculty approval.' },
      { q: 'Is high-speed internet available in hostel rooms?', a: 'Yes, both Wi-Fi access points and Ethernet ports are available throughout residential blocks.' }
    ],
    ctaTitle: 'Explore Our Advanced Research Facilities',
    ctaSubtitle: 'Take a virtual tour or visit our research incubators and centers of excellence.'
  },
  'hostel': {
    category: 'Student Living',
    breadcrumbs: ['Campus', 'Hostels'],
    heroPills: [
      { icon: 'home', label: '2,500+ Bed Capacity' },
      { icon: 'shield', label: '24/7 Warden & Security' },
      { icon: 'cup', label: 'Nutritious Dining' },
      { icon: 'leaf', label: 'Green Surroundings' }
    ],
    title: 'Hostel Accommodation & Student Residences',
    subtitle: 'Secure, clean, and comfortable residential blocks providing a serene study atmosphere, nutritious dining, and round-the-clock security.',
    overviewLead: 'Our campus hostels are a genuine home away from home. Designed for safety, camaraderie, and peaceful study, residences feature spacious rooms, modern hygienic dining halls, dedicated recreation corners, and 24/7 healthcare support.',
    featuredImage: '/brand/campus-arch.jpg',
    featuredBadge: 'Separate Boys & Girls Blocks',
    featuredStat: '2,500+ Resident Scholars',
    pillars: [
      { icon: 'home', tag: 'COMFORT', title: 'Furnished Living Quarters', desc: 'Spacious 2, 3, and 4-sharing rooms equipped with ergonomic study desks, wardrobes, and private balconies.' },
      { icon: 'cup', tag: 'NUTRITION', title: 'Hygienic Dining Halls', desc: 'FSSAI-certified central kitchens serving balanced, appetizing vegetarian and non-vegetarian menus.' },
      { icon: 'book', tag: 'ACADEMICS', title: 'Resident Study Lounges', desc: 'Quiet late-night study halls, TV lounges, indoor table tennis, and chess recreation spaces.' },
      { icon: 'shield', tag: 'SECURITY', title: 'Safety & Health Protocol', desc: 'Round-the-clock resident wardens, female security staff for girls blocks, and on-call medical doctors.' }
    ],
    gallery: [
      { img: '/brand/campus-arch.jpg', title: 'Residential Complex & Courtyard', caption: 'Lush residential avenues with quiet courtyards for relaxation.' },
      { img: '/brand/campus-life/student-life.png', title: 'Student Community Lounges', caption: 'Dedicated areas for peer study, group discussions, and unwinding.' },
      { img: '/brand/library-study-hall.jpg', title: 'Late Evening Study Hall', caption: 'Quiet air-conditioned reading halls open late for resident boarders.' },
      { img: '/brand/campus-life/cultural.png', title: 'Hostel Day & Cultural Dinners', caption: 'Annual hostel night with traditional banquets and musical entertainment.' }
    ],
    metrics: [
      { val: '2500', suffix: '+', label: 'Resident Capacity' },
      { val: '4', suffix: ' Times', label: 'Nutritious Meals Daily' },
      { val: '24', suffix: '/7', label: 'Security & Wardens' },
      { val: '100', suffix: '%', label: 'Solar Water Heating' }
    ],
    highlights: [
      { title: 'RO Purified Drinking Water', desc: 'Multi-stage reverse osmosis water purifiers with chiller units installed on every floor.' },
      { title: 'Commercial Laundry Services', desc: 'Fast, automated laundry and iron facilities available within the residential complex.' },
      { title: 'High-Speed Wi-Fi Connectivity', desc: 'Dedicated hostel network routers ensuring uninterrupted project research and streaming.' },
      { title: 'Fitness Gym in Residence', desc: 'Modern fitness equipment and yoga spaces exclusively accessible to resident boarders.' }
    ],
    faqs: [
      { q: 'What is the procedure to apply for hostel accommodation?', a: 'Students can opt for hostel residency during the admission counseling process. Room allotment is processed on a first-come, first-served basis.' },
      { q: 'What are the hostel in-time rules?', a: 'All students are required to report to their respective blocks by 7:30 PM. Outings require parental authorization via our digital parent portal.' }
    ],
    ctaTitle: 'Apply for Residential Accommodation',
    ctaSubtitle: 'Secure your comfortable stay at Sri Shakthi residences with world-class facilities and caring wardens.'
  },
  'transport': {
    category: 'Logistics & Safety',
    breadcrumbs: ['Campus', 'Transport'],
    heroPills: [
      { icon: 'bus', label: '37 Modern Bus Fleet' },
      { icon: 'compass', label: '37 Commute Routes' },
      { icon: 'shield', label: 'GPS Real-Time Tracking' },
      { icon: 'check', label: 'Certified Drivers' }
    ],
    title: 'Comprehensive Transport Network',
    subtitle: 'Connecting students and faculty across Coimbatore, Tirupur, Pollachi, and Palakkad with 37 modern GPS-tracked buses.',
    overviewLead: 'Sri Shakthi operates one of the most comprehensive collegiate bus transit networks in Western Tamil Nadu. Our fleet of 37 GPS-tracked vehicles ensures punctual, comfortable, and safe daily transportation for thousands of day scholars.',
    featuredImage: '/brand/campus-life/transport-fleet.jpg',
    featuredBadge: '37 Dedicated Buses',
    featuredStat: '37 Daily Routes',
    pillars: [
      { icon: 'clock', tag: 'PUNCTUALITY', title: 'Punctual Daily Service', desc: 'Strictly scheduled morning arrivals and evening departures synchronized with academic timetables.' },
      { icon: 'compass', tag: 'TELEMATICS', title: 'Real-Time GPS Tracking', desc: 'Mobile tracking app allowing students and parents to view bus coordinates and stop arrival times.' },
      { icon: 'shield', tag: 'SAFETY', title: 'Rigorous Safety Compliance', desc: 'Speed governors, emergency exits, first-aid kits, and regular RTO fitness inspections on every vehicle.' },
      { icon: 'pin', tag: 'COVERAGE', title: 'Broad Regional Coverage', desc: 'Key stops across Coimbatore city, Annur, Avinashi, Palladam, Tirupur, and neighboring arterial corridors.' }
    ],
    gallery: [
      { img: '/brand/campus-life/transport-fleet.jpg', title: 'Sri Shakthi Dedicated Bus Fleet', caption: 'Modern, well-maintained bus fleet parked at the central boarding depot.' },
      { img: '/brand/campus-arch.jpg', title: 'Main Terminal & Boarding Bay', caption: 'Orderly, dedicated bays facilitating easy morning and evening transit.' },
      { img: '/brand/campus-life/campus-generated.png', title: 'Arrival & Departure Avenue', caption: 'Wide, tree-lined roads providing smooth entry and exit for buses.' },
      { img: '/brand/techpark-hd.jpg', title: 'Campus Road Network', caption: 'Connected internal roadways linking academic complexes and transit points.' }
    ],
    metrics: [
      { val: '60', suffix: '+', label: 'GPS-Tracked Buses' },
      { val: '50', suffix: '+', label: 'Daily Commute Routes' },
      { val: '4000', suffix: '+', label: 'Students Commuting Daily' },
      { val: '100', suffix: '%', label: 'Certified Drivers' }
    ],
    highlights: [
      { title: 'Dedicated Special Buses for Evening Classes', desc: 'Special transport runs for evening class students, special coaching sessions, sports practice, or library study.' },
      { title: 'Experienced Driver Workforce', desc: 'Drivers undergo bi-annual defensive driving refresher workshops and comprehensive health checkups.' },
      { title: 'Contactless Bus Passes', desc: 'Digital QR-enabled smart cards allowing swift boarding without physical ticket hassles.' },
      { title: 'Emergency Roadside Assistance', desc: 'Dedicated maintenance van and backup fleet on standby across all major commute sectors.' }
    ],
    faqs: [
      { q: 'How can I register for the college bus facility?', a: 'Transport registration opens at the start of each semester via the Student Portal or at the Transport Office counter in Admin Block.' },
      { q: 'Can day-scholars change their bus stop mid-year?', a: 'Yes, stop change requests can be submitted to the Transport Coordinator with appropriate route seat verification.' }
    ],
    ctaTitle: 'Find Your Bus Route & Commute Timetable',
    ctaSubtitle: 'Download the route map and get in touch with our transport cell for route allocations.'
  },
  'sports': {
    category: 'Athletics & Fitness',
    breadcrumbs: ['Campus', 'Sports & Athletics'],
    heroPills: [
      { icon: 'trophy', label: 'Championship Winning Teams' },
      { icon: 'runner', label: '400m Athletic Track' },
      { icon: 'medal', label: 'Sports Scholarships' },
      { icon: 'shield', label: 'Certified Coaches' }
    ],
    title: 'Sports, Physical Fitness & Games',
    subtitle: 'Nurturing champions and promoting physical fitness with Olympic-standard tracks, multi-sport courts, and professional coaching.',
    overviewLead: 'Physical fitness and team sports form a cornerstone of character development at Sri Shakthi. From zonal championships to all-India inter-university trophies, our athletes consistently bring pride to the institution.',
    featuredImage: '/brand/campus-life/sports-team.png',
    featuredBadge: 'Championship Teams',
    featuredStat: '15+ Sports Disciplines',
    pillars: [
      { icon: 'runner', tag: 'OUTDOOR ARENA', title: 'Multi-Sport Outdoor Arena', desc: 'Regulation cricket pitch, standard football ground, 400m athletic track, and synthetic basketball courts.' },
      { icon: 'trophy', tag: 'INDOORS', title: 'Indoor Sports Complex', desc: 'Multi-court badminton stadium with wooden flooring, table tennis arena, and chess training center.' },
      { icon: 'cube', tag: 'CONDITIONING', title: 'Modern Conditioning Gym', desc: 'Heavy resistance machines, cardio treadmills, cross-trainers, and qualified strength coaches.' },
      { icon: 'medal', tag: 'SPONSORSHIP', title: 'Tournament Sponsorship', desc: 'Full institutional travel, accommodation, and kit support for university, zonal, and national championships.' }
    ],
    gallery: [
      { img: '/brand/campus-life/sports-team.png', title: 'Varsity Champions & Squads', caption: 'Our victorious university championship teams across cricket, athletics, and basketball.' },
      { img: '/brand/campus-life/sports.png', title: 'Athletic Track & Field Grounds', caption: 'Olympic standard 400-meter track surrounded by green campus vistas.' },
      { img: '/brand/campus-life/student-life.png', title: 'Active Student Recreation', caption: 'Daily evening recreational sports matches fostering collegiate camaraderie.' },
      { img: '/brand/campus-life/cultural.png', title: 'Annual Sports Day Celebrations', caption: 'Intense inter-department sports tournaments and track awards ceremony.' }
    ],
    metrics: [
      { val: '10', suffix: '+', label: 'Acres Sports Arena' },
      { val: '45', suffix: '+', label: 'State & Zonal Trophies' },
      { val: '15', suffix: '+', label: 'Sport Disciplines' },
      { val: '100', suffix: '%', label: 'Sports Scholarships' }
    ],
    highlights: [
      { title: 'Annual Inter-College Sports Fest', desc: 'Welcomes 80+ collegiate teams from across southern states for high-stakes athletic showdowns.' },
      { title: 'Special Sports Quota & Fee Concessions', desc: 'Generous tuition fee waivers and sports kits awarded to state and national level medalists.' },
      { title: 'Floodlit Evening Sports Facilities', desc: 'Modern LED floodlighting enabling extended practice matches after regular classroom hours.' },
      { title: 'Physiotherapy & Sports Rehab', desc: 'Immediate medical assistance and injury rehabilitation support for competing athletes.' }
    ],
    faqs: [
      { q: 'Are beginner coaching classes available for students?', a: 'Yes, our Department of Physical Education conducts beginner sessions in badminton, cricket, volleyball, and yoga every morning and evening.' },
      { q: 'What sports quota scholarships are offered?', a: 'Students representing state or national tournaments receive up to 100% tuition and hostel fee waivers based on performance.' }
    ],
    ctaTitle: 'Join the Champion Sri Shakthi Sports Squad',
    ctaSubtitle: 'Connect with our physical directors to attend trials and varsity team selections.'
  },
  'clubs': {
    category: 'Co-Curriculars',
    breadcrumbs: ['Campus', 'Student Clubs'],
    heroPills: [
      { icon: 'code', label: '26+ Student Clubs' },
      { icon: 'masks', label: '1,800+ Active Members' },
      { icon: 'globe', label: 'National Chapters' },
      { icon: 'star', label: 'Annual Club Grants' }
    ],
    title: 'Student Clubs & Technical Societies',
    subtitle: 'Over 26 student-governed technical, cultural, social, and literary clubs providing platforms to lead, code, create, and inspire.',
    overviewLead: 'Clubs at Sri Shakthi are vibrant launchpads where students turn passions into projects, discover collaborative leadership, organize nationwide hackathons, and forge lifelong creative connections.',
    featuredImage: '/brand/campus-life/clubs.png',
    featuredBadge: '26+ Student-Run Clubs',
    featuredStat: '1,800+ Active Members',
    pillars: [
      { icon: 'shield', tag: 'SERVICE', title: 'National Cadet Corps', image: '/brand/campus-life/ncc-cadets.jpg', desc: 'Discipline, leadership, ceremonial training, and service through the NCC Army Wing.' },
      { icon: 'star', tag: 'CULTURE', title: 'Step Up', image: '/brand/campus-life/cultural.png', desc: 'A student-led platform for cultural expression, confidence, performance, and campus events.' },
      { icon: 'masks', tag: 'COMMUNICATION', title: 'Media Guild', image: '/brand/campus-life/clubs.png', desc: 'Student storytellers creating campus news, event coverage, photography, video, and digital content.' },
      { icon: 'runner', tag: 'LEADERSHIP', title: 'Women Empowerment', image: '/brand/campus-life/sports.png', desc: 'A supportive forum for confidence, wellbeing, outdoor learning, leadership, and equal participation.' },
      { icon: 'code', tag: 'TECHNOLOGY', title: 'IEEE Student Branch', image: '/brand/campus-life/technology.png', desc: 'Technical talks, workshops, project communities, and professional development through IEEE.' },
      { icon: 'cube', tag: 'ENTREPRENEURSHIP', title: 'E-Cell [EDC]', image: '/brand/campus-life/innovation.png', desc: 'An entrepreneurship and innovation community helping students shape ideas into ventures.' },
      { icon: 'book', tag: 'LANGUAGE & ARTS', title: 'Tamil Mandram', image: '/brand/campus-life/cultural.png', desc: 'A cultural and literary forum celebrating Tamil language, heritage, music, and expression.' },
      { icon: 'leaf', tag: 'SOCIAL OUTREACH', title: 'Rotaract Club', image: '/brand/campus-life/student-life.png', desc: 'Service initiatives, volunteering, community partnerships, and responsible student citizenship.' },
      { icon: 'leaf', tag: 'SUSTAINABILITY', title: 'Socio Eco Club', image: '/brand/campus-arch.jpg', desc: 'Environmental awareness, campus sustainability, social action, and eco-conscious projects.' },
      { icon: 'masks', tag: 'CULTURAL FORUM', title: 'Arista', image: '/brand/campus-life/cultural.png', desc: 'A cultural platform for dialogue, celebrations, student showcases, and shared campus experiences.' }
    ],
    gallery: [
      { img: '/brand/campus-life/clubs.png', title: 'Club Exhibitions & Showcase', caption: 'Student societies demonstrating live hardware and software innovations.' },
      { img: '/brand/campus-life/cultural.png', title: 'Music & Performing Arts Ensemble', caption: 'College orchestra and dance troupes performing live on festival stages.' },
      { img: '/brand/campus-life/innovation.png', title: 'Hackathon & Coding Competitions', caption: 'Overnight hackathons and competitive programming challenges.' },
      { img: '/brand/campus-life/learning-growth.png', title: 'Student Seminars & Workshops', caption: 'Peer-to-peer technical learning seminars and guest tech talks.' }
    ],
    metrics: [
      { val: '26', suffix: '+', label: 'Active Student Clubs' },
      { val: '1800', suffix: '+', label: 'Student Members' },
      { val: '75', suffix: '+', label: 'Workshops & Hackathons' },
      { val: '12', suffix: '+', label: 'National Chapters' }
    ],
    highlights: [
      { title: 'Annual Club Recruitment Expo', desc: 'Freshers get direct hands-on demonstrations from every club at the beginning of the academic year.' },
      { title: 'Student Club Funding & Grants', desc: 'The college allocates dedicated annual innovation budgets to fund student projects and external competitions.' },
      { title: 'Global Society Affiliations', desc: 'Active affiliations with IEEE, ACM, CSI, IETE, SAE India, and Indian Society for Technical Education.' },
      { title: 'Leadership Certification', desc: 'Club office bearers receive formal leadership certificates and credits toward their co-curricular honors.' }
    ],
    faqs: [
      { q: 'How many clubs can a student join?', a: 'Students are encouraged to join up to two clubs (one technical and one cultural or social) to maintain academic-life balance.' },
      { q: 'Can students start a new club?', a: 'Yes, any group of 15+ students with a designated faculty mentor can submit a charter proposal to the Student Affairs Council.' }
    ],
    ctaTitle: 'Ignite Your Passion with Sri Shakthi Clubs',
    ctaSubtitle: 'Explore our clubs directory or register online for the upcoming Club Induction Week.'
  },
  'ncc': {
    category: 'National Service',
    breadcrumbs: ['Campus', 'NCC & NSS'],
    heroPills: [
      { icon: 'shield', label: 'NCC Army Wing' },
      { icon: 'star', label: 'NSS Community Unit' },
      { icon: 'medal', label: 'B & C Certification' },
      { icon: 'runner', label: 'Direct SSB Mentorship' }
    ],
    title: 'National Cadet Corps (NCC) & NSS Units',
    subtitle: 'Fostering patriotism, unwavering discipline, leadership acumen, and selfless community service among youth.',
    overviewLead: 'Our NCC and NSS detachments instill the highest standards of integrity, resilience, and nation-building. Under expert military instructors and dedicated officers, cadets undergo comprehensive training and lead impactful societal service missions.',
    featuredImage: '/brand/campus-life/ncc-cadets.jpg',
    featuredBadge: 'Army Wing & NSS Unit',
    featuredStat: '100% C-Cert Pass Rate',
    pillars: [
      { icon: 'shield', tag: 'DISCIPLINE', title: 'NCC Military Training', desc: 'Drill training, weapon handling, map reading, obstacle courses, and firing range certifications.' },
      { icon: 'star', tag: 'CAMPS', title: 'National Integration Camps', desc: 'Selection to Republic Day Parade (RDC), Thal Sainik Camp (TSC), and National Youth Festivals.' },
      { icon: 'leaf', tag: 'COMMUNITY', title: 'NSS Community Outreach', desc: 'Adopting local villages for sanitation awareness, literacy drives, and environmental conservation.' },
      { icon: 'compass', tag: 'CAREERS', title: 'Armed Forces Mentorship', desc: 'Direct guidance from defense veterans for CDS, AFCAT, and SSB interview preparation.' }
    ],
    gallery: [
      { img: '/brand/campus-life/ncc-cadets.jpg', title: 'NCC Cadets Ceremonial Parade', caption: 'Impeccable squad drill and saluting guard presented on campus.' },
      { img: '/brand/campus-life/sports-team.png', title: 'Physical Endurance & Drill Regimen', caption: 'Early morning conditioning runs and obstacle course training.' },
      { img: '/brand/campus-life/cultural.png', title: 'NSS Community Service Drive', caption: 'Cadets and volunteers organizing rural sanitation and medical awareness camps.' },
      { img: '/brand/campus-arch.jpg', title: 'Independence Day Honors', caption: 'Patriotic ceremonial assembly at the main institutional flag mast.' }
    ],
    metrics: [
      { val: '160', suffix: '+', label: 'Enrolled Cadets & Volunteers' },
      { val: '100', suffix: '%', label: 'C-Certificate Pass Rate' },
      { val: '12', suffix: '+', label: 'Rural Service Camps' },
      { val: '15', suffix: '+', label: 'Blood Donation Drives' }
    ],
    highlights: [
      { title: 'Defense Services SSB Guidance', desc: 'Dedicated training sessions that have helped our cadets secure direct commissions into the Indian Armed Forces.' },
      { title: 'Special Camps & Treks', desc: 'Annual trekking expeditions, leadership camps, and disaster management rescue training modules.' },
      { title: 'Extensive Blood Donation Camps', desc: 'Over 500 units of blood collected annually in collaboration with government hospital blood banks.' },
      { title: 'College Tree Plantation Mission', desc: 'Over 2,000 saplings planted in and around neighboring villages by our active NSS volunteers.' }
    ],
    faqs: [
      { q: 'What are the career benefits of obtaining an NCC C-Certificate?', a: 'NCC "C" Certificate holders with high grades receive exemptions from written tests for defense officer selection exams like CDS and direct SSB calls.' },
      { q: 'Can both boys and girls enroll in NCC?', a: 'Yes! Both boys and girls can enroll in our mixed-cadre Army wings with equal training and leadership opportunities.' }
    ],
    ctaTitle: 'Step Up to Serve the Nation',
    ctaSubtitle: 'Join our prestigious NCC Army Wing or NSS volunteer force at the start of the academic term.'
  },
  'academics': {
    category: 'Academics',
    breadcrumbs: ['Academics', 'Overview'],
    heroPills: [
      { icon: 'grad', label: 'Autonomous Curriculum' },
      { icon: 'tech', label: '14+ UG Disciplines' },
      { icon: 'star', label: 'NBA Accredited' },
      { icon: 'check', label: 'Choice-Based Credits' }
    ],
    title: 'Academic Framework & Learning Model',
    subtitle: 'Autonomous curriculum aligned with Industry 4.0, fostering experiential mastery, research-driven innovation, and global career readiness.',
    overviewLead: 'Sri Shakthi combines autonomous academic freedom with strict academic excellence. Our curriculum offers choice-based credit systems, specialized minor tracks, experiential laboratory projects, and mentorship from distinguished faculty.',
    featuredImage: '/brand/curriculum-hero.jpg',
    featuredBadge: 'Autonomous Anna Univ Affiliated',
    featuredStat: '14 UG & 7 PG Programs',
    pillars: [
      { icon: 'book', tag: 'FLEXIBILITY', title: 'Choice Based Credit System (CBCS)', desc: 'Flexibility to choose cross-disciplinary electives, minor specializations, and honors degrees.' },
      { icon: 'tech', tag: 'EXPERIENTIAL', title: 'Project-Based Learning', desc: 'Hands-on capstone projects every semester addressing real industrial and societal challenges.' },
      { icon: 'star', tag: 'SCHOLARSHIP', title: 'Distinguished Faculty', desc: 'Accomplished professors with doctoral credentials, patents, and high-impact peer-reviewed publications.' },
      { icon: 'medal', tag: 'GLOBAL CREDENTIALS', title: 'Global Skill Certifications', desc: 'Integrated AWS, Cisco, RedHat, and NVIDIA deep learning certifications embedded in the course.' }
    ],
    gallery: [
      { img: '/brand/curriculum-hero.jpg', title: 'Interactive Lecture Environment', caption: 'Technology-enabled classrooms supporting active group discussions and presentations.' },
      { img: '/brand/library-study-hall.jpg', title: 'Central Knowledge Repository', caption: 'Over 50,000 volumes, international journals, and digital research access.' },
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'Supercomputing AI Lab', caption: 'Dedicated NVIDIA GPU workstations for artificial intelligence projects.' },
      { img: '/brand/techpark-hd.jpg', title: 'Modern Engineering Campus', caption: 'Interconnected academic complexes designed for focused technical exploration.' }
    ],
    metrics: [
      { val: '14', suffix: '+', label: 'Academic Programs' },
      { val: '1:15', suffix: '', label: 'Faculty to Student Ratio' },
      { val: '85', suffix: '%+', label: 'Distinction & First Class' },
      { val: '45', suffix: '+', label: 'Curriculum Partners' }
    ],
    highlights: [
      { title: 'Industry Co-Designed Syllabi', desc: 'Curriculum curated in partnership with tech leaders to reflect today’s real workforce demands.' },
      { title: 'Mandatory Industrial Internships', desc: 'Students gain 8-12 weeks of immersive industrial experience before their final year.' },
      { title: 'Research Incubation Center', desc: 'Seed funding and patent filing assistance provided for student-led patentable innovations.' },
      { title: 'Honors and Minor Degree Tracks', desc: 'Earn a specialized minor in Artificial Intelligence, FinTech, or Cyber Security alongside your core B.E.' }
    ],
    faqs: [
      { q: 'Is Sri Shakthi an autonomous institution?', a: 'Yes, Sri Shakthi operates as an autonomous institution affiliated with Anna University, Chennai, with curriculum freedom approved by UGC.' },
      { q: 'What is the evaluation pattern?', a: 'Assessment is balanced between Continuous Internal Evaluation (40%) and End Semester Examinations (60%) emphasizing practical competence.' }
    ],
    ctaTitle: 'Explore Our Academic Programs',
    ctaSubtitle: 'Discover our departments, course syllabi, and undergraduate engineering offerings.'
  },
  'scholarships': {
    category: 'Admissions & Aid',
    breadcrumbs: ['Admissions', 'Scholarships'],
    heroPills: [
      { icon: 'medal', label: '₹2.5 Cr+ Annual Aid' },
      { icon: 'star', label: 'Merit Fee Waivers' },
      { icon: 'trophy', label: 'Sports Quota Grants' },
      { icon: 'leaf', label: 'First Gen Graduate Aid' }
    ],
    title: 'Scholarships & Institutional Financial Aid',
    subtitle: 'Over ₹2.5 Crores awarded annually in merit, sports, rural student, and government scholarships ensuring no bright mind is left behind.',
    overviewLead: 'Sri Shakthi believes that financial constraints should never stand in the way of academic ambition. Through our comprehensive institutional trust funds and government welfare schemes, over 1,200 scholars receive fee waivers annually.',
    featuredImage: '/brand/campus-life/learning-growth.png',
    featuredBadge: '₹2.5 Cr+ Annual Aid Disbursed',
    featuredStat: '1,200+ Scholars Supported',
    pillars: [
      { icon: 'star', tag: 'MERIT AWARDS', title: 'Academic Merit Scholarships', desc: 'Up to 100% tuition waiver for high scorers in HSC board exams and top Anna University counseling ranks.' },
      { icon: 'trophy', tag: 'ATHLETICS', title: 'Sports Quota Grants', desc: 'Complete tuition and residential concessions for state and national sports medalists and athletes.' },
      { icon: 'grad', tag: 'FIRST GENERATION', title: 'First Generation Graduate Aid', desc: 'Government-supported fee concessions for students who are the first in their families to attend college.' },
      { icon: 'leaf', tag: 'NEED-BASED', title: 'Economic Need Assistance', desc: 'Need-based institutional trust stipends ensuring underprivileged students complete their degrees uninterrupted.' }
    ],
    gallery: [
      { img: '/brand/campus-life/learning-growth.png', title: 'Empowering Student Scholars', caption: 'Recognition ceremony for institutional academic scholarship recipients.' },
      { img: '/brand/campus-life/student-life.png', title: 'Bright Minds on Campus', caption: 'A collaborative, inclusive learning environment for aspiring engineers.' },
      { img: '/brand/campus-life/sports-team.png', title: 'Sports Quota Awardees', caption: 'Athletes receiving special equipment, training grants, and academic support.' },
      { img: '/brand/curriculum-hero.jpg', title: 'Academic Excellence Honors', caption: 'Top rankers honored with certificate of honors and research grants.' }
    ],
    metrics: [
      { val: '2.5', suffix: ' Cr+', label: 'Annual Scholarship Fund' },
      { val: '1200', suffix: '+', label: 'Students Benefiting' },
      { val: '100', suffix: '%', label: 'Max Tuition Fee Waiver' },
      { val: '5', suffix: '+', label: 'Scholarship Categories' }
    ],
    highlights: [
      { title: 'Cut-off Based Tuition Waivers', desc: 'HSC cut-offs above 190 receive 100% tuition concession; 180-189 receive 50% concession.' },
      { title: 'Single Window Verification', desc: 'Streamlined desk in the Admissions Office assists students in applying for central & state post-matric schemes.' },
      { title: 'Alumni Endowed Scholarships', desc: 'Distinguished alumni contribute annual financial support to deserving final-year research projects.' },
      { title: 'Zero Hassle Renewal', desc: 'Scholarships remain renewed across all four years upon maintaining good academic standing.' }
    ],
    faqs: [
      { q: 'How can I apply for merit scholarship during admission?', a: 'Present your 12th standard mark sheets during admission counseling. Eligibility will be calculated and granted directly.' },
      { q: 'Can government scholarship and college fee concessions be combined?', a: 'Students can claim eligible government welfare schemes along with institutional support subject to statutory guidelines.' }
    ],
    ctaTitle: 'Check Your Scholarship Eligibility',
    ctaSubtitle: 'Use our scholarship calculator or contact our financial aid counselors for immediate guidance.'
  },
  'eligibility': {
    category: 'Admissions',
    breadcrumbs: ['Admissions', 'Eligibility Criteria'],
    heroPills: [
      { icon: 'check', label: 'TNEA Code: 2764' },
      { icon: 'grad', label: 'HSC PCM Pathways' },
      { icon: 'tech', label: 'Lateral Entry Available' },
      { icon: 'shield', label: 'AICTE & Anna Univ' }
    ],
    title: 'Eligibility Criteria & Entry Requirements',
    subtitle: 'Comprehensive criteria for B.E. / B.Tech first year admissions, lateral entry, and postgraduate engineering programs.',
    overviewLead: 'Sri Shakthi admits students through Tamil Nadu Engineering Admissions (TNEA Single Window Counselling - College Code 2764) as well as through institutional Merit Management Quota in compliance with Anna University norms.',
    featuredImage: '/brand/techpark-hd.jpg',
    featuredBadge: 'TNEA Counseling Code: 2764',
    featuredStat: 'Anna Univ & AICTE Approved',
    pillars: [
      { icon: 'grad', tag: 'UNDERGRADUATE', title: 'First Year B.E. / B.Tech', desc: 'Passed 10+2 with Physics, Chemistry, and Mathematics as mandatory subjects with requisite minimum pass marks.' },
      { icon: 'tech', tag: 'LATERAL ENTRY', title: 'Lateral Entry (2nd Year)', desc: 'Passed 3-year diploma in engineering/technology or B.Sc. with mathematics with minimum 45% (40% for reserved).' },
      { icon: 'star', tag: 'POSTGRADUATE', title: 'Postgraduate (M.E. / MBA)', desc: 'Recognized bachelor degree in relevant engineering branch or discipline with valid TANCET / GATE score.' },
      { icon: 'globe', tag: 'INTERNATIONAL', title: 'International & NRI Quota', desc: 'Equivalent 10+2 qualification certified by AIU with physics, chemistry, and mathematics background.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Admissions & Counseling Center', caption: 'Dedicated counseling desk for student enrollment and document verification.' },
      { img: '/brand/campus-arch.jpg', title: 'Main Administration Block', caption: 'Central institutional administrative chambers and registrar desk.' },
      { img: '/brand/curriculum-hero.jpg', title: 'Classroom Experience', caption: 'Modern multimedia lecture theaters engineered for collaborative learning.' },
      { img: '/brand/campus-life/student-life.png', title: 'Student Life Overview', caption: 'Vibrant student community welcoming candidates from all over India.' }
    ],
    metrics: [
      { val: '45', suffix: '%+', label: 'Min PCM Aggregate for Gen' },
      { val: '40', suffix: '%+', label: 'Reserved Categories Min' },
      { val: '3', suffix: ' Yrs', label: 'Diploma for Lateral Entry' },
      { val: '2764', suffix: '', label: 'TNEA Counseling Code' }
    ],
    highlights: [
      { title: 'TNEA Counseling Code: 2764', desc: 'Use college code 2764 during government single window counseling rounds.' },
      { title: 'Document Verification Desk', desc: 'Original certificates, community certificates, and transfer certificates verified swiftly on counseling day.' },
      { title: 'Direct Management Admissions', desc: 'Deserving candidates can apply through the institutional merit ranking quota by registering online.' },
      { title: 'Career Guidance Sessions', desc: 'Free one-on-one branch selection counseling with senior professors to help pick the right career path.' }
    ],
    faqs: [
      { q: 'What is the age limit for admission?', a: 'No upper age limit is stipulated by the Directorate of Technical Education, Tamil Nadu for undergraduate engineering admissions.' },
      { q: 'Can other-state students apply for admission?', a: 'Yes, students from any state in India can apply through management quota or national admission pools.' }
    ],
    ctaTitle: 'Ready to Apply for the 2026-27 Session?',
    ctaSubtitle: 'Register online now or visit our admission cell for counseling and seat reservation.'
  },
  'fees': {
    category: 'Admissions & Finance',
    breadcrumbs: ['Admissions', 'Fee Structure'],
    heroPills: [
      { icon: 'shield', label: 'Govt. Regulated Fees' },
      { icon: 'check', label: 'No Capitation / Donation' },
      { icon: 'card', label: 'Installment Options' },
      { icon: 'home', label: 'Bank Loan Assistance' }
    ],
    title: 'Fee Structure & Transparent Policies',
    subtitle: 'Affordable, government-regulated fee schedules with convenient installment options and zero hidden charges.',
    overviewLead: 'Sri Shakthi maintains a transparent fee structure aligned strictly with the Fee Fixation Committee of the Government of Tamil Nadu. We offer flexible payment plans, rapid bank loan processing letters, and direct merit fee concessions.',
    featuredImage: '/brand/techpark-hd.jpg',
    featuredBadge: 'Affordable & Transparent',
    featuredStat: 'Easy Installment Facilities',
    pillars: [
      { icon: 'shield', tag: 'DOTE APPROVED', title: 'Regulated Tuition Schedules', desc: 'Tuition fees adhere strictly to the Fee Fixation Committee set by the Government of Tamil Nadu.' },
      { icon: 'home', tag: 'FINANCIAL AID', title: 'Bank Loan Assistance', desc: 'Official bona fide and fee projection letters provided promptly for swift education loan approvals.' },
      { icon: 'card', tag: 'DIGITAL', title: 'Digital Payment Gateway', desc: 'Pay securely online via UPI, NetBanking, RTGS/NEFT, or credit/debit cards with instant PDF receipts.' },
      { icon: 'cube', tag: 'MODULAR', title: 'Modular Amenities Options', desc: 'Hostel, mess, and bus services are billed independently based on individual student requirements.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Accounts & Finance Wing', caption: 'Streamlined finance office with digital billing and loan verification desks.' },
      { img: '/brand/campus-arch.jpg', title: 'Main Institutional Complex', caption: 'Administrative center handling student accounts and scholarships.' },
      { img: '/brand/campus-life/learning-growth.png', title: 'Student Service Center', caption: 'Guidance and advisory support for scholarship and installment approvals.' },
      { img: '/brand/campus-life/student-life.png', title: 'Campus Amenities', caption: 'Transparent amenities fees covering campus high-speed Wi-Fi and facilities.' }
    ],
    metrics: [
      { val: '100', suffix: '%', label: 'Receipt-Backed Payments' },
      { val: '0', suffix: '%', label: 'Hidden Maintenance Fees' },
      { val: 'Multiple', suffix: '', label: 'Installment Options' },
      { val: 'Tie-ups', suffix: '', label: 'National Bank Loans' }
    ],
    highlights: [
      { title: 'Approved Tuition Structure', desc: 'Standard Government counseling tuition as per Tamil Nadu norms for accredited autonomous colleges.' },
      { title: 'Zero Donation Policy', desc: 'Admissions are conducted strictly on merit without any capitation fees or hidden levies.' },
      { title: 'Education Loan Help Desk', desc: 'On-campus liaison team coordinates with SBI, Canara Bank, and Indian Bank for rapid education loan processing.' },
      { title: 'Transparent Fee Breakdown', desc: 'Detailed breakdown covering tuition, university exam fees, lab consumables, and library access.' }
    ],
    faqs: [
      { q: 'Can semester fees be paid in installments?', a: 'Yes, parents can request installment options by submitting a written request to the Finance Officer.' },
      { q: 'Which banks provide educational loans for Sri Shakthi?', a: 'All public and private scheduled banks recognize Sri Shakthi for educational loans under the Vidya Lakshmi scheme.' }
    ],
    ctaTitle: 'Get the Detailed Fee Breakdown',
    ctaSubtitle: 'Download our comprehensive fee handbook or discuss payment options with our admissions office.'
  }
};

export function getInternalPageMeta(route, data) {
  if (internalPageData[route]) {
    return internalPageData[route];
  }
  let cat = 'Explore';
  for (const g of pageGroups) {
    if (g.items.some(([slug]) => slug === route)) {
      cat = g.label;
      break;
    }
  }
  return {
    category: cat,
    breadcrumbs: [cat, data[0]],
    heroPills: [
      { icon: 'leaf', label: 'Autonomous Institution' },
      { icon: 'grad', label: 'Anna University Affiliated' },
      { icon: 'crown', label: "NAAC 'A+' Grade" },
      { icon: 'star', label: 'NBA Accredited UG Programmes' }
    ],
    title: data[0],
    subtitle: data[1],
    overviewLead: data[2] || `Sri Shakthi Institute of Engineering and Technology provides outcome-driven education, advanced laboratory infrastructure, and comprehensive student support to ensure continuous excellence in ${data[0].toLowerCase()}.`,
    featuredImage: '/brand/campus-arch.jpg',
    featuredBadge: 'Autonomous & NAAC A+',
    featuredStat: 'Outcome-Driven Excellence',
    pillars: [
      { icon: 'star', tag: 'EXCELLENCE', title: 'Autonomous Academic Rigour', desc: 'Industry-aligned curriculum and hands-on laboratory experiences tailored to meet modern global engineering demands.' },
      { icon: 'connect', tag: 'ENGAGEMENT', title: 'Practical & Applied Focus', desc: 'Real-world project work, domain certifications, and multidisciplinary lab environments fostering high-impact skills.' },
      { icon: 'leaf', tag: 'ENVIRONMENT', title: '45-Acre Sustainable Campus', desc: 'Green spaces, modern amenities, high-speed digital networks, and welcoming student living communities.' },
      { icon: 'target', tag: 'OUTCOMES', title: 'Career & Industry Readiness', desc: 'Systematic technical training, entrepreneurship incubation, and proven placement tracks with leading global recruiters.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Campus Academic Complex', caption: 'Modern academic architecture and advanced learning spaces.' },
      { img: '/brand/campus-arch.jpg', title: 'Green Campus Grounds', caption: 'Lush 45-acre eco-friendly campus environment.' },
      { img: '/brand/curriculum-hero.jpg', title: 'Interactive Learning Spaces', caption: 'Multimedia-enabled classrooms and seminar halls.' },
      { img: '/brand/campus-life/student-life.png', title: 'Student Community', caption: 'Active peer collaboration and collegiate life.' }
    ],
    metrics: [
      { val: '100', suffix: '%', label: 'Dedicated Faculty' },
      { val: '45', suffix: '+', label: 'Green Campus Acres' },
      { val: '30', suffix: '+', label: 'Advanced Laboratories' },
      { val: '100', suffix: '%', label: 'Outcome-Based Learning' }
    ],
    highlights: [
      { title: 'Autonomous Innovation Framework', desc: 'Curricula continuously updated in collaboration with industry advisory councils.' },
      { title: 'Holistic Student Experience', desc: 'Co-curricular sports, cultural societies, and technical clubs developing well-rounded engineers.' },
      { title: 'Global Mentorship & Industry Alliances', desc: 'Strategic partnerships with top tier technology firms for hands-on skill development.' },
      { title: 'State-of-the-Art Physical Infrastructure', desc: 'High-speed campus-wide fiber internet, air-conditioned auditoriums, and smart seminar halls.' }
    ],
    faqs: [
      { q: `How can I get more information about ${data[0]}?`, a: 'You can contact the Sri Shakthi Admissions & Academic Office through the enquiry form or call +91 73737 44444.' },
      { q: 'Are campus tours available for prospective students?', a: 'Yes, parents and students are welcome to visit our Chinniyampalayam campus Monday through Saturday for personalized guided tours.' }
    ],
    ctaTitle: `Ready to Experience ${data[0]} at Sri Shakthi?`,
    ctaSubtitle: 'Explore admission pathways, merit scholarships, and autonomous engineering curriculum designed for real-world impact.'
  };
}

export const campusMarqueeItems = [
  { img: '/brand/techpark-hd.jpg', tag: 'Academic Hub', title: 'Tech Park Towers', desc: 'Flagship smart computing labs and department studios.' },
  { img: '/brand/campus-life/student-life.png', tag: 'Student Life', title: 'Campus Commons & Courtyards', desc: 'Lively community lounges and collaborative student spaces.' },
  { img: '/brand/campus-life/sports-team.png', tag: 'Championships', title: 'Varsity Sports Squad', desc: 'Victorious inter-university championship winning athletes.' },
  { img: '/brand/campus-life/transport-fleet.jpg', tag: 'Transit Fleet', title: '60+ College Buses', desc: 'GPS-tracked transit connecting Coimbatore, Tirupur & Palakkad.' },
  { img: '/brand/campus-life/clubs.png', tag: 'Student Guilds', title: '26+ Co-Curricular Clubs', desc: 'Technical hackathons, fine arts, drama, and literary societies.' },
  { img: '/brand/campus-life/ncc-cadets.jpg', tag: 'National Service', title: 'NCC Cadets & Guard of Honor', desc: 'Elite military discipline, obstacle drills, and community service.' },
  { img: '/brand/special-labs/lab-ai-hd.jpg', tag: 'Advanced Labs', title: 'Artificial Intelligence Studio', desc: 'High-compute GPU workstations for machine learning and computer vision.' },
  { img: '/brand/library-study-hall.jpg', tag: 'Knowledge Hub', title: 'Central Knowledge Library', desc: '50,000+ volumes, air-conditioned reading halls, and IEEE databases.' },
  { img: '/brand/campus-arch.jpg', tag: 'Residences', title: 'Modern Student Hostels', desc: 'Comfortable living with nutritious multi-cuisine dining & 24/7 security.' },
  { img: '/brand/campus-life/cultural.png', tag: 'Festivals', title: 'Dhruva Mega Cultural Showcase', desc: 'Annual arts, choreography, and musical celebration.' }
];

/* Campus pages deliberately use separate compositions. These are not theme swaps of
   one card layout: each page mirrors the character of the experience it describes. */
