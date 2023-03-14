export class PublisetRoute {
  routeName: string;
  routeUrl: string;

  constructor(routeName: string, routeUrl: string, props: {} = {}) {
    this.routeName = routeName;
    this.routeUrl = routeUrl;
  }
}

export const routes = {
  aboutPageRoute: new PublisetRoute("aboutUs", "/about-us"),
  contactUsPageRoute: new PublisetRoute("contact-us", "/contact-us"),
  landingPageRoute: new PublisetRoute("landingPage", "/"),
  portfolioPageRoute: new PublisetRoute("portfolio", "/portfolio"),
  portfolioCategoryPageRoute: new PublisetRoute("portfolio-category", "/portfolio-category/:id"),
  notFoundPageRoute: new PublisetRoute("notFound", "/:pathMatch(.*)"),
};

export default routes;
