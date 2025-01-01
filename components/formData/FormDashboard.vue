<script setup lang="ts">

const props = defineProps({
  title: String,
  subtitle: String
});

const emit = defineEmits(['submit']);

const habitTitle = ref("");
const habitDesc = ref("");

function handleSubmit(event: Event) {
  event.preventDefault();
  emit('submit', {
    title: habitTitle.value,
    description: habitDesc.value
  });
  
  // Reset form
  habitTitle.value = "";
  habitDesc.value = "";
}

const isFormValid = computed(() => {
  return habitTitle.value.trim() !== "" && habitDesc.value.trim() !== "";
});
</script>

<template>
  <section class="dashboard__section">
    <div class="dashboard__section-header">
      <h2 class="dashboard__section-title">{{ props.title || 'Nouvelle habitude' }}</h2>
      <p class="dashboard__section-description">
        {{ props.subtitle || 'Créez une nouvelle habitude pour enrichir votre routine quotidienne' }}
      </p>
    </div>

    <form @submit="handleSubmit" class="habit-form">
      <div class="habit-form__container">
        <div class="habit-form__field">
          <label class="habit-form__label">Nom de l'habitude</label>
          <MyInput
          style="width: -webkit-fill-available;"
            v-model="habitTitle"
            placeholder="Ex: Méditation quotidienne"
            :error="habitTitle === ''"
          />
        </div>
  
        <div class="habit-form__field">
          <label class="habit-form__label">Description</label>
          <textarea 
            v-model="habitDesc"
            class="habit-form__input habit-form__input--textarea"
            placeholder="Ex: Prendre 10 minutes pour méditer et se recentrer"
          />
        </div>
  
        <MyButton
          type="submit"
          :disabled="!isFormValid"
          variant="primary"
        >
          Créer l'habitude
        </MyButton>

        <p class="habit-form__helper">
          Les habitudes créées seront visibles par tous les utilisateurs
        </p>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.dashboard {
  &__section {
    margin-bottom: 3rem;
  }

  &__section-header {
    margin-bottom: 2rem;
  }

  &__section-title {
    color: $gray800;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__section-description {
    color: $gray400;
    font-size: 1rem;
  }
}

.habit-form {
  &__container {
    background: $white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba($darkestColor, 0.05);
  }

  &__field {
    margin-bottom: 1.25rem;
  }

  &__label {
    display: block;
    color: $gray800;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  &__input {
    &--textarea {
      width: 100%;
      min-height: 100px;
      resize: vertical;
      padding: 0.75rem 1rem;
      border: 1px solid $gray100;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 0.2s ease;
      
      &:focus {
        border-color: $primaryColor;
        box-shadow: 0 0 0 2px rgba($primaryColor, 0.1);
        outline: none;
      }
    }
  }

  &__helper {
    text-align: center;
    color: $gray400;
    font-size: 0.875rem;
    margin-top: 1rem;
  }
}
</style>