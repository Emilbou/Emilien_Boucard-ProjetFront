<script lang="ts" setup>
interface HabitItem {
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
}

interface Props {
  response: HabitItem[];
}

defineProps<Props>();

const truncateDescriptions = (description: string) => {
  console.log(description);
  if (description.length > 50) {
    return description.substring(0, 50) + "...";
  } else {
    return description;
  }
};

const emit = defineEmits(["updatedata-parent"]);

const handleUpdateData = () => {
  emit("updatedata-parent");
};
</script>

<template>
  <TransitionGroup name="list" tag="div" class="CardsContainer">
    <Card
      v-for="item in response"
      :key="item.id"
      :idhabit="item.id"
      :progress="item.success_rate"
      :titre="item.title"
      :monthly-users="item.monthly_users"
      :today-users="item.today_users"
      :total-attempts="item.total_attempts"
      :description="truncateDescriptions(item.description)"
      :lien="item.id.toString()"
      :isglobal="item.is_global"
      :titrevalue="item.title"
      :descvalue="item.description"
      @updatedata="handleUpdateData"
    />
  </TransitionGroup>
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