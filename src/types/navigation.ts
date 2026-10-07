export type NavItem = {
  label: string;
  url: string;
  subItems?: NavItem[];
};

export const navData: NavItem[] = [
  {
    label: 'Git',
    url: '/git',
    subItems: [
      { label: 'Add', url: '/git/add' },
      { label: 'Commit', url: '/git/commit' },
    ],
  },
  {
    label: 'Python',
    url: '/python',
  },
];
