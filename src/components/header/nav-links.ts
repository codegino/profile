import type {AnchorHTMLAttributes} from 'react';

export const navigationLinks: NavLink[] = [
  {url: '/resume', label: 'resume'},
  {url: '/about', label: 'about'},
  {url: '/nft', label: 'nft'},
  {url: 'https://notes.carlogino.com', label: 'Notes'},
  {url: 'https://gpt.carlogino.com', label: 'Chatbot', target: '_blank'},
];

type NavLink = {
  label: string;
  url: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};
