<script setup>
defineProps({ imageUrl: String, title: String, price: Number })
</script>

<template>
  <div class="flex border items-center border-slate-200 p-4 rounded-xl gap-4">
    <img class="w-16 h16" src="/sneakers/sneakers-1.jpg" alt="Sneaker" />

    <div class="flex flex-col">
      <p>Sneaker Nike Air Max 270</p>

      <div class="flex justify-between mt-2">
        <b>300 $</b>
        <img
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
          alt="close icon buton"
        />
      </div>
    </div>
  </div>
</template>
