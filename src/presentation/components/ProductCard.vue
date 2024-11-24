<script setup lang="ts">
import type { Product } from '@/app/types/Product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-card card">
    <img :src="product.imageUrl" alt="Product Image" />
    <div class="product-card-content">
      <h2 class="color-primary font-quicksand font-weight-bold">{{ product.name }}</h2>
      <p class="color-primary font-roboto font-weight-light">{{ product.description }}</p>
      <div class="product-card-price">
        <span class="product-card-price-label font-roboto">Price:</span>
        <span class="product-card-price-value font-roboto">${{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  width: 100%;
  height: 100%;
  max-width: 160px;
  border-radius: 14px;
  background-color: $WHITE;
  box-shadow: 0 0 10px 0 $GRAY;
  padding: 10px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    max-height: 160px;
    border-radius: 14px;
    object-fit: cover;
    background-position: center;
  }

  .product-card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .product-card-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;

      .product-card-price-label {
        font-weight: bold;
        margin-right: 5px;
      }

      .product-card-price-value {
        font-weight: bold;
      }
    }
  }
}
</style>
