<script lang="ts" setup>
interface DashboardResponse {
  globalHabits: Array<{
    id: number;
    progress: number;
    user_id?: number;
    title: string;
    description: string;
    is_global: number;
    created_at: string;
    today_users: number;
    total_users: number;
    total_completions: number;
    total_attempts: number;
    monthly_users: number;
    completedToday: boolean;
    success_rate: number;
  }>;
}

defineProps({
  response: {
    type: Object as PropType<DashboardResponse>,
    default: null,
  },
})

const truncateDescriptions = (description: string) => {
  console.log(description)
  if (description.length > 50) {
    return description.substring(0, 50) + '...'
  } else {
    return description
  }
}

// const truncateCards = (cards) => {
//   if (cards.value.length > 4) {
//     return cards.value.slice(0, 4)
//   }
//   return cards.value
// }
const expandToggle = ref(false)
// function goLink(id: string) {
//   console.log(id)
  
// }
</script>

<template>
    <TransitionGroup name="list" tag="div" class="CardsContainer">
      <Card
        v-for="item in response?.globalHabits"
        :key="item.id"
        :idhabit="item.id"
        :progress="item.success_rate"
        :titre="item.title"
        :monthly-users="item.monthly_users"
        :today-users="item.today_users"
        :total-attempts="item.total_attempts"
        :description="truncateDescriptions(item.description)"
        :lien="item.id.toString()"
      />
    </TransitionGroup>
  <ExpandableButton 
  
      :toggle-props="expandToggle"
  @toggle-expand="expandToggle = !expandToggle" />
</template>

<style lang="scss">
.CardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
