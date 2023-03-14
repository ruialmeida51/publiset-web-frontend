export default class Image {
  formats: Formats;
  constructor(formats: Formats) {
    this.formats = formats;
  }
}

class Formats {
  thumbnail: Url;
  small: Url;

  constructor(thumbnail: Url, small: Url) {
    this.thumbnail = thumbnail;
    this.small = small;
  }
}

class Url {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}
