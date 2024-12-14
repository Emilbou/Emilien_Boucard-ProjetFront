<script setup lang="ts">
import type { HabitPayload } from '~/types/Habits';

const valuebar = ref(0.000001);
const valuebarSliced = computed(() => valuebar.value ? valuebar.value.toString().slice(0, 4) : "0");

const props = defineProps<{
   response: HabitPayload['habit']
}>();

const ItemCount = computed(() => {
   return props.response?.trackings.length;
});

async function ProgressBarValue() {
   if (!props.response?.trackings.length) return;
   
   const completed = props.response.trackings.filter(
       (enregistrement) => enregistrement.completed === 1
   ).length;
   
   valuebar.value = (completed / ItemCount.value) * 100;
}
onMounted(() => {
    ProgressBarValue();
});

watch(() => props.response?.trackings, () => {
    ProgressBarValue();
}, { deep: true });
</script>
<template>
    <div class="habits-performance-table">
        <div v-if="response.trackings.length === 0" class="habits-performance-table__loading">
          Pas de données
        </div>
        <div v-else-if="valuebar === 0.000001"> chargement</div>
        <table v-else class="habits-performance-table__container">
      <thead class="habits-performance-table__header" :style="{ '--progressBar': `${valuebar}%`}">
        <tr class="habits-performance-table__header-row">
          <th>Date</th>
          <th :style="valuebar < 50 ? 'color : black':'color : white'">Complété ?</th>
        </tr>
        <span class="habits-performance-table__header-progress-bar-title"> {{ valuebarSliced }} %</span>
      </thead>
      <tbody>
        <tr v-for="enregistrement in response?.trackings" :key="enregistrement?.date" class="habits-performance-table__data-row" >
          <td  class="habits-performance-table__habit-name">
            <h2>{{enregistrement.date}}</h2>
          </td>
          <td  class="habits-performance-table__habit-name">
            <h2>{{enregistrement.completed === 1 ? 'Complété' : 'Non Complété'}}</h2>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.habits-performance-table {
  padding: 1rem;

  &__container {
    width: 100%;
    border-collapse: collapse;
    border-radius: 20px;
    overflow: hidden;
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  &__header {
  
    color: white;
    position: relative;
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: var(--progressBar);
        height: 100%;
        z-index: 5;
        background-color: $primaryColor;
    }
    &-progress-bar-title {
      position: absolute;
        top: 50%;
        right: 50px;
      z-index: 10;
      color: black;
      font-size: 1.5rem;
      line-height: 0;
      font-style: italic;
      font-weight: bold;

    }
  }

  &__header-row th {
    padding: 1rem;
    text-align: left;
    z-index: 10;
    position: relative;
  }

  &__data-row {
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f8f8f8;
    }

    td {
      padding: 1rem;
      border-right: solid $primaryColor;
      &:last-child {
        border-right: none;
      }
    }
  }

  &__habit-name h2 {
    color: $primaryColor;
    font-size: 1.5rem;
    margin: 0;
  }

  &__progress-container {
    position: relative;
    height: 20px;
    background: #eee;
    border-radius: 10px;
    overflow: hidden;
  }

  &__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: $primaryColor;
    transition: width 0.3s ease;
  }

  &__progress-value {
    position: absolute;
    width: 100%;
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 20px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  &__stats-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__stats-item {
    color: #666;
    margin-bottom: 0.5rem;

    &:before {
      content: "•";
      color: $primaryColor;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
}
</style>
