import { SiteConfig } from '@/types';
import env from './env';

export const siteConfig: SiteConfig = {
  name: `${env.NAME}`,
  description:
    'An open source application built using the new router, server components and everything new in Next.js 13.',
  url: `${env.APP_URL}`,
  ogImage: `${env.APP_URL}/og.jpg`,
  links: {
    twitter: `https://twitter.com/${env.TWITTER_URL}`,
    github: `https://github.com/${env.GITHUB_URL}`,
  },
};
