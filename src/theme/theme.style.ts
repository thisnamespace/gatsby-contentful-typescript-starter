export interface IThemeInterface {
  colors: {
    base: string
    secondary: string
    tertiary: string
    highlight: string
  }
}

const theme: IThemeInterface = {
  colors: {
    base: '#121212', // Black
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#f3f3f3', // Light Gray
    highlight: '#5b8bf7', // Light Blue
  },
}

export default theme
