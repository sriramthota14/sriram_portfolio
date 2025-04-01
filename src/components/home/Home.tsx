import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SocialMedia from "../socialmedia/SocialMedia";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <div className="home-content">
          <motion.div
            className="home-text"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h1 className="home-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Sri Ram Thota</span>
              <span className="role">Senior .Net Full Stack Developer</span>
            </h1>

            <p className="home-description">
              I build exceptional digital experiences that inspire and innovate.
              With expertise in both front-end and back-end development, I turn
              complex problems into elegant solutions.
            </p>

            <div className="home-cta">
              <a href="#projects" className="primary-btn">
                View My Work
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#contact" className="secondary-btn">
                Get in Touch
              </a>
            </div>
            <SocialMedia />
          </motion.div>

          <motion.div
            className="home-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
