export const navigationLinks: NavLink[] = [
  {
    url: '/',
    label: 'Home',
  },
  {url: '/resume', label: 'Resume'},
  {url: '/about-me', label: 'About Me'},
  {url: '/about-website', label: 'About site'},
];

type NavLink = {
  label: string;
  url: string;
};
