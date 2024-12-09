<template>
    <div class="highlight-thinBorder">
        <slot/>
    </div>
</template>
<style lang="scss">
.highlight-thinBorder {
  border: solid $primaryColor 0.1px;
  margin-top: 5%;
  margin-bottom: 20px;
  margin-inline: 5%;
  padding: 20px;
border-radius: 50px;
}
</style>