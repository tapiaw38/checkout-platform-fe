<script setup lang="ts">
import type { Product } from '@/app/types/Product'
import ProductCard from '@/presentation/components/ProductCard.vue'

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Product 1 description',
    price: 100,
    imageUrl: 'https://picsum.photos/id/100/200/300'
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Product 2 description',
    price: 200,
    imageUrl: 'https://picsum.photos/id/200/200/300'
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Product 3 description',
    price: 300,
    imageUrl: 'https://picsum.photos/id/300/200/300'
  }
]

</script>

<template>
  <main>
    <div class="section">
      <h1 class="color-primary font-quicksand font-weight-light">Lista de deseos</h1>
      <div class="flex flex-column gap-3">
        <p class="color-info font-roboto">Tus deseos esperan aquí</p>
        <div class="flex flex-row gap-3">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
</style>
