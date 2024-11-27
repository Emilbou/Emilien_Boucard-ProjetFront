<script setup lang="ts">
import ProgressBarTitle from '../ProgressBarTitle/ProgressBarTitle.vue'
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import CheckBox from '../Checkbox/CheckBox.vue'
import MyButton from '../Button/MyButton.vue'

const date = ref()
defineProps({
  progress: {
    type: Number,
    default: 50,
  },
  text: {
    type: String,
    default: 'Progress Bar Title',
  },
  description: {
    type: String,
    default: 'description',
  },
  titre: {
    type: String,
    default: 'Titre',
  },
})
</script>
<template>
  <div class="CardHabit">
    <h2 class="CardHabit__Title">{{ titre }}</h2>
    <h3>{{ description }}</h3>
    <ProgressBarTitle :progress="progress" />
    <ul>
      <li>Participants aujourd'hui : {{ text }}</li>
      <li>Participants ce mois-ci : {{ text }}</li>
      <li>Participants totaux : {{ text }}</li>
    </ul>
    <div class="CardHabit__dateSection">
      <VueDatePicker v-model="date" :enable-time-picker="false"></VueDatePicker>
      <CheckBox />
    </div>
    <MyButton>Ajouter</MyButton>
    <MyButton class="CardHabit__Button">Voir l'historique</MyButton>
  </div>
</template>

<style lang="scss">
.CardHabit {
  border: 0.25px solid $gray800;
  border-radius: 5px;
  padding: 1rem;
  .CardHabit__Title {
    color: $primaryColor;
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
  ul {
    li::marker {
      color: $primaryColor;
      font-size: 1.5rem;
    }
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
</style>
