export const navigationLinks: NavLink[] = [
  {
    url: '/',
    label: 'Home',
  },
  {url: '/resume', label: 'Resume'},
  {url: '/about', label: 'About'},
  {url: '/blog', label: 'Blog'},
];

type NavLink = {
  label: string;
  url: string;
};
