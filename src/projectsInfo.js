import { images } from './imagesAndIcons/images';

export const projectsInfo = [
    {
        title: 'SocialFeed',
        technologies: ['React', 'Redux', 'NodeJS', 'MongoDB'],
        desc: 'A responsive social media app where users can post images, like them, comment, create a profile, edit their profile and follow others and be followed. Built with React, Redux, NodeJS and MongoDB. Authentication via passportJS and JSON webtokens. The app heavily uses conditional rendering based on the data fetched from the backend i built',
        desktop: images[0].desktop,
        mobile1: images[0].mobile1,
        mobile2: images[0].mobile2
    },
    {
        title: 'Sassy-musicPlayer',
        technologies: ['React', 'Sass', 'JavaScript', 'Figma'],
        desc: 'After React started to support Sass out of the box without any special configurations i decided to build something using Sass instead of vanilla CSS. This app grew into a musicplayer that is responsive to different screensizes and i decided to even do my own icons using Figma.',
        desktop: images[1].desktop,
        mobile1: images[1].mobile1,
        mobile2: images[1].mobile2
    },
    {
        title: 'FilterMatic',
        technologies: ['React', 'Sass', 'JavaScript', 'Figma'],
        desc: 'A photo editing app built on Canvas using React, users can upload their pictures and add stickers, filters, text and paint freely over the picture and after they\'re done, save the edited image to their device.' ,
        desktop: images[2].desktop,
        mobile1: images[2].mobile1,
        mobile2: images[2].mobile2
    },
    {
        title: 'React-LandingPage',
        technologies: ['React', 'CSS3', 'JavaScript'],
        desc: 'A responsive landing page built with React. I used flexbox to create the layout. Also built the image-carousel component from scratch which is totally reusable with any picture you want and with as many pictures you want ',
        desktop: images[3].desktop,
        mobile1: images[3].mobile1,
        mobile2: images[3].mobile2
    },
]