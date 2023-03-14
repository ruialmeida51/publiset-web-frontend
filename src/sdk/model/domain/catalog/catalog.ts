export default class Catalog {
  name: string;
  redirectUrl: string;

  constructor(name: string, redirectUrl: string) {
    this.name = name;
    this.redirectUrl = redirectUrl;
  }
}
