
export class Page {
  id?: number;
  title?: string;
  url?: string;
  link?: string;
  description?: string;
  text?: string;
  asideText?: string;
  children?: Page[];
  breadcrumb?: Page[];
  active?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  metaLinkPermanent?: string;
  imagemRedeSocial?: string;
  metaKeyWords?: string;

  constructor(title?: string, url?: string, link?: string, children?: Page[]) {
    this.title = title;
    this.url = url;
    this.link = link;
    this.children = children;
    this.breadcrumb = [];
  }

}
