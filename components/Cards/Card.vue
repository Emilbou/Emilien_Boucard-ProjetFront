<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
    progress: {
        type: Number,
        default: 50,
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
    default: 'description',
},
titre: {
    type: String,
    default: 'Titre',
},
idhabit: {
    type: Number,
    default: 0,
},
})

// PUT pour mettre a jour des données 
const date = ref()
const check = ref()

async function SaveHabit(event: Event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:4000/tracking/${props.idhabit}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "authorization": `Bearer ${useCookie("api_tracking_jwt").value}`
      },
      body: JSON.stringify({
        date: date.value,
        completed: check.value,
      }),
    })
    console.log(response)
    console.log(JSON.stringify({
        date: date.value,
        completed: check.value,
      }),);
    
}
</script>
<template>
  <form class="CardHabit" @submit="SaveHabit" >
    <h2 class="CardHabit__Title">{{ titre }}</h2>
    <h3>{{ description }}</h3>
    <div>
    <ProgressBarTitle :progress="progress" />
  <ul>
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
        <MyButton type="submit" :disabled="false" onclick="">Ajouter</MyButton>
        <MyButton class="CardHabit__Button" :disabled="false">Voir l'historique</MyButton>
    </div>
</form>
</template>

<style lang="scss">
.CardHabit {
  border: 0.25px solid $gray800;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
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
