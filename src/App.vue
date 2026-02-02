<script setup>
import { ref } from 'vue';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const name = ref('');
const price = ref(0);
const qty = ref(0);

const addFurniture = async () => {
  try {
    await addDoc(collection(db, "furniture"), {
      name: name.value,
      price: Number(price.value),
      quantity: Number(qty.value),
      createdAt: new Date()
    });
    alert("Furniture Added!");
    name.value = ''; price.value = 0; qty.value = 0;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<template>
  <div class="p-4">
    <input v-model="name" placeholder="Furniture Name" />
    <input v-model="price" type="number" placeholder="Price" />
    <input v-model="qty" type="number" placeholder="Quantity" />
    <button @click="addFurniture">Upload Furniture</button>
  </div>
</template>