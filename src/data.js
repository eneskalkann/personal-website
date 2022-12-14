import PicCSS from './assets/icons8-css3.svg'
import PicHTML from './assets/icons8-html-5.svg'
import PicReact from './assets/icons8-react.svg'
import PicJS from './assets/icons8-javascript.svg'
import PicSCSS from './assets/icons8-sass.svg'
import PicTailwind from './assets/icons8-tailwind-css.svg'
import PicIg from './assets/social-media/icons8-instagram.svg'
import PicLinkedln from './assets/social-media/icons8-linkedin-circled.svg'
import PicSpotify from './assets/social-media/icons8-spotify.svg'
import PicGithub from './assets/social-media/icons8-github.svg'

export const Information = [
    {
        "id" : 1,
        "imageURL": "https://avatars.githubusercontent.com/u/75678744?v=4" ,
        "title" : "Muhammet Enez Kalkan",
        "position" : "FrontEnd Developer",
        "about" : "Hi there, my name is Muhammet Enez. I'm FrontEnd Developer based in Tekirdag. I started to my education in department of Management Infromation Systems at Akdeniz University in September 2019. I am currently 4th grade student.",
        "about2" : "I've been improve myself as a FrontEnd Developer for about two years. I am at nice level in the languages following: HTML,CSS,JavaScript and ReactJS.I am also learning NextJS now , speaking of learning i love learning new things for web and mobile.",
        "buttonTitle" : "Check Out My Resume",
        "resumeUrl" : "https://drive.google.com/file/d/1I8AE8T6xpBtL1lA3DgHnbShVVj32c5L6/view?usp=sharing"
    }
]

export const dataSkills = [
    {
        "id" : 1,
        "language" : "HTML",
        "image" : PicHTML
    },
    {
        "id" : 2,
        "language" : "CSS",
        "image" : PicCSS
    },
    {
        "id" : 3,
        "language" : "Javascript",
        "image" : PicJS
    },
    {
        "id" : 4,
        "language" : "SCSS",
        "image" : PicSCSS
    },
    {
        "id" : 5,
        "language" : "React",
        "image" : PicReact
    },
    {
        "id" : 6,
        "language" : "Tailwind CSS",
        "image" : PicTailwind
    }
]

export const dataProjects = [
    {
        "id" : 1,
        "image": "https://user-images.githubusercontent.com/75678744/195865576-093a91f2-2963-49ca-b609-0b2b08e4d83a.png",
        "title": "Space Tourism Multi Page Website",
        "urlDemo": "https://react-space-tourism-eneskalkann.vercel.app/", 
        "urlRepo":"https://github.com/eneskalkann/react-space-tourism" ,
    },
    {
        "id" : 2,
        "image": "https://user-images.githubusercontent.com/75678744/169774983-606366a5-71f1-4ab5-9637-4b75e55dca26.png",
        "title": "Expenses Chart Component",
        "urlDemo": "https://eneskalkann-expenses-chart-component.vercel.app/", 
        "urlRepo":"https://github.com/eneskalkann/expenses-chart-component" ,
    },
    {
        "id" : 3,
        "image": require('./assets/projects/loopstudio.png'),
        "title": "Loopstudio Landing Page",
        "urlDemo": "https://loopstudio-landing-page-iota.vercel.app/", 
        "urlRepo":"https://github.com/eneskalkann/loopstudio-landing-page" ,
    },
    {
        "id" : 4,
        "image": "https://user-images.githubusercontent.com/75678744/204617977-c16d8125-c486-4b88-8ec4-abeb83d24960.png",
        "title": "Todo App with Context API",
        "urlDemo": "https://todo-app-context-api.vercel.app/", 
        "urlRepo":"https://github.com/eneskalkann/todo-app-context_api" ,
    },
    {
        "id" : 5,
        "image":  "https://user-images.githubusercontent.com/75678744/195316840-d14fd15b-cbe6-4523-9dc2-908157802cd9.png",
        "title":  "Social Media Dashboard",
        "urlDemo": "https://react-dark-mode-social-media.vercel.app/", 
        "urlRepo":"https://github.com/eneskalkann/react-dark-mode-social-media" ,
    },
    {
        "id" : 6,
        "image": "https://user-images.githubusercontent.com/75678744/198697365-f16abc88-f777-45c0-b6bf-8c1dfd29898a.png",
        "title":  "Advice Generator App",
        "urlDemo": "https://advice-generator-app-eneskalkann.vercel.app/", 
        "urlRepo":"https://github.com/eneskalkann/advice-generator-app" ,
    },
]

export const dataSocialMedia =[
    {
        "id" : 1,
        "icon": PicIg,
        "url":"https://www.instagram.com/eneskalkan/"
    },
    {
        "id" : 2,
        "icon":PicLinkedln ,
        "url":"https://www.linkedin.com/in/enez-kalkan/"
    },
    {
        "id" : 3,
        "icon": PicSpotify,
        "url":"https://open.spotify.com/user/35oykqp0galk5aif7hv6tfso2"
    },
    {
        "id" : 4,
        "icon": PicGithub,
        "url":"https://github.com/eneskalkann"
    }
]

export const dataContact = [
    {
        "id" : 1,
        "desc" : "I am open to new opportunities also if you have any feedback, request or question don't hesitate to get in touch with me.",
        "buttonTitle" : "Say Hi!",
        "url" : "https://mail.google.com/mail/?view=cm&fs=1&to=eneskalkan36e@gmail.com&su=Subject&body=&bcc="
    }
]

export const dataNotFound = [
    {
        "id" : 1,
        "title" : "404_",
        "message" : "You are lost",
        "buttonTitle" : "Back to Home Page"
    }
]