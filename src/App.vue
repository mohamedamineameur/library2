<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style src="./styles/base.css"></style>
<style src="./styles/main.css"></style>
