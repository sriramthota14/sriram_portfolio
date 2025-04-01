import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

function SocialMedia() {
  return (
    <div className="social-links-home">
      <a
        href="https://github.com/sriramthota14"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/sri-ram-thota-6b53a3118"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="https://x.com/SriramThota14"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://www.instagram.com/_s.r.i.r.a.m1414/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
    </div>
  );
}

export default SocialMedia;
