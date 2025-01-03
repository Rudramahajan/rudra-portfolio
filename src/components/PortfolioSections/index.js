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
      degree: `Master's Degree`, session: 'Aug 2023 - May 2024', college: 'University of Mryland', location: 'College Park, MD', Specialisation: 'Management Information Systems',
      logo: '/MarylandLogo.png', Coursework: 'Database Management Systems, Buisness Process Analysis, Data Mining & Predictive Analysis, Blockchain, AI, Machne Learning, Data Visualization, Cloud Computing'
    },
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
      role: "Data Analyst Intern",
      organization: "Strategic Solutions International",
      icon: '/strategicSolutionsInternational.jpeg',
      descriptions: [
        {
          text: `Improved financial analysis by optimizing data pipelines and using relational databases, data warehousing, and DBT, which increased forecast accuracy by 20% and reduced retrieval time by 30% through SQL-based data manipulation and cleaning of balance sheets and cash flow data. `,
        },
        {
          text: `Developed and deployed interactive dashboards with Power BI and Looker, leveraging DAX and LookML for financial KPIs, enhancing stakeholder decision-making efficiency by 25%.`,
        },
        {
          text: `Conducted detailed market research and A/B testing for financial models, utilizing SAP Business Objects for data management and reporting.`,
        },
      ],
    },
    {
      role: "Data Scientist",
      organization: "Jaideep Ispat & Alloys Pvt Limited",
      icon: '/jaideep.png',
      descriptions: [
        {
          text: `Extracted, cleansed, and integrated data from multiple sources to form large datasets, applying Random Forest to optimize production scheduling, thereby augmenting operational efficiency by 20%. `,
        },
        {
          text: `Developed and deployed predictive models through regression analysis, anomaly detection techniques, and financial modeling, leveraging these techniques for production cost forecasts and resource allocation decisions, reducing defect rates by 25%`,
        },
        {
          text: `Refined data integration through the utilization of Random Forest and K-means clustering, enhancing statistical data governance and ensuring robust data architecture via Python-based solutions.`,
        },
      ],
    },
    {
      role: "Graduate Teaching Assistant",
      organization: "University of Maryland",
      icon: '/MarylandLogo.png',
      descriptions: [
        {
          text: `Supported over 100 students in mastering concepts in Statistical Modeling, Linear Regression, and Machine Learning Algorithms, leveraging tools like Python, R, and MATLAB for practical demonstrations.`,
        },
        {
          text: `Enhanced course materials by integrating 10+ real-world datasets and advanced techniques like data preprocessing, feature engineering, and model evaluation, leading to a 25% improvement in student project outcomes.`,
        },
        {
          text: `Designed and implemented an automated grading system using Python and Jupyter Notebooks, reducing grading time by 40% while ensuring consistency and accuracy for over 50+ assignments and projects focused on machine learning workflows and statistical analysis.`,
        },
      ],
    },

  ];

  const projects = [
    {
      name: 'Homicide Analysis Data Analyst Project',
      image: '/dataanalysis.jpg',
      link: 'https://github.com/Siddharth180201/Homicide-Analysis-Data-Analyst-Project-'
    },
    {
      name: 'Airline Delay Prediction',
      image: '/datascience.jpg',
      link: 'https://github.com/Siddharth180201/Airline-Delay-Prediction'
    },
    {
      name: 'Belgium Economy Dashboard',
      image: '/belgiumEconomy.jpg',
      link: 'https://public.tableau.com/app/profile/siddharth.modi/viz/BelgiumsEconomy/Dashboard1'
    },
    {
      name: 'Airline Routes Dashboard',
      image: '/airline.png',
      link: 'https://public.tableau.com/app/profile/siddharth.modi/viz/GlobalAirportandUSInternationalFlightRouteStudy_17268046020550/IntflightDashboard'
    },
    {
      name: 'Salse Hr Dashboard',
      image: '/sales.jpeg',
      link: 'https://public.tableau.com/app/profile/siddharth.modi/viz/SalesDashboard_17359383336800/Dashboard1?publish=yes'
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
            <h1>Siddharth Modi</h1>
            <p>I manipulate and play with ... data.</p>
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
                Hello! I’m Siddharth Modi, a forward-thinking data enthusiast with a Master's in Information Systems from the University of Maryland. My expertise lies at the intersection of data analytics, machine learning, and strategic decision-making. With hands-on experience as both a Data Scientist and Data Analyst, I’ve developed and implemented solutions that optimized operations, enhanced financial forecasting accuracy, and transformed data into actionable insights for business growth.
                My technical arsenal includes Python, SQL, Tableau, Power BI, and advanced machine learning frameworks like TensorFlow and Scikit-learn.
              </p>
              <p className='hobby'>
                I thrive on tackling complex challenges, from building predictive models that streamline production scheduling to crafting dynamic dashboards that empower stakeholders with real-time KPIs. When I’m not immersed in datasets, you can usually find me exploring new technologies, enjoying the outdoors, or plotting my next move to ruthlessly checkmate opponents on chess.com. (Don’t worry, I only use my predictive skills for good!)
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
                width={1000}
                height={1000}
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

      <section ref={certificationDivRef} className='educationSection'>
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
