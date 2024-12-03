<script setup lang="ts">

defineProps({
  textLog: {
    type: String,
    default: 'Se connecter',
  },
  textSwap: {
    type: String,
    default: 'Pas de compte ?',
  },
  urlSwap: {
    type: String,
    default: '/register',
  },
})
</script>
<template>
  <div class="Login">
    <div class="Login__layout">
      <h1 class="Login__Title">{{ textLog }}</h1>

      <MyInput placeholder="Nom d'utilisateur" />
      <MyInput placeholder="Mot de passe" />
      <div class="Login__buttonContainer">
        <NuxtLink class="Login_SwapText" :to="urlSwap">{{ textSwap }}</NuxtLink>
        <MyButton :disabled="false" class="Login__button">></MyButton>
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
