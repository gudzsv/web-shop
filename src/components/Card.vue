<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})
</script>

<template>
  <div class="">
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        class="absolute top-0 left-0"
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Like icon"
        @click="onClickFavorite"
      />
      <img :src="imageUrl" alt="Sneaker image" />
      <p class="mt-2">{{ title }}</p>

      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Price:</span>
          <b>{{ price }} $</b>
        </div>
        <button @click="onClickAdd">
          <img :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus button icon" />
        </button>
      </div>
    </div>
  </div>
</template>
