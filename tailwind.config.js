module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {
      fontSize: {
        'sm': ['0.875rem', '1.25rem'],
        'base': ['1rem', '1.25rem'],
        'lg': ['1.125rem', '1.5rem'],
        '3xl': ['2rem', '2.625rem'],
        '6xl': ['3.875rem', '5rem']
      },
      boxShadow: {
        'inset-sm': 'inset 1px 5px 11px rgba(2, 18, 27, 0.71)',
        'outline': '0px 0px 5px 2px #1d3448',
      },
    },


    fontFamily: {
      'fira': ['"Fira Code"', 'monospace']
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
        dark: '#1C2B3A',
        base: '#1E2D3D',
        deep: '#263B50',
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
