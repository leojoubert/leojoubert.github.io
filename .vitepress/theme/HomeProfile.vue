<script setup>
import { useData } from 'vitepress'
import avatarUrl from '@img/avatar.jpg'

const { frontmatter } = useData()
const p = frontmatter.value.profile

const renderMd = (text) => text
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

const faIconClass = (icon) => {
  const brands = ['linkedin']
  return brands.includes(icon) ? `fab fa-${icon}` : `fas fa-${icon}`
}
</script>

<template>
  <div class="home-profile">
    <div class="profile-sidebar">
      <img :src="avatarUrl" alt="Léo Joubert" class="profile-avatar" />
      <nav class="profile-social">
        <template v-for="link in p.social" :key="link.label">
          <!-- Icônes academicons -->
          <a
            v-if="link.icon === 'google-scholar' || link.icon === 'hal'"
            :href="link.url"
            :target="link.url.startsWith('mailto') ? undefined : '_blank'"
            rel="noopener noreferrer"
            class="social-link"
            :title="link.label"
          >
            <i :class="`ai ai-${link.icon}`"></i>
            <span>{{ link.label }}</span>
          </a>
          <!-- Icônes Font Awesome -->
          <a
            v-else
            :href="link.url"
            :target="link.url.startsWith('mailto') ? undefined : '_blank'"
            rel="noopener noreferrer"
            class="social-link"
            :title="link.label"
          >
            <i :class="faIconClass(link.icon)"></i>
            <span>{{ link.label }}</span>
          </a>
        </template>
      </nav>
    </div>

    <div class="profile-content">
      <p class="profile-title">{{ p.title }}</p>
      <p class="profile-affiliations" v-html="renderMd(p.affiliations)"></p>
      <div class="profile-themes">
        <span v-for="theme in p.themes.split(' · ')" :key="theme" class="profile-theme-tag">{{ theme }}</span>
      </div>
      <p v-for="(para, i) in (Array.isArray(p.bio) ? p.bio : [p.bio])" :key="i" class="profile-bio" v-html="renderMd(para)"></p>
    </div>
  </div>
</template>
