<template>
  <a href="https://github.com/elwin013/vitaly-extension" target="_blank">
    <img src="./../assets/vitaly.png" class="logo" />
  </a>
  <h1>{{ getHello('Vitaly') }}</h1>
  <a :href="getExtensionUrl('src/options/index.html')" target="_blank">
    Open options page
  </a>
</template>
<script setup lang="ts">
function getExtensionUrl(path: string) {
  return chrome.runtime.getURL(path);
}
function getHello(name: string) {
  return `Hello ${name}!`;
}
</script>

<style scoped>
@import '../common.css';
</style>
