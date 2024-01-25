import Home from "./views/HomePage/index";
import AboutUs from "./views/AboutUsPage/index";
import Team from "./views/Team/index";

const routes = [
  {
    title: 'Home',
    href: '/home',
    component: Home,
    children: [],
    index: true
  },
  {
    title: 'About US',
    href: '/about-us',
    component: AboutUs,
    children: [],
    index: true
  },
  {
    title: 'Team',
    href: '/team',
    component: Team,
    children: [],
    index: true
  },
]

export default routes;