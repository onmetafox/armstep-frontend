import Home from "./views/HomePage/index";
import AboutUs from "./views/AboutUsPage/index";
import Team from "./views/Team/index";
import TalkToUs from "./views/TalkToUs/index";
import ErrorPage from "./views/404/index";
import ServiceList from "./views/Services/serviceList";
import ServiceDetail from "./views/Services/serviceDetail";
import ProjectList from "./views/Projects/projectList";
import ProjectDetail from "./views/Projects/projectDetail";

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
  {
    title: 'Service List',
    href: '/services',
    component: ServiceList,
    children: [],
    index: true
  },
  {
    title: 'Service Detail',
    href: 'service/:id',
    component: ServiceDetail,
    children: [],
    index: true
  },
  {
    title: 'Project List',
    href: '/projects',
    component: ProjectList,
    children: [],
    index: true
  },
  {
    title: 'Project Detail',
    href: 'project/:id',
    component: ProjectDetail,
    children: [],
    index: true
  },
  {
    title: 'Talk to Us',
    href: '/talk-to-us',
    component: TalkToUs,
    children: [],
    index: true
  },
  {
    title: '404',
    href: '/404',
    component: ErrorPage,
    children: [],
    index: true
  },
]

export default routes;