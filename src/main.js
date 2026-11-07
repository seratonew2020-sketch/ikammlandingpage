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
          secondary: '#c5a875',
          background: '#f6f5ef',
          surface: '#fbfaf6',
          'surface-variant': '#eeede5',
          forest: '#123f32',
          gold: '#c5a875',
          cream: '#f6f5ef',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
