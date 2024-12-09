<template>
    <div class="highlight-thinBorder">
        <slot/>
    </div>
</template>
<style lang="scss">
.highlight-thinBorder {
  border: solid $primaryColor 0.1px;
  margin: 20px;
  padding: 20px;
border-radius: 50px;
width: fit-content
}
</style>