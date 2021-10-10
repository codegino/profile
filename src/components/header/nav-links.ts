export const navigationLinks: NavLink[] = [
  {
    url: '/',
    label: 'Home',
  },
  {url: '/resume', label: 'Resume'},
  {url: '/about', label: 'About'},
];

type NavLink = {
  label: string;
  url: string;
};
