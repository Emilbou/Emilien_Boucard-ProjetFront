<script setup lang="ts">
defineProps<{
  title?: string;
}>()
</script>

<template>
  <div class="header">
    <div class="header__title-container">
      <h3 class="header__title">{{ title }}</h3>
    </div>
    <div class="header__buttons">
      <NuxtLink to="/connection">
        <MyButton
          class="header__button"
          :disabled="false"
          variant="outline"
        >
          Login
        </MyButton>
      </NuxtLink>
      <NuxtLink to="/inscription">
        <MyButton
          class="header__button"
          :disabled="false"
        >
          Register
        </MyButton>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  background-color: white;
  border-bottom: solid 1px $primaryColor;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &__title-container {
    display: flex;
    align-items: center;
  }

  &__title {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Gazpacho';
    color: $primaryColor;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $primaryColor;
      transform: scaleX(0.8);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  &__button {
    min-width: 120px;
    transition: transform 0.3s ease;
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 1.2rem 1.5rem;

    &__title {
      font-size: 1.5rem;
    }

    &__buttons {
      gap: 0.5rem;
    }

    &__button {
      min-width: 100px;
    }
  }
}
</style>