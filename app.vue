<template>
  <div class="main-app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

div
.page-enter-from {
  opacity: 0;
  transform: translateX(100vw)
}


.page-leave-to {
  opacity: 0;
  transform: translateX(-100vw)
}

</style>