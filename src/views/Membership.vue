<template>
    <div>
      <h1>Membership</h1>
      <section class="membership-benefits">
        <h2>Membership Benefits</h2>
        <p>Enjoy exclusive benefits as a member of our library.</p>
      </section>
      <section class="membership-plans">
        <h2>Membership Plans</h2>
        <p>Choose the plan that suits you best.</p>
      </section>
      <form class="membership-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name">
        <input type="email" placeholder="Email">
        <button type="submit">Join Now</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Membership',
  });
  </script>
  
  <style scoped>
  .membership-benefits, .membership-plans {
    padding: 2rem;
    text-align: center;
  }
  .membership-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  .membership-form input {
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .membership-form button {
    padding: 1rem 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  