import { slugify } from '@/lib/utils';
import { MainNavItem } from '@/types/nav';
import { productCategories } from './products';

export const mainNav: MainNavItem[] = [
  {
    id: 1,
    title: 'Features',
    href: '/features',
    disabled: true,
  },
  {
    id: 2,
    title: 'Pricing',
    href: '/pricing',
  },
  {
    id: 3,
    title: 'Blog',
    href: '/blog',
  },
  {
    id: 4,
    title: 'Documentation',
    href: '/docs',
  },
  {
    id: 5,
    title: 'Contact',
    href: '/contact',
    disabled: true,
  },
];

export const menuConfig = {
  name: 'Shonjoy',
  description: 'An open source e-commerce Shonjoy build with everything new in Next.js 13.',
  url: 'https://skateshop.sadmn.com',
  ogImage: 'https://skateshop.sadmn.com/opengraph-image.png',
  mainNav: [
    {
      title: 'Lobby',
      items: [
        {
          title: 'Products',
          href: '/products',
          description: 'All the products we have to offer.',
          items: [],
        },
        {
          title: 'Build a Board',
          href: '/build-a-board',
          description: 'Build your own custom skateboard.',
          items: [],
        },
        {
          title: 'Blog',
          href: '/blog',
          description: 'Read our latest blog posts.',
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: 'All',
          href: `/categories/${slugify(category.title)}`,
          description: `All ${category.title}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainNavItem[],
};

export type MenuConfig = typeof menuConfig;
