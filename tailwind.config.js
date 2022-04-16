module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        card: '0 -35px 60px #1f2e3e'
      }
    },
    colors: {
      black: {
        base: "#0d1117",
        dark: "#010409",
        deep: "#0a0d12"
      },
      white: {
        base: "#eaeef6",
        light: "#cfd3da",
        muted: "#767d87"
      },
      danube: {
        base: "#7ec9fe",
        dark: "#1a2735"
      },
      green: {
        base: "#a1bc8a"
      },
      putty: {
        base: "#eaca8a"
      },
      contessa: {
        base: "#be6069"
      },
      gray: {
        base: "#1a1f28"
      },
      yellow: {
        base: "#dbab4d",
        dark: "#8a6e35"
      },
      perfume: "#c9a1f5",
      transparent: "transparent"
    }
  },
  plugins: [],
}
