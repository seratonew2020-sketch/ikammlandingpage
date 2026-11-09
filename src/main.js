import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'ikammTheme',
    themes: {
      ikammTheme: {
        dark: false,
        colors: {
          primary: '#123f32',
          secondary: '#D4AF37',
          background: '#FAF8F5',
          surface: '#FFFFFF',
          error: '#e57373',
        },
      },
      ikammDark: {
        dark: true,
        colors: {
          primary: '#D4AF37',
          secondary: '#D4AF37',
          background: '#0e3328',
          surface: '#0e3328',
          error: '#ff8a80',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
