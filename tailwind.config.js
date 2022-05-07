module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'fira': ['"Fira Code"', 'monospace']
    },

    fontSize: {
      'sm': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.25rem'],
      'lg': ['1.125rem', '1.5rem'],
      '3xl': ['2rem', '2.625rem'],
      '6xl': ['3.875rem', '5rem']
    },

    colors: {
      'black': {
        base: '#01080E'
      },
      'blue': {
        base: '#011627',
        dark: '#011221'
      },
      'iris': {
        base: '#4D5BCE'
      },
      'green': {
        base: '#3C9D93',
        light: '#43D9AD'
      },
      'gray': {
        base: '#1E2D3D',
        light: '#607B96'
      },
      'orange': {
        base: '#E99287',
        light: '#FEA55F'
      },
      'white': {
        light: '#ffffff',
        base: '#E5E9F0'
      }

    }
  },
  plugins: [],
}
