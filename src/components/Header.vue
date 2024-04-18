<script setup>
const emit = defineEmits(['openDrawer'])

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <router-link to="/web-shop">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Sneakers</h2>
          <p class="text-slate-400">Shop the best sneakers</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} $</b>
      </li>

      <li>
        <router-link class="flex items-center gap-3 text-gray-500 hover:text-black" to="/favorites">
          <img src="/heart.svg" alt="Bookmarks" /><span>Bookmarks</span>
        </router-link>
      </li>

      <li>
        <a class="flex items-center gap-3 text-gray-500 hover:text-black" href=""
          ><img src="/profile.svg" alt="Profile" />Profile</a
        >
      </li>
    </ul>
  </header>
</template>
