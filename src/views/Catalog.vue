<template>
    <div>
      <h1>Book Catalog</h1>
      <input type="text" placeholder="Search books..." v-model="searchQuery">
      <div class="book-list">
        <!-- List of books will be rendered here -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'BookCatalog',
    setup() {
      const searchQuery = ref('');
      return { searchQuery };
    }
  });
  </script>
  
  <style scoped>
  input[type="text"] {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  </style>
  