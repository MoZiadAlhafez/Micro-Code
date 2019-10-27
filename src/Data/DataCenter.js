import Image1 from './images/info.svg';
import Image2 from './images/inspiration.svg';
import Image3 from './images/life.svg';
import WebDesignImg from './images/services/html css js.svg';
import WebDeveloper from './images/services/laravel and vue.svg';
import Responsive from './images/services/responsive.svg';
import MobilAapplication from './images/services/Mobile application.svg';
import LogoDesign from './images/services/logo.svg';
import SocialMedia from './images/services/social media.svg';
import Marketing from './images/services/marketing.svg';




import Man1 from './images/team/man1.jpg';





const State = {
    LogoName: 'micro code',
    SiteLinks: [
        {url: '/Micro-Code', text: 'home'},
        {url: '/services', text: 'services'},
        {url: '/portfolio', text: 'portfolio'},
        {url: '/contact', text: 'contact'},
    ],
    SocialMedia: [
        {icon: 'fab fa-facebook-square', url: '#facebook'},
        {icon: 'fab fa-twitter-square', url: '#twitter'},
        {icon: 'fab fa-linkedin', url: '#linkedin'},
        {icon: 'fab fa-instagram', url: '#instagram'},
        {icon: 'fab fa-youtube', url: '#youtube'},

    ],
    Featuers: [
        {img: Image1, title: 'featuer title', disc: 'Some Quick Example Text To Build On The Card Title And Make Up The Bulk Of The Card\'s Content.'},
        {img: Image2, title: 'featuer title', disc: 'Some Quick Example Text To Build On The Card Title And Make Up The Bulk Of The Card\'s Content.'},
        {img: Image3, title: 'featuer title', disc: 'Some Quick Example Text To Build On The Card Title And Make Up The Bulk Of The Card\'s Content.'},
        {img: Image1, title: 'featuer title', disc: 'Some Quick Example Text To Build On The Card Title And Make Up The Bulk Of The Card\'s Content.'},
    ],
    Goals : [
        {icon: 'fa fa-handshake', title: 'goal title', disc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.'},
        {icon: 'fa fa-star', title: 'goal title', disc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.'},
        {icon: 'fa fa-check', title: 'goal title', disc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.'},
    ],
    Services: [
        {img: WebDesignImg, title: 'web design', disc: 'Some Quick Example Text To Build On The Card Title.'},
        {img: WebDeveloper, title: 'web development', disc: 'Some Quick Example Text To Build On The Card Title.'},
        {img: Responsive, title: 'responsive design', disc: 'Some Quick Example Text To Build On The Card Title'},
        {img: MobilAapplication, title: 'mobile application', disc: 'Some Quick Example Text To Build On The Card Title.'},
        {img: LogoDesign, title: 'logo design', disc: 'Some Quick Example Text To Build On The Card Title .'},
        {img: SocialMedia, title: 'social media', disc: 'Some Quick Example Text To Build On The Card Title .'},
        {img: Marketing, title: 'Marketing', disc: 'Some Quick Example Text To Build On The Card Title.'},
    ],
    Portfolio: [
        {
            Name: 'web design',
            Content: [
                {Img: WebDesignImg, Project: 'name project'},
                {Img: WebDesignImg, Project: 'name project'},
                {Img: WebDesignImg, Project: 'name project'},
                {Img: WebDesignImg, Project: 'name project'},
                {Img: WebDesignImg, Project: 'name project'},
                
            ],
        },
        {
            Name: 'web developer',
            Content: [
                {Img: WebDeveloper, Project: 'name project'},
                {Img: WebDeveloper, Project: 'name project'},
                {Img: WebDeveloper, Project: 'name project'},
            ],
        },
        {
            Name: 'Responsive',
            Content: [
                {Img: Responsive, Project: 'name project'},
                {Img: Responsive, Project: 'name project'},
                {Img: Responsive, Project: 'name project'},
                {Img: Responsive, Project: 'name project'},
            ],
        },
        {
            Name: 'Mobile application',
            Content: [
                {Img: MobilAapplication, Project: 'name project'},
                {Img: MobilAapplication, Project: 'name project'},
            ],
        },

    ],
    VersionControls : [
        {icon: 'fab fa-github', title: 'github'},
        {icon: 'fab fa-bitbucket', title: 'bitbucket'},
        {icon: 'fab fa-gitkraken', title: 'gitkraken'},
        {icon: 'fab fa-gitlab', title: 'gitlab'},
    ],
    Team: [
        {
            img: Man1,
            name: 'mo ziad alhafez',
            jop: 'front end developer',
            SocialMedia : [
                {icon: 'fab fa-facebook', url: '#'},
                {icon: 'fab fa-linkedin', url: '#'},
                {icon: 'fab fa-instagram', url: '#'},
                {icon: 'fab fa-dribbble', url: '#'},
                {icon: 'fab fa-github', url: '#'},
            ]
        },
        {
            img: Man1,
            name: 'abdullah khaled',
            jop: 'php developer',
            SocialMedia : [
                {icon: 'fab fa-facebook', url: '#'},
                {icon: 'fab fa-linkedin', url: '#'},
                {icon: 'fab fa-instagram', url: '#'},
                {icon: 'fab fa-dribbble', url: '#'},
                {icon: 'fab fa-github', url: '#'},
            ]
        },
        {
            img: Man1,
            name: 'nour aldin',
            jop: 'graphic designer',
            SocialMedia : [
                {icon: 'fab fa-facebook', url: '#'},
                {icon: 'fab fa-linkedin', url: '#'},
                {icon: 'fab fa-instagram', url: '#'},
                {icon: 'fab fa-dribbble', url: '#'},
                {icon: 'fab fa-github', url: '#'},
            ],
        },
        {
            img: Man1,
            name: 'ahmed mohamed',
            jop: 'android developer',
            SocialMedia : [
                {icon: 'fab fa-facebook', url: '#'},
                {icon: 'fab fa-linkedin', url: '#'},
                {icon: 'fab fa-instagram', url: '#'},
                {icon: 'fab fa-dribbble', url: '#'},
                {icon: 'fab fa-github', url: '#'},
            ],
        }
    ],
    Testimonials : [
        {
            img: Man1,
            say: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.',
            name: 'ahmed hamdi'
        },
        {
            img: Man1,
            say: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.',
            name: 'ahmed hamdi'
        },
        {
            img: Man1,
            say: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.',
            name: 'ahmed hamdi'
        },
        {
            img: Man1,
            say: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.',
            name: 'ahmed hamdi'
        },
        {
            img: Man1,
            say: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.',
            name: 'ahmed hamdi'
        },
        {
            img: Man1,
            say: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.',
            name: 'ahmed hamdi'
        },
    ]
}


const REDUCER = (state = State, action) => {
    return state
}

export default REDUCER