export const navigationLinks: NavLink[] = [
  {url: '/resume', label: 'Resume'},
  {url: '/about', label: 'About'},
  {url: '/blog', label: 'Blog'},
  {url: '/words', label: 'Words'},
];

type NavLink = {
  label: string;
  url: string;
};
