<template>
    <footer>
      <p>&copy; 2024 Library Management</p>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Footer',
  });
  </script>
  
  <style scoped>
  footer {
    background-color: #8d99ae; /* Bleu-gris */
    color: #edf2f4; /* Blanc cassé */
    padding: 1rem;
    text-align: center;
  }
  </style>
  