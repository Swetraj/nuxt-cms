import { TUTOR_THEME_LIGHT } from './theme/LightTheme'

const vuetifyTheme = {
  theme: {
    defaultTheme: 'TUTOR_THEME_LIGHT',
    themes: {
      TUTOR_THEME_LIGHT
    }
  },
  defaults: {
    VCard: {
      rounded: 'xl'
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    }
  }
}
export default vuetifyTheme
