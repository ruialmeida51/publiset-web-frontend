import { createRouter, createWebHistory } from "vue-router";
import routerConstants from "./routerCostants";
import LandingPage from "../views/LandingPage.vue";
import PortfolioPage from "../views/PortfolioPage.vue";
import PortfolioCategoryPage from "../views/PortfolioCategoryPage.vue";
import ContactPage from "../views/ContactPage.vue";
import AboutPage from "../views/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routerConstants.landingPageRoute.routeUrl,
      name: routerConstants.landingPageRoute.routeName,
      component: LandingPage,
    },
    {
      path: routerConstants.portfolioPageRoute.routeUrl,
      name: routerConstants.portfolioPageRoute.routeName,
      component: PortfolioPage,
    },
    {
      path: routerConstants.portfolioCategoryPageRoute.routeUrl,
      name: routerConstants.portfolioCategoryPageRoute.routeName,
      component: PortfolioCategoryPage,
    },
    {
      path: routerConstants.contactUsPageRoute.routeUrl,
      name: routerConstants.contactUsPageRoute.routeName,
      component: ContactPage,
    },
    {
      path: routerConstants.aboutPageRoute.routeUrl,
      name: routerConstants.aboutPageRoute.routeName,
      component: AboutPage,
    },
    {
      path: routerConstants.notFoundPageRoute.routeUrl,
      name: routerConstants.notFoundPageRoute.routeName,
      component: LandingPage,
    },
  ],
});

export default router;
