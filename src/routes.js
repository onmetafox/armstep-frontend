import Home from "./views/HomePage/index";
import AboutUs from "./views/AboutUsPage/index";

const routes = [
    {
        title: 'Home',
        href: '/home',
        component: Home,
        children: [],
        index:true
    },
    {
        title: 'About US',
        href: '/about-us',
        component: AboutUs,
        children: [],
        index:true
    },
]

export default routes;