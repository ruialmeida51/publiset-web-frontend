export class PublisetRoute {
  routeName: string;
  routeUrl: string;

  constructor(routeName: string, routeUrl: string) {
    this.routeName = routeName;
    this.routeUrl = routeUrl;
  }
}

export const routes = {
  aboutPageRoute: new PublisetRoute("aboutUs", "/about-us"),
  contactUsPageRoute: new PublisetRoute("contactUs", "/contact-us"),
  landingPageRoute: new PublisetRoute("landingPage", "/"),
  portfolioPageRoute: new PublisetRoute("portfolio", "/portfolio"),
};

export default routes;
