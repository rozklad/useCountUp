export default {
  base: '/usebox/',
  title: '@rozklad/usebox',
  description: 'Unsorted collection of Vue composition utilities.',
  themeConfig: {
    sidebar: [
      {
        text: 'Components',
        items: [{ text: 'MountedTeleport', link: '/mountedTeleport/index' }],
      },
      {
        text: 'Utilities',
        items: [
          { text: 'useCountUp', link: '/useCountUp/index' },
          { text: 'useFilesizeHuman', link: '/useFilesizeHuman/index' },
        ],
      },
    ],
  },
};
