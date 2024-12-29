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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const skills = [
    { name: 'Python Programming', percentage: 100 },
    { name: 'Machine and Deep Learning', percentage: 90 },
    { name: 'SQL', percentage: 90 },
    { name: 'Data Visualization', percentage: 100 },
    { name: 'Data Science', percentage: 100 },
    { name: 'NLP', percentage: 80 },
    { name: 'Data Analysis', percentage: 80 },
    { name: 'Data Engineering', percentage: 90 },
  ];

  const Education = [
    {
      degree: `Master's Degree`, session: 'Aug 2023 - May 2024', college: 'University Of Maryland', location: 'Washington, Us', Specialisation: 'Management Information Systems',
      logo: '/MarylandLogo.png', Coursework: 'Data Analysis, Big Data Analysis, Machine Learning, DBMS'
    },
    {
      degree: 'Bachelor In Technology', session: '2019 - 2023', college: 'Medicaps University', location: 'Indore, India', Specialisation: 'Computer Science',
      logo: '/MedicapsLogo.png', Coursework: 'Data Structures and Algorithms, Database Management Systems (DBMS), Computer Networks, Operating System'
    },

  ];

  const Certifications = [
    {
      name: 'Professional Solution Architect', session: 'May 2023', Technology: 'AWS', logo: '/aws.png',
      Coursework: 'Data Structures and Algorithms, Database Management Systems (DBMS), Computer Networks, Operating System'
    },

  ];

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
          text: `Developed and optimized sports betting and casino gaming
                applications, ensuring high-performance frontends by leveraging React
                best practices and advanced optimization techniques. This reduced
                operational costs, including amplifier bills.`,
        },
        {
          text: `Integrated and collaborated with third-party casino providers to
          seamlessly onboard casino games and workflows into the system.`,
        },
        {
          text: `Played a key role in a team that managed and maintained live projects
                serving over 10,000 active users, contributing as a full-stack engineer
                ensure seamless user experiences and reliable system performance.`,
        },
      ],
    },

  ];

  const projects = [
    {
      name: 'Bank Data Analysis',
      image: '/gammastacklogo.png'
    },
    {
      name: 'Bank Data Analysis',
      image: '/gammastacklogo.png'
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
            <div className="navItem" data-scroll-to="aboutMe">
              About Me
            </div>
            <div className="navItem" data-scroll-to="education">
              Education
            </div>
            <div className="navItem" data-scroll-to="skills">
              Area of Skills
            </div>
            <div className="navItem" data-scroll-to="experience">
              Experience
            </div>
            <div className="navItem" data-scroll-to="projects">
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
            <p>I manipulate and play with ... data.</p>
            <div className='resume-button'>
              Download Resume
            </div>
          </motion.div>
          <div className='portfolioImage'></div>
        </header>
        <section className='aboutMe'>
          <h2>ABOUT ME</h2>
          <div className='contentWrapper'>
            <motion.div
              className='content'
              initial={{ x: '-100vw' }}
              animate={{ x: inView ? 0 : '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <p className='intro'>
                Hi, I am Shruti Gosain. I am a graduate student pursuing Master of Science in Information Management (MSIM) at the University of Illinois Urbana-Champaign, with a focus on Data Science and Machine Learning. I’m passionate about analyzing, managing, and visualizing data. I like to be a bridge between raw data and the valuable information it holds. I enjoy deciphering what the data is trying to tell us and turning it into something that drives decision making.
              </p>
              <p className='hobby'>
                Beyond coding and work, you’ll mostly find me outdoors playing football and swimming. I also enjoy sketching, watching Anime, enjoying sunsets, hiking, and working out. I strongly believe in the importance of diverse experiences beyond studying because learning comes from all aspects of life. I thrive on exploring new things, constantly seeking opportunities to learn and grow in every possible way!
              </p>
              <div className='links'>
                <div className='section'>
                  <div>Email</div>
                  <a href="mailto:sgosain2@illinois.edu">sgosain2@illinois.edu</a>
                </div>
                <div className='section'>
                  <div>Website</div>
                  <a href="https://shrutigosain.com" target="_blank" rel="noopener noreferrer">
                    shrutigosain.com
                  </a>
                </div>
                <div className='section'>
                  <div>LinkedIn</div>
                  <a href="https://linkedin.com/in/shruti-gosain" target="_blank" rel="noopener noreferrer">
                    shruti.gosain
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
                src="/portfolioPersonImage.png"
                alt="Shruti Gosain's profile picture"
                width={300}
                height={500}
                className='image'
              />
              <div className='socialIcons'>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
                <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                  <FaMedium size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <section className='educationSection'>
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
        <section className='skills'>
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

      <div className="timeline-container">
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



      <h2 className='title'>Projects</h2>
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
              <SwiperSlide key={index} className="custom-slide">
                <Image
                  src={item.image}
                  alt="University of Mumbai Logo"
                  width={200}
                  height={200}
                  className='logo'
                />
                <div className="content">
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

      <section className='educationSection'>
        <h2>Certifications</h2>
        <div className='timeline'>

          {
            Certifications.map((item, index) => {
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
                      {item.name}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }} // Start below and invisible
                      whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                      transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    >
                      {item.Technology}
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


                    </div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }} // Start below and invisible
                      whileInView={{ y: 0, opacity: 1 }} // Slide up and become visible
                      transition={{ duration: 0.5, delay: 0.5 }} // Delay for sequential animation
                      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    >
                      <strong>Details:</strong> {item.Coursework}
                    </motion.p>
                  </motion.div>
                </div>

              )
            })
          }

        </div>
      </section>

    </>
  );
}
