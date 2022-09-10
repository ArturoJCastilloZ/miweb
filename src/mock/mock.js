import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import img from '../assets/img1.jpg';
import miweb from '../assets/mi-web.png';
import miweb2 from '../assets/miweb2.png';
import memo from '../assets/memorama.png';
import work from '../assets/work-project.png';
import utsc from '../assets/utsc.png'
import consiss from '../assets/consiss.jpg'
import triplei from '../assets/triplei.png'
import wild from '../assets/wild.jpg'
import tecsa from '../assets/tecsa.jpg'

export const data = {
    header: [
        {
            title: "Home",
            url: "home"
        },
        {
            title: "About Me",
            url: "about"
        },
        {
            title: "Studies",
            url: "studies"
        },
        {
            title: "Jobs",
            url: "jobs"
        },
        // {
        //     title: "Projects",
        //     url: "projects"
        // },
    ],
    hero: [
        {
            greeting: "Hello guest!", 
            author: "I am Arturo Castillo",
            presentation: "Software development and management engineer",
            image: img,
            mun: "Santa Catarina",
            cdest: "Monterrey, Nuevo León",
            mun2: "García",
            cdest2: "Monterrey, Nuevo León",
        }
    ],
    about: [
        {
            name: "Arturo de Jesús Castillo Zapata",
            profesion: "Software development and management engineer",
            description: `I consider myself a person with the ability to
            web development with different languages, frameworks and libraries, even to be learning and, at the same time, to be developing a project.
            I am a person committed to what I do, I like to work orderly and research on new technologies, I consider that my work is efficient, effective and of quality.`
        }
    ],
    studies: [
        {
            img: utsc,
            title: "University technician in information and communication technologies",
            institution: "Universidad Tecnológica de Santa Catarina",
            date: "From September 2017 to August 2020",
        },
        {
            img: utsc,
            title: "Software development and management engineering",
            institution: "Universidad Tecnológica de Santa Catarina",
            date: "From September 2020 to April 2022",
        }
    ],
    jobs: [
        {
            img: consiss,
            title: "Web Developer",
            institution: "Consiss",
            date: "July 2022 to the present",
            activity: `Developing new projects with the technology that best suits the requirement, 
            as well as giving maintenance to projects already created.`,
        },
        {
            img: wild,
            title: "Junior Developer",
            institution: "v09&Co.",
            date: "April to July 2022",
            activity: `Make updates or modifications to the Restology and Supercolchones pages, 
                which were created in Magento2.`,
        },
        {
            img: tecsa,
            title: "Junior Developer",
            institution: "Tecsa Contact Center",
            date: "January to April 2022",
            activity: `Develop web pages requested through tickets by the Continuous Improvement team 
                for departments such as Human Resources, Technical Support, even to motivate advisors 
                with different dynamics taught by the Marketing department. The developments are 
                done with PHP, Laravel, Tailwindcss, Javascript, JQuery and Ajax Requests.`,
        },
        {
            img: triplei,
            title: "Web Development Intern",
            institution: "Triple i Soluciones",
            date: "August to December 2021",
            activity: `This company has a platform to manage tasks in a very orderly manner, 
                said platform is called Fluxy. As a Web Development Intern, I made updates, 
                fixes and modifications to this platform. Fluxy was created with Angular as FrontEnd, 
                Go! as Backend and on localhost MongoDB was used.`,
        },
    ],
    footer: [
        {
            title: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/ArturoJCastilloZ?tab=repositories"
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/castillo93/"
        },
        {
            title: "Correo",
            icon: <FaMailBulk />,
            url: "mailto:castillo.arturo93@hotmail.com"
        },
        {
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            url: "https://api.whatsapp.com/send?phone=5218116069640"
        }
    ],
    project: [
        {
            img: miweb,
            title: "My first web CV",
            url: "https://arturocastillocv.vercel.app/",
            description: `My first hosted web development was my resume. 
                I liked how my page was taking shape while I was learning to use the reactjs framework. 
                Although it is something basic and simple, it is motivating to see how to get things out even without having prior knowledge of this framework.`,
        },
        {
            img: miweb2,
            title: "My second web CV",
            url: "https://castillocvweb.vercel.app/",
            description: `This is another web page dedicated to my resume, which was created with Reactjs and a javascript tool was used for the transitions when scrolling the page.`
        },
        {
            img: memo,
            title: "Memorama",
            url: "https://memorama-nu.vercel.app/",
            description: `Memorama game with programming images created in Javascript.`
        },
        {
            img: work,
            title: "Viakable e-commerce",
            url: "https://viakable.pcel.com/",
            description: `E-commerce site recently created for the company Viakable. 
                This website was created by the PCEL team of developers, to which I currently belong, using Opencart, which is a specialized Framework for e-commerce. `
        }
    ]
}