import DefaultTheme from 'vitepress/theme'
import HomeProfile from './HomeProfile.vue'
import PublicationCard from './PublicationCard.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeProfile', HomeProfile)
    app.component('PublicationCard', PublicationCard)
  },
}
