<template>
  <header>
    <nav>
      <button class="burger-button" @click="toggleMenu">
        <div class="burger-icon"></div>
        <div class="burger-icon"></div>
        <div class="burger-icon"></div>
      </button>
      <ul :class="{ 'open': isMenuOpen }">
        <li><router-link to="/" @click.native="closeMenu">Home</router-link></li>
        <li><router-link to="/catalog" @click.native="closeMenu">Catalog</router-link></li>
        <li><router-link to="/membership" @click.native="closeMenu">Membership</router-link></li>
        <li><router-link to="/events" @click.native="closeMenu">Events</router-link></li>
        <li><router-link to="/contact" @click.native="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
    <h1 class="library-title">Stellar Library</h1>
    <div class="logo-container">
      <img src="../assets/library-logo.webp" alt="Library Logo" class="logo">
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
});
</script>

<style scoped>
header {
  background-color: #8d99ae; /* Bleu-gris */
  color: #edf2f4; /* Blanc cassé */
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  max-height: 50px;
  margin-left: 1rem;
  border-radius: 4px;
}

.library-title {
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #edf2f4; /* Blanc cassé */
  margin: 0;
  text-align: center;
  flex-grow: 1;
}

nav {
  display: flex;
  align-items: center;
}

.burger-button {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.burger-icon {
  width: 25px;
  height: 3px;
  background-color: #edf2f4; /* Blanc cassé */
  transition: all 0.3s linear;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: flex-end;
  margin-left: auto;
}

nav ul li {
  margin-right: 1rem;
  flex-grow: 1;
}

nav ul li a {
  display: block;
  width: 100%;
  text-align: center;
  color: #edf2f4; /* Blanc cassé */
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-weight: bold;
}

nav ul li a:hover {
  background-color: #ef233c; /* Rouge vif */
}

@media (max-width: 768px) {
  .burger-button {
    display: flex;
  }

  nav ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background-color: #8d99ae; /* Bleu-gris */
    display: none;
    margin: 0;
    padding: 0;
  }

  nav ul.open {
    display: flex;
  }

  nav ul li {
    margin: 0;
    width: 100%;
    margin-bottom: 1rem;
  }

  nav ul li a {
    padding: 1rem;
    width: 100%;
    text-align: left;
    font-weight: bold;
  }
}
</style>
