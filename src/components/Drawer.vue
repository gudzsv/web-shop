<script setup>
import axios from 'axios'
import { computed, inject, ref } from 'vue'
import CartItemList from './CartItemList.vue'
import DrawerHead from './DrawerHead.vue'
import InfoBlock from './InfoBlock.vue'

const { cart } = inject('cart')

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const isCreating = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post('https://117293b69b3e925a.mokky.dev/orders', {
      items: cart.value,
      totalPrice: props.totalPrice.value
    })

    cart.value = []
    orderId.value = data.id
  } catch (e) {
    console.error('App Error create Order(sneakers)', e)
  } finally {
    isCreating.value = false
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)

const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value)
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8">
    <DrawerHead />

    <div v-if="!props.totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!props.totalPrice && !orderId"
        title="Cart is empty"
        description="Could you please add at least one pair of sneakers to complete your order"
        image-url="/package-icon.png"
      />
      <InfoBlock
        v-if="orderId"
        title="Order is processed"
        :description="`Your order #${orderId} will soon be transferred to the courier department`"
        image-url="/order-success-icon.png"
      />
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Total</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ props.totalPrice }} $</b>
        </div>

        <div class="flex gap-2">
          <span>Tax 5%</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ props.vatPrice }} $</b>
        </div>

        <button
          @click="createOrder"
          :disabled="buttonDisabled"
          class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
        >
          Make an order
        </button>
      </div>
    </div>
  </div>
</template>
