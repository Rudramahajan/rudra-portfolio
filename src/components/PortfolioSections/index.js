'use client'
import './PortfolioSection.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaMedium, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import required icons
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function PortfolioSection() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const swiperRef = useRef(null);

  const aboutmeDivRef = useRef(null);
  const certificationDivRef = useRef(null);
  const educationDivRef = useRef(null);
  const areaofskillsDivRef = useRef(null);
  const experiencesDivRef = useRef(null);
  const projectDivRef = useRef(null);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const skills = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 80 },
    { name: 'Javascript', percentage: 90 },
    { name: 'React Js', percentage: 90 },
    { name: 'React Native', percentage: 70 },
    { name: 'Next Js', percentage: 80 },
    { name: 'Node Js', percentage: 80 },
    { name: 'Express Js', percentage: 80 },
    { name: 'Postgress', percentage: 90 },
    { name: 'Reddis', percentage: 80 },
    { name: 'Docker', percentage: 70 },
  ];

  const Education = [
    {
      degree: 'Bachelor In Technology', session: '2019 - 2023', college: 'Medicaps University', location: 'Indore, India', Specialisation: 'Computer Science',
      logo: '/MedicapsLogo.png', Coursework: 'Data Structures and Algorithms, Database Management Systems (DBMS), Computer Networks, Operating System'
    },

  ];

  const Certifications = [
    {
      name: 'Amazon Web Serices Cloud Practitioner', session: 'Aug 2024', Technology: 'AWS', logo: '/aws.png',
      Coursework: 'Cloud Computing Fundamentals, AWS Services and Architecture, Security and Compliance, Cost Management'
    },
    {
      name: 'Tableau Desktop Specialist', session: 'July 2024', Technology: 'Tableau', logo: '/tableau.png',
      Coursework: 'Tableau Desktop Specialist: Visualization Skills, Data Integration, Analytical Insights, Dashboard Interactivity'
    },
    {
      name: 'Accenture Data Analystics and Visualization', session: 'July 2024', Technology: 'Accenture', logo: '/accenture.jpg',
      Coursework: 'Data Analysis and Visualization, Exploratory Data Analysis (EDA), Applying Machine Learning Algorithms, Utilizing Advanced Big Data Tools and Techniques'
    }
  ];

  const handleDownload = () => {
    console.log(window.location.href);
    const link = document.createElement("a");
    link.href = `${window.location.href}Siddharth_Modi_Resume.pdf`; // Path to PDF
    link.download = "Siddharth_Modi.pdf"; // File name
    link.click();
  };

  const zoomInVariants = {
    hidden: { scale: 0.5, opacity: 0 }, // Start scaled down with no opacity
    visible: {
      scale: 1, // Zoom to original size
      opacity: 1, // Fade in
      transition: {
        duration: 1, // Animation duration in seconds
        ease: 'easeOut',
      },
    },
  };

  const experiences = [
    {
      role: "Solution Engineer",
      organization: "Gammastack",
      icon: '/gammastacklogo.png',
      descriptions: [
        {
          text: `Optimized the performance of sports betting and casino gaming applications by implementing advanced React best practices and performance optimization techniques, resulting in a 35% improvement in frontend speed and a 20% reduction in operational costs. `,
        },
        {
          text: `Collaborated with cross-functional teams and third-party casino providers to seamlessly onboard and integrate over 50 casino games, enhancing platform functionality and driving a 25% increase in user engagement across the system.`,
        },
        {
          text: `Designed and maintained scalable full-stack solutions for live projects with 10,000+ active users, utilizing robust monitoring systems to achieve 99.9% uptime and proactively reducing system downtime by 15%, ensuring reliable performance and seamless user experiences.`,
        },
      ],
    }

  ];

  const projects = [
    {
      name: 'Live TicTacToe Backend',
      image: '/tictactoe.png',
      link: 'https://github.com/Rudramahajan/live-tictactoe-backend'
    },
    {
      name: 'Live TicTacToe Frontend',
      image: '/tictactoe.png',
      link: 'https://github.com/Rudramahajan/live-tictactoe-frontend'
    },
    {
      name: 'Bitsky.bet',
      image: '/bitsky.png',
      link: 'https://www.bitsky.bet/'
    },
    {
      name: 'LinkedIn Clone Backend',
      image: '/linkedin.png',
      link: 'https://github.com/Rudramahajan/linkedin-bakcend'
    }
  ]

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Trigger the animation when the section comes into view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const target = document.querySelector('.contentWrapper');
    if (target) {
      observer.observe(target);
    }



    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);







  return (
    <>
      <div>
        <nav className="navbar">
          <div className="portfolioHeading">Portfolio</div>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <div className={`navList ${isMenuOpen ? "active" : ""}`}>
            <div className="closeButton" onClick={toggleMenu}>
              ✖
            </div>
            <div onClick={() => aboutmeDivRef.current.scrollIntoView({ behavior: "smooth" })} className="navItem" data-scroll-to="aboutMe">
              About Me
            </div>
            <div onClick={() => educationDivRef.current.scrollIntoView({ behavior: "smooth" })} className="navItem" data-scroll-to="education">
              Education
            </div>
            <div onClick={() => areaofskillsDivRef.current.scrollIntoView({ behavior: "smooth" })} className="navItem" data-scroll-to="skills">
              Area of Skills
            </div>
            <div onClick={() => experiencesDivRef.current.scrollIntoView({ behavior: "smooth" })} className="navItem" data-scroll-to="experience">
              Experience
            </div>
            <div onClick={() => projectDivRef.current.scrollIntoView({ behavior: "smooth" })} className="navItem" data-scroll-to="projects">
              Projects
            </div>
          </div>
        </nav>

        <header className='hero'>
          <motion.div
            className="content"
            initial="hidden" // Initial animation state
            animate="visible" // Final animation state
            variants={zoomInVariants} // Apply the variants
          >
            <h1>Rudra Mahajan</h1>
            <p>I Am Here To Proivde You ..... Solutions</p>
            <div onClick={handleDownload} className='resume-button'>
              Download Resume
            </div>
          </motion.div>
          <div className='portfolioImage'></div>
        </header>
        <section ref={aboutmeDivRef} className='aboutMe'>
          <h2>ABOUT ME</h2>
          <div className='contentWrapper'>
            <motion.div
              className='content'
              initial={{ x: '-100vw' }}
              animate={{ x: inView ? 0 : '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <p className='intro'>
                I’m Rudra Mahajan, a dedicated full-stack developer with a passion for transforming ideas into dynamic and efficient applications. I hold a B.Tech in Computer Science from Medicaps University, where I built a strong foundation in software development and problem-solving.
                At Gammastack, I’ve been at the forefront of developing high-performance sports betting and casino platforms, collaborating with third-party providers and ensuring seamless user experiences for thousands of active users. From integrating complex workflows to optimizing frontends for real-time responsiveness, I enjoy diving deep into challenges to deliver impactful solutions.
              </p>
              <p className='hobby'>
                Beyond my professional life, I’m a spirited cricketer who loves the thrill of a close match, and an amateur singer who (occasionally) hits the right notes. Whether it’s perfecting my cover drive or a karaoke rendition, I believe in living life with the same creativity and determination I bring to my code.
              </p>
              <div className='links'>
                <div className='section'>
                  <div>Email</div>
                  <a href="mailto:sgosain2@illinois.edu">mahajanrudra955@gmail.com</a>
                </div>
                <div className='section'>
                  <div>LinkedIn</div>
                  <a href="https://www.linkedin.com/in/rudra-mahajan-41a896235/" target="_blank" rel="noopener noreferrer">
                    Rudra Mahajan
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='imageWrapper'
              initial={{ x: '100vw' }}
              animate={{ x: inView ? 0 : '100vw' }}
              exit={{ x: '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/portfolioPersonImageasa.png"
                alt="Rudra Mahajan's profile picture"
                width={1000}
                height={1000}
                className='image'
              />
              <div className='socialIcons'>
                <a href="https://github.com/Rudramahajan" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rudra-mahajan-41a896235/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section ref={educationDivRef} className='educationSection'>
          <h2>EDUCATION</h2>
          <div className='timeline'>

            {
              Education.map((item, index) => {
                return (
                  <div key={index} className="educationItem">
                    <motion.div
                      className="date"
                      initial={{ y: 20, opacity: 0 }} // Start below and invisible
                      whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                      transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    >
                      {item.session}
                    </motion.div>

                    <motion.div
                      className="details"
                      initial={{ y: 20, opacity: 0 }} // Start below and invisible
                      whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                      transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    >
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }} // Start below and invisible
                        whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                        transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                      >
                        {item.degree}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }} // Start below and invisible
                        whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                        transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                      >
                        {item.Specialisation}
                      </motion.p>

                      <div className="university">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }} // Start below and invisible
                          whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                          transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                        >
                          <Image
                            src={item.logo}
                            alt="University of Mumbai Logo"
                            width={100}
                            height={50}
                            className="logo"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }} // Start below and invisible
                          whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                          transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                        >
                          <p> {item.college}</p>
                          <span> {item.location}</span>
                        </motion.div>
                      </div>

                      <motion.p
                        initial={{ y: 20, opacity: 0 }} // Start below and invisible
                        whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                        transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                      >
                        <strong>Coursework:</strong>  {item.Coursework}
                      </motion.p>
                    </motion.div>
                  </div>

                )
              })
            }

          </div>
        </section>
        <section ref={areaofskillsDivRef} className='skills'>
          <h2 className='title'>Area of Expertise</h2>
          <div className='grid'>
            {skills.map((skill, index) => (
              <div key={index} className='skill'>
                <div className='progress'>
                  <span className='name'>{skill.name}</span>
                  <span className='percentage'>{skill.percentage}%</span>
                </div>
                <div className='bar'>
                  <motion.div
                    className="fill"
                    initial={{ width: 0 }} // Start with 0 width
                    whileInView={{ width: `${skill.percentage}%` }} // Fill up to the skill's percentage
                    transition={{ duration: 1 }} // Duration of the fill animation
                  />                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div ref={experiencesDivRef} className="timeline-container">
        <h2 className='title'>professional experience</h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item"
          >
            <div className="content">
              <div className="circle"></div>
              <div className="content-container">
                <Image
                  src={exp.icon}
                  alt="University of Mumbai Logo"
                  width={100}
                  height={50}
                  className='logo'
                />
                <h1>{exp.organization}</h1>
                <h4>{exp.role}</h4>

              </div>
            </div>
            <div className='roleDescription'>
              {exp.descriptions?.map((description, i) => (
                <p key={i}>{description?.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 ref={projectDivRef} className='title'>Projects</h2>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={{ type: 'bullets', el: ".custom-pagination" }}
        navigation={{
          nextEl: ".custom-next", // Custom next button
          prevEl: ".custom-prev", // Custom previous button
        }} modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
        ref={swiperRef}
      >
        {
          projects.map((item, index) => {
            return (
              <SwiperSlide onClick={() => window.open(item?.link, "_blank")} key={index} className="custom-slide">
                <Image
                  src={item.image}
                  alt="University of Mumbai Logo"
                  width={450}
                  height={450}
                  className='logo'
                />
                <div className="content-of-slider">
                  <h2>{item.name}</h2>
                </div>
              </SwiperSlide>
            )
          })
        }

        <div className="custom-pagination"></div>
        <button className="custom-prev">❮</button>
        <button className="custom-next">❯</button>
      </Swiper>
      <div className='div-space' />



    </>
  );
}
