<template>
    <div>
      <section class="hero">
        <h1>Welcome to Our Library</h1>
        <p>Explore our collection of books and resources.</p>
      </section>
  
      <section class="about-us">
        <h2>About Us</h2>
        <p>Our library has a rich history of providing a diverse collection of books, journals, and digital resources to our community.</p>
        <p>We offer a welcoming space for learning, research, and community events.</p>
        <img src="../assets/library.webp" alt="Library Interior" class="about-image">
      </section>
  
      <section class="new-arrivals">
        <h2>New Arrivals</h2>
        <div class="book-list">
          <div class="book-item">
            <img src="../assets/book1.webp" alt="Book 1">
            <p>Book Title 1</p>
          </div>
          <div class="book-item">
            <img src="../assets/book2.webp" alt="Book 2">
            <p>Book Title 2</p>
          </div>
          <div class="book-item">
            <img src="../assets/book3.webp" alt="Book 3">
            <p>Book Title 3</p>
          </div>
        </div>
      </section>
  
      <section class="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonial-list">
          <div class="testimonial-item">
            <p>"This library is a wonderful place to read and study. The staff is always helpful and the collection is extensive."</p>
            <p>- Jane Doe</p>
          </div>
          <div class="testimonial-item">
            <p>"I love the events they organize. It's a great place for the community to come together."</p>
            <p>- John Smith</p>
          </div>
        </div>
      </section>
  
      <section class="contact-us">
        <h2>Contact Us</h2>
        <form class="contact-form">
          <input type="text" placeholder="Full Name">
          <input type="email" placeholder="Email">
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home',
  });
  </script>
  
  <style scoped>
  .hero {
    background-color: #2b2d42; /* Gris foncé */
    color: #edf2f4; /* Blanc cassé */
    padding: 2rem;
    text-align: center;
  }
  
  .about-us, .new-arrivals, .testimonials, .contact-us {
    padding: 2rem;
    text-align: center;
  }
  
  .about-image {
    width: 100%;
    max-width: 800px;
    margin: 1rem auto;
    display: block;
  }
  
  .book-list {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .book-item {
    border: 1px solid #8d99ae; /* Bleu-gris */
    padding: 1rem;
    border-radius: 4px;
    background-color: #edf2f4; /* Blanc cassé */
  }
  
  .book-item img {
    max-width: 100px;
    margin-bottom: 1rem;
  }
  
  .testimonial-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .testimonial-item {
    background-color: #8d99ae; /* Bleu-gris */
    color: #edf2f4; /* Blanc cassé */
    padding: 1rem;
    border-radius: 4px;
  }
  
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
    border: 1px solid #8d99ae; /* Bleu-gris */
    border-radius: 4px;
  }
  
  .contact-form button {
    padding: 1rem 2rem;
    background-color: #ef233c; /* Rouge vif */
    color: #edf2f4; /* Blanc cassé */
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  