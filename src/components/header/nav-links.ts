export const navigationLinks: NavLink[] = [
  {url: '/resume', label: 'resume'},
  {url: '/about', label: 'about'},
  {url: '/blog', label: 'blog'},
  {url: '/words', label: 'vocab'},
];

type NavLink = {
  label: string;
  url: string;
};
