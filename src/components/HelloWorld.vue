<script setup>
import { ref } from 'vue'

const isZoomed = ref(false)

const toggleImage = () => {
  isZoomed.value = !isZoomed.value
}
</script>

<template>
  <div class="card">
    <div class="card-image" >
      <img 
        style="width: 50%;" 
        alt="Click to zoom"
        :class="{ 'zoom-big': isZoomed }" 
        src="/src/assets/Furnitures/Chinaware_Cabinet-removebg-preview.png" />
    </div>
    <div class="card-content">
      <h3>Chinaware Cabinet</h3>
      <p><strong>Color:</strong> Yellow, Brown and Red</p>
      <p><strong>Size:</strong> 4th and 5th</p>
      <button 
        class="card-btn" 
        @click="toggleImage">$ 9,000</button>
    </div>
  </div>
  <div class="card">
    <div class="card-image" >
      <img 
        style="width: 70%;" 
        alt="Click to zoom"
        :class="{ 'zoom-big': isZoomed }" 
        src="/src/assets/Furnitures/bed-removebg-preview.png" />
    </div>
    <div class="card-content">
      <h3>Chinaware Cabinet</h3>
      <p><strong>Color:</strong> Yellow, Brown and Red</p>
      <p><strong>Size:</strong> Queen size</p>
      <button 
        class="card-btn" 
        @click="toggleImage">$ 14,000</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 180px;
  max-width: 230px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #000 ;
  box-shadow: 1px 1px 10px #000;
  overflow: hidden; /* Clips the image to the border radius */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin: 15px auto;
  color: #333; /* Dark text for readability */
}

.card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

.card-image {
  width: 100%;
  height: 250px;
  overflow: hidden; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.card-image img {
  object-fit: cover; /* Ensures image isn't squished */
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
}

img:focus {
  background-color: transparent;
  transform: scale(150%);
}

.zoom-big {
  transform: scale(1.5); /* Makes it 2.5 times bigger */
  z-index: 10;           /* Ensures it stays on top of other elements */
  position: relative;
}

.card-content {
  max-width: 250px;
  padding: 20px;
  text-align: left;
}

.card-content p {
  font-size: 14px;
  line-height: 0.5;
  margin: 0px 0 15px 0;
}

.card-content h3 {
  margin: 0 0 10px 0;
  color: #9D4EDD; /* Using your purple theme! */
}

.card-btn {
  background-color: #9D4EDD;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
