<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const emit = defineEmits(["updatedata"]);
// mes 1 milliard de props avec des valeurs par défauts
const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  todayUsers: {
    type: Number,
    default: 0,
  },
  monthlyUsers: {
    type: Number,
    default: 0,
  },
  totalAttempts: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "description",
  },
  titre: {
    type: String,
    default: "Titre",
  },
  idhabit: {
    type: Number,
    default: 0,
  },
  lien: {
    type: String,
    default: "0",
  },
  isglobal: {
    type: Number,
    default: 0,
  },
});

// PUT pour mettre a jour des données
const date = ref();
const check = ref();

async function SaveHabit(event: Event) {
  event.preventDefault();
  useTrackingApi(`tracking/${props.idhabit}`, {
    method: "POST",
    body: { date: date.value, completed: check.value },
  });
  date.value = ref("");
  check.value = ref(false);
  emit("updatedata");
}
const cardHeight = computed(() => {
  return props.isglobal === 0 ? "fit-content" : "auto";
});
</script>
<template>
  <form class="CardHabit" @submit="SaveHabit">
    <h2 class="CardHabit__Title">{{ titre }}</h2>
    <h3>{{ description }}</h3>
    <div>
      <ProgressBarTitle v-if="props.isglobal === 1 ? true : false" :progress="progress" />
      <ul v-if="props.isglobal === 1 ? true : false">
        <li>Participants aujourd'hui : {{ todayUsers }}</li>
        <li>Participants ce mois-ci : {{ monthlyUsers }}</li>
        <li>Participants totaux : {{ totalAttempts }}</li>
      </ul>
      <div class="CardHabit__dateSection">
        <VueDatePicker
          v-model="date"
          :enable-time-picker="false"
          model-type="yyyy-MM-dd"
        />
        <CheckBox v-model="check" />
      </div>
      <MyButton type="submit" :disabled="false">Ajouter</MyButton>
      <NuxtLink v-if="props.isglobal === 0 ? true : false" :to="`/app/tracking/${lien}`">
        <MyButton class="CardHabit__Button" :disabled="false"
          >Voir l'historique</MyButton
        >
      </NuxtLink>
    </div>
  </form>
</template>

<style lang="scss">
.CardHabit {
  border: 0.25px solid $gray800;
  border-radius: 20px;
  display: flex;
  padding: 1rem;
  height: v-bind(cardHeight);
  flex-direction: column;
  justify-content: space-between;
  .CardHabit__Title {
    color: $primaryColor;
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  .CardHabit__dateSection {
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
  .CardHabit__Button {
    background-color: $primaryDarkColor;
    padding: rem(8px) rem(16px);
  }
}
ul {
  li::marker {
    color: $primaryColor;
    font-size: 1.5rem;
  }
}
</style>
