<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const cardHeight = computed(() => {
  return props.isglobal === 0 ? "fit-content" : "auto";
});

const emit = defineEmits(["updatedata"]);

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
  titrevalue: {
    type: String,
    default: "Titre",
  },
  descvalue: {
    type: String,
    default: "Description",
  },
});

const date = ref();
const check = ref();
const update = ref(false)
const toggleUpdate = () => {
  update.value = !update.value
}

// je créer
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

// je supprime
async function DeleteHabit(event: Event) {
  event.preventDefault();
  useTrackingApi(`habits/${props.idhabit}`, {
    method: "DELETE",
  });
  emit("updatedata");
}

// je modifie
// async function UpdateHabit(event: Event) {
//   event.preventDefault();
//   useTrackingApi(`habits/${props.idhabit}`, {
//     method: "PUT",
//     body: { title: "modification titre", description: "modification desc" },
//   });
//   emit("updatedata");
// }
</script>
<template>
  <form class="habit-card" @submit="SaveHabit">
    <div class="habit-card__header">
      <h2 class="habit-card__title">{{ titre }}</h2>
      <MyButton
        v-if="props.isglobal === 0 ? true : false"
        class="habit-card__delete-btn"
        :disabled="false"
        @click="DeleteHabit"
        >X</MyButton
      >
    </div>
    <h3 class="habit-card__description">{{ description }}</h3>
    <div class="habit-card__content">
      <ProgressBarTitle
        v-if="props.isglobal === 1 ? true : false"
        :progress="progress"
        class="habit-card__progress"
      />
      <ul v-if="props.isglobal === 1 ? true : false" class="habit-card__stats">
        <li class="habit-card__stats-item">
          Participants aujourd'hui : {{ todayUsers }}
        </li>
        <li class="habit-card__stats-item">
          Participants ce mois-ci : {{ monthlyUsers }}
        </li>
        <li class="habit-card__stats-item">
          Participants totaux : {{ totalAttempts }}
        </li>
      </ul>
      <div class="habit-card__tracking">
        <VueDatePicker
          v-model="date"
          :enable-time-picker="false"
          model-type="yyyy-MM-dd"
          class="habit-card__date-picker"
        />
        <CheckBox v-model="check" class="habit-card__checkbox" />
      </div>
      <MyButton type="submit" :disabled="false" class="habit-card__submit"
        >Ajouter</MyButton
      >
      <NuxtLink
        v-if="props.isglobal === 0 ? true : false"
        :to="`/app/tracking/${lien}`"
        class="habit-card__history-link"
      >
        <MyButton class="habit-card__history-btn" :disabled="false">
          Voir l'historique
        </MyButton>
      </NuxtLink>
      <div v-if="props.isglobal === 0 ? true : false" class="habit-card__edit">
        <MyButton
        type="button"
          class="habit-card__edit-btn"
          :disabled="false"
          @click="toggleUpdate"
        >
          Modifier
        </MyButton>
      </div>
    </div>
    <Transition>
      <CardUpdateOverlay v-if="update" :titrevalue="titrevalue" :descvalue="descvalue"/>
    </Transition>
  </form>
</template>

<style lang="scss">
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.habit-card {
  $this: &;
  border: 0.25px solid $gray800;
  border-radius: 20px;
  display: flex;
  padding: 1rem;
  height: v-bind(cardHeight);
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  position: relative;
  overflow: hidden;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    flex-wrap: nowrap;
    gap: 1rem;
  }

  &__title {
    color: $primaryColor;
    font-size: 2rem;
    margin: 0;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 1;
  }

  &__delete-btn {
    margin: 0;
    aspect-ratio: 1;
    width: fit-content;
    flex-shrink: 0;
    line-height: 0;
    padding: 1rem;
    background-color: $errorColor;
    border: $errorColor;
  }

  &__description {
    margin: 1rem 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__stats {
    padding-left: 1.5rem;

    &-item {
      &::marker {
        color: $primaryColor;
        font-size: 1.5rem;
      }
    }
  }

  &__tracking {
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  &__history-btn {
    background-color: $primaryDarkColor;
    padding: rem(8px) rem(16px);
  }

  &__edit {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__edit-btn {
    width: fit-content;
    z-index: 20;
  }
}
</style>
