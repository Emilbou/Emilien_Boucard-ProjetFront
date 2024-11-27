<script setup lang="ts">
import MyInput from '@/components/Input/MyInput.vue'
import MyButton from '@/components/Button/MyButton.vue'
import { RouterLink } from 'vue-router'
defineProps({
  TextLog: {
    type: String,
    default: 'Se connecter',
  },
  TextSwap: {
    type: String,
    default: 'Pas de compte ?',
  },
  UrlSwap: {
    type: String,
    default: '/register',
  },
})
</script>
<template>
  <div class="Login">
    <div class="Login__layout">
      <h1 class="Login__Title">{{ TextLog }}</h1>
      <MyInput placeholder="Nom d'utilisateur" />
      <MyInput placeholder="Mot de passe" />
      <div class="Login__buttonContainer">
        <RouterLink class="Login_SwapText" :to="UrlSwap">{{ TextSwap }}</RouterLink>
        <MyButton class="Login__button">></MyButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100svh;
  width: 100vw;
  &__Title {
    color: $primaryColor;
    font-size: 3rem;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
  .Login__buttonContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .Login_SwapText {
      color: $primaryColor;
      transition: all 0.2s;
      margin-top: 0.5rem;
      font-size: 1rem;
      margin-bottom: 0;
    }
    .Login__button {
      width: fit-content;
      aspect-ratio: 1/1;
      font-size: xx-large;
      margin-top: 0;
    }
  }
  &__layout {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    padding-inline: 20%;
  }
}
</style>
