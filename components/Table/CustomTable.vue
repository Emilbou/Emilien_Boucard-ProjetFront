<script setup lang="ts">
import type { HabitPayload } from '~/types/Habits';

const props = defineProps<{
   response: HabitPayload['habit']
}>();

const formattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<template>
  <div class="history-table">
    <div v-if="!response?.trackings.length" class="history-table__empty">
      Pas de données
    </div>
    <table v-else class="history-table__container">
      <thead>
        <tr class="history-table__header-row">
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="record in response.trackings" 
          :key="record.date" 
          class="history-table__data-row"
          :class="{ '-completed': record.completed === 1 }"
        >
          <td class="history-table__cell">
            {{ formattedDate(record.date) }}
          </td>
          <td class="history-table__cell">
            <span 
              class="history-table__status"
              :class="{ '-completed': record.completed === 1 }"
            >
              {{ record.completed === 1 ? 'Complété' : 'Non Complété' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.history-table {
  background: $white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba($darkestColor, 0.05);

  &__container {
    width: 100%;
    border-collapse: collapse;
  }

  &__empty {
    padding: 3rem;
    text-align: center;
    color: $gray400;
  }

  &__header-row {
    background: rgba($primaryColor, 0.05);
    th {
      padding: 1rem;
      text-align: left;
      color: $gray800;
      font-weight: 600;
      &:last-child {
        text-align: center;
      }
    }
  }

  &__data-row {
    border-bottom: 1px solid $gray100;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba($primaryColor, 0.02);
    }

    &:last-child {
      border-bottom: none;
    }

    &.-completed {
      background: rgba($successColor, 0.05);
      &:hover {
        background: rgba($successColor, 0.08);
      }
    }
  }

  &__cell {
    padding: 1rem;
    color: $gray800;
    font-size: 1rem;

    &:last-child {
      text-align: center;
    }
  }

  &__status {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    background: rgba($errorColor, 0.1);
    color: $errorColor;

    &.-completed {
      background: rgba($successColor, 0.1);
      color: $successColor;
    }
  }
}
</style>