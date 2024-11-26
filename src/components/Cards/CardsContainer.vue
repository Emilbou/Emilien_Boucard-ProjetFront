<script lang="ts" setup>
import Card from './Card.vue'
import { ref } from 'vue'

// Utilisation de ref pour rendre le tableau réactif
const CardArray = ref([
  {
    id: 1,
    process: 10,
    text: 'Premier élément',
    description: 'Description détaillée du premier élément qui explique son contenu et son utilité',
    titre: 'Carte 1',
  },
  {
    id: 2,
    process: 20,
    text: 'Deuxième élément',
    description: 'Description détaillée du deuxième élément avec ses caractéristiques spécifiques',
    titre: 'Carte 2',
  },
  {
    id: 3,
    process: 30,
    text: 'Troisième élément',
    description: 'Description approfondie du troisième élément et de ses fonctionnalités',
    titre: 'Carte 3',
  },
  {
    id: 4,
    process: 40,
    text: 'Quatrième élément',
    description: "Explication détaillée du quatrième élément et de son rôle dans l'ensemble",
    titre: 'Carte 4',
  },
  {
    id: 5,
    process: 50,
    text: 'Cinquième élément',
    description: 'Description complète du cinquième élément avec ses particularités',
    titre: 'Carte 5',
  },
])

const truncateDescriptions = (description: string) => {
  console.log(description)
  if (description.length > 50) {
    return description.substring(0, 50) + '...'
  } else {
    return description
  }
}
</script>

<template>
  <div class="CardsContainer">
    <Card
      v-for="item in CardArray"
      :key="item.id"
      :progress="item.process"
      :text="item.text"
      :description="truncateDescriptions(item.description)"
      :titre="item.titre"
    />
  </div>
</template>

<style lang="scss">
.CardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
