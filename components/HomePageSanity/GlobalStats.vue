<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div v-if="post" class="GlobalStats">
    <div
      v-for="stat in post[0].sectionAccueil.statistiques"
      :key="stat._key"
      class="GlobalStats__container"
    >
      <div class="GlobalStats__layout">
        <span>{{ stat.valeur }}</span> <span>{{ stat.texteExplicatif }}</span>
      </div>
    </div>
    <!-- <pre>
            {{ post }}
        </pre> -->
  </div>
</template>
<style lang="scss">
.GlobalStats {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  color: $primaryColor;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 200px; 
    height: 200px; 
    
    &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  $encodedColor: str-slice('#{$primaryColor}', 2);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23#{$encodedColor}' stroke-width='10' stroke-dasharray='8%2c 16%2c 23%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 100px;
  width: 100%;
  height: 100%;
  animation: containerAnimation 35s infinite linear;
    }
    &:nth-child(even)::before {
    animation: containerAnimation 35s infinite linear reverse;
  }
    @keyframes containerAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
  }
  &__layout {
    display: flex;
    flex-direction: column;
    span {
      &:first-child {
        font-size: 40px;
        font-weight: bold;
        line-height: 1;
        font-family: "Gazpacho";
      }
      &:last-child {
        font-size: 20px;
        font-weight: 300;
      }
    }
  }
}
</style>