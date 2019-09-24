export default (theme) => ({
  colors: {
    primary: 'dodgerblue',
    secondary: 'deepskyblue',
    tertiary: 'limegreen',
    quaternary: 'green'
  },
  breakpoints: {
    small: '640px',
    medium: '960px',
    large: '1200px'
  },
  modules: {
    accordion: {
      background: 'red'
    },
    MyModule: {
      // 'is-highlight': {
      //   title: {
      //     'background-color': () => theme.colors.tertiary,
      //     'border-color': () => theme.colors.quaternary
      //   }
      // }
      title: {
        // 'block-is-highlight': {
        //   'background-color': () => theme.colors.tertiary,
        //   'border-color': () => theme.colors.quaternary
        // },
        'with-highlight': {
          'background-color': () => theme.colors.tertiary,
          'border-color': () => theme.colors.quaternary
        },
        // 'panel-is-foo': {
        //   color: 'green'
        // },
        // 'within-panel': {
        //   color: 'blue'
        // },
      }
    }
  }
});