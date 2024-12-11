<script setup lang="ts">
const props = defineProps({
  textLog: {
    type: String,
    default: "Se connecter",
  },
  textSwap: {
    type: String,
    default: "Pas de compte ?",
  },
  urlSwap: {
    type: String,
    default: "/register",
  },
  action: {
    type: String,
    default: "register",
  },
});

const username = ref("");
const password = ref("");
const isError = ref(false);
const router = useRouter();

async function onSubmit(event: Event) {
  event.preventDefault();
  const response = await fetch(`http://localhost:4000/auth/${props.action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    const cookieJwt = useCookie("api_tracking_jwt");
    cookieJwt.value = data.token;
    await router.push("/app/dashboard");
  } else {
    isError.value = true;
  }
}
</script>
<template>
  <form class="Login" @submit="onSubmit">
    <div class="Login__layout">
      <h1 class="Login__Title">{{ textLog }}</h1>
        <p class="Login__Error" :style="(isError ? 'height : 50px' : '')">{{ isError }}</p>
      <MyInput v-model="username" :error="isError" placeholder="Nom d'utilisateur" />
      <MyInput v-model="password" :error="isError" placeholder="Mot de passe" />
      <div class="Login__buttonContainer">
        <NuxtLink class="Login_SwapText" :to="urlSwap">{{ textSwap }}</NuxtLink>
        <MyButton :disabled="false" class="Login__button"><chevron /></MyButton>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.Login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100svh;
  width: 100vw;
  transition: all 0.5s; 
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
      line-height: 0;
      padding: 1rem
    }
  }
  &__layout {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    padding-inline: 20%;

    .Login__Error {
      height: 0;
      overflow: hidden;
      transition: all 0.5s;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
