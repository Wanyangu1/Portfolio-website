//import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from '../pages/Cover/Cover';
import coverImgs from '../assets/cover.png'
import FirstPage from '../pages/FirstPage';
import Skills from '../pages/Skills';
import Services from '../pages/Service/Services';
import About from '../pages/About';
import Projects from '../pages/projects/Projects';
import Contac from '../pages/contacts/Contac';
import EndImg from '../assets/last-page.png';
import Resume from '../pages/Resume';
import AoB from '../pages/AoB';
import training from "../assets/training.png";
import card from "../assets/card.png";
import afro from "../assets/afroart.png";
import ngo from "../assets/NGO.png";
import ronald from "../assets/ronald.png";
import ecom from "../assets/ecom.png";



function Book() {
    const ProjectData = [
        {
          name: "afroartsafary.com ",
          description: "A dynamic tours and travel booking platform to allow users have enjoyable staycation experiences allowing payment with a variety of cards and an admin module for generl site management.",
          image: afro,
          previewLink: "https://afroartsafary.com/",
          tools: 'Vue.js, Django, Tailwindcss',
          githubLink: 'https://github.com/Wanyangu1/AfriartSafari-Backend',
        },
        {
          name: "aiaa-kenya.org",
          description: "A website for Artificial Intelligence Alliance in Agriculture a software development organization with a major of transforming the agricultural value chain using AI for small holder farmers.",
          image: ngo,
          previewLink: "https://aiaa-kenya.org/",
          tools: 'Vue js, Django, BootStrap, Postgres',
          githubLink: 'https://github.com/AIIKS-KSU-TEAM/AI_AA_Website_Frontend',
        },
      ];
      const ProjectData2 = [
        {
          name: "E-Training Platform",
          description: "An e-training platform to be used to train learners of any aspect with complete modules on courses, online meet rooms, assessments and perfomance visualization.",
          image: training,
          previewLink: "",
          tools: 'Django, Vue js, Postgres',
          githubLink: 'https://github.com/AIIKS-KSU-TEAM/campo-educa-frontend', 
        },
        {
          name: "ronaldtombe.co.ke",
          description: "A portfolio website for my supervisor Dr. Ronald Kengara Tombe with all the neccesary features to maintain an outstanding online presence.",
          image: ronald,
          previewLink: "https://ronaldtombe.co.ke/",
          tools: 'Vue js, Django, Tailwind, Postgres',
          githubLink: 'https://github.com/AIIKS-KSU-TEAM/Ronald_Tombe_Frontend',
        },
      ];
      const ProjectData3 = [
        {
          name: "Card Payment Intergration",
          description: "Successful intergration of Visa and Mastercard payment into a system using Click n Pay intergration apis.",
          image: card,
          previewLink: "",
          tools: 'Vue.js, Django, Tailwindcss',
          githubLink: 'https://github.com/Wanyangu1/AfriartSafari-Frontend',
        },
        {
          name: "Ecommerce product Website",
          description: "In this project i implemented search, filter, categories, coupons and implementations of all the imprtant modules in an ecommerce including add to cart and checkout computations.",
          image: ecom,
          previewLink: "#",
          tools: 'React js, tailwindcss, Django, Postgres' ,
          githubLink: 'https://github.com/Wanyangu1/E-commerce', 
        },
      ];
    return (
        <HTMLFlipBook width={600} height={700} showCover="true">
            <Page number={0}>
            <Cover
              coverImg={coverImgs}
              title="ACW Portfolio"
              subtitle="Click here to open"
              className="mt-6"
            />

            </Page>

            <Page number={1}>
            <FirstPage />  
            </Page> 

            <Page number={2}>
            <Skills />  
            </Page>
            <Page number={3}>
            <Services />
            </Page>
            <Page number={4}>
            <About />  
            </Page>
            <Page number={5}>
            <Resume />
            </Page>
            <Page number={6}>
               <Projects ProjectData={ProjectData}/>
            </Page>
            <Page number={7}>
             <Projects ProjectData={ProjectData2}/>
            </Page>
            <Page number={8}>
             <Projects ProjectData={ProjectData3}/>
            </Page>
            <Page number={9}>
             <Contac />
            </Page>
            <Page number={10}>
             <AoB />
            </Page>
            <Page number={11}>
             <Cover coverImg={EndImg} title="React & Tailwind" subtitle="Powered by ACW_Developers" />
            </Page>


        </HTMLFlipBook>
    );
}

export default Book;