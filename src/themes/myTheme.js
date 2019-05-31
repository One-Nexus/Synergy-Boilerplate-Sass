export default (theme) => ({
    gutter: '1em',
    colors: {
        primary: 'dodgerblue',
        secondary: 'deepskyblue',
        tertiary: 'limegreen',
        quaternary: 'green'
    },
    modules: {
        MyModule: {
            'modifier(highlight)': {
                'component(heading)': {
                    'background-color': () => theme.colors.tertiary,
                    'border-color': () => theme.colors.quaternary
                }
            }
        }
    }
})