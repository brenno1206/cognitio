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
    subItems: [
      { label: 'Tipos', url: '/python/tipos' },
      { label: 'Estruturas de Condição', url: '/python/condicao' },
      { label: 'Estruturas de Iteração', url: '/python/condicao' },
    ],
  },
  {
    label: 'UVV',
    url: '/uvv',
    subItems: [
      { label: '1° Período', url: 'uvv/1p' },
      { label: '2° Período', url: 'uvv/2p' },
      { label: '3° Período', url: 'uvv/3p' },
      { label: '4° Período', url: 'uvv/4p' },
      {
        label: '5° Período',
        url: 'uvv/5p',
        subItems: [
          { label: 'Qualidade e Testes de Software', url: 'uvv/5p/qualidade' },
        ],
      },
      { label: '6° Período', url: 'uvv/6p' },
    ],
  },
];
