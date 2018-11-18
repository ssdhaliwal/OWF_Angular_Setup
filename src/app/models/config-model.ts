export class ConfigModel {
  version: string;
  buildDate: string;
  urls: Urls[] | null;
  roles: string[] | null;

  constructor(version: string, buildDate: string, urls: Urls[], roles: string[]) {
      this.version = version;
      this.buildDate = buildDate;
      this.urls = urls;
      this.roles = roles;
  }
}

export class Urls {
  service: string;
  url: string;

  constructor(service: string, url: string) {
    this.service = service;
    this.url = url;
  }
}
