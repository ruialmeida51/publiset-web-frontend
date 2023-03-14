export default class Portfolio {
  categories: Map<string, string>;

  constructor(categories: Map<string, string>) {
    this.categories = categories;
  }
}
