/* eslint-disable react/no-unescaped-entities */
//import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import Heading from "./Heading";
import Resume from '../assets/AMOS WANYANGU C.V.pdf';


const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="A brief explanation about myself."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        I am a self-motivated, detail-oriented professional with a solid technical background, 
passionate about using my problem-solving skills to make a meaningful impact. I seek 
opportunities in software development and technology to drive innovation and 
deliver valuable results for your organization.
         </p>{" "}
        <br />
        <p>
        I truly look forward to the opportunity to collaborate with you. Please feel free to reach out to me via email using the address provided in the contact section. I sincerely appreciate your time and consideration.        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
        <a href="mailto:amosclinton196@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiFillMessage className="social-btn" />
        </a>
        <a href="https://www.instagram.com/amosclinton7792/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className="social-btn" />
        </a>
        <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="social-btn" />
        </a>
        <a href="https://www.linkedin.com/in/amos-clinton-b65158222/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="social-btn" />
        </a>
      </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
        <a href={Resume} className="primary-btn" download>
  Download Resume
</a>
          <a href="https://github.com/Wanyangu1" className="outline-btn">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;