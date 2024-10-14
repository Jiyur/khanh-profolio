import { ReactNode } from 'react';
import { Variants } from 'framer-motion';
import { StaticImageData } from 'next/image';

export type SiteConfig = {
  name: string;
  handle: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    mail: string;
    twitter: string;
    github: string;
  };
  author: {
    name: string;
    email: string;
  };
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  description?: string;
  content?: ContentNavItem[];
};

export interface WorkItemModel {
  title: string;
  desc: string;
  time: string;
  role: string;
  logo?: StaticImageData;
  href: string;
}

export interface ContentNavItem extends NavItem {
  href: string;
}

export type Collection = {
  _id: string;
  item: {
    _id: string;
    title: string;
    description: string;
    slug: string;
  };
};

export type Bookmark = {
  _id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  tags: string[];
};

export type GitHubUser = {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};
