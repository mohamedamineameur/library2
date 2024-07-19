<template>
    <div>
      <h1>Contact Us</h1>
      <form class="contact-form">
        <input type="text" placeholder="Full Name">
        <input type="email" placeholder="Email">
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <section class="contact-info">
        <h2>Our Contact Information</h2>
        <p>Address: 123 Library Street, Booktown</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@library.com</p>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Contact',
  });
  </script>
  
  <style scoped>
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  .contact-form input, .contact-form textarea {
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .contact-form button {
    padding: 1rem 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .contact-info {
    padding: 2rem;
    text-align: center;
  }
  </style>
  