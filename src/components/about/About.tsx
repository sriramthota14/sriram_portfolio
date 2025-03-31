import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-content">
          <div className="about-info">
            <motion.div
              className="about-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="name">Sri Ram Thota</h1>
              <h2 className="role">Senior .Net Full Stack Developer</h2>
              <div className="tagline">Crafting Digital Experiences</div>
            </motion.div>

            <motion.div
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Hi! I'm a passionate .Net Full Stack Developer with 9 years of
                experience in building web applications. I love creating elegant
                solutions to complex problems and am constantly learning new
                technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical blog posts.
              </p>
            </motion.div>

            <motion.div
              className="experience-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="experience-item">
                <Code2 className="experience-icon" />
                <h3>Development</h3>
                <p>9+ Years Experience</p>
              </div>
              <div className="experience-item">
                <Briefcase className="experience-icon" />
                <h3>Projects</h3>
                <p>10+ Completed</p>
              </div>
              <div className="experience-item">
                <GraduationCap className="experience-icon" />
                <h3>Education</h3>
                <p>Bachelor's in CS</p>
              </div>
              <div className="experience-item">
                <Award className="experience-icon" />
                <h3>Awards</h3>
                <p>5+ Received</p>
              </div>
            </motion.div>
          </div>

          <div className="about-visual">
            <motion.div
              className="about-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/assets/sriramthota.jpg"
                alt="Profile"
                className="about-image"
              />
            </motion.div>

            <motion.div
              className="skills-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="skills-title">Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
