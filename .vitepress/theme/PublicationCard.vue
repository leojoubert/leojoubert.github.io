<script setup>
defineProps({
  year: String,
  title: String,
  authors: String,
  journal: String,
  status: String,
})
</script>

<template>
  <div class="pub-card">
    <div class="pub-card-header">
      <span class="pub-year">{{ year }}</span>
      <span v-if="status" class="pub-status">{{ status }}</span>
    </div>
    <p class="pub-title">{{ title }}</p>
    <p class="pub-authors" v-html="authors"></p>
    <p class="pub-journal">{{ journal }}</p>
    <div class="pub-links">
      <slot name="links" />
    </div>
    <details class="pub-abstract">
      <summary>Voir le résumé</summary>
      <slot />
    </details>
  </div>
</template>
