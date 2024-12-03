<script lang="ts" setup>

const CardArray = ref([
  {
    id: 1,
    process: 10,
    text: '1',
    description: 'Description détaillée du premier élément qui explique son contenu et son utilité',
    titre: 'Carte 1',
  },
  {
    id: 2,
    process: 20,
    text: '1',
    description: 'Description détaillée du deuxième élément avec ses caractéristiques spécifiques',
    titre: 'Carte 2',
  },
  {
    id: 3,
    process: 30,
    text: '1',
    description: 'Description approfondie du troisième élément et de ses fonctionnalités',
    titre: 'Carte 3',
  },
  {
    id: 4,
    process: 40,
    text: '1',
    description: "Explication détaillée du quatrième élément et de son rôle dans l'ensemble",
    titre: 'Carte 4',
  },
  {
    id: 5,
    process: 50,
    text: '1',
    description: 'Description complète du cinquième élément avec ses particularités',
    titre: 'Carte 5',
  },
  {
    id: 6,
    process: 60,
    text: '1',
    description: 'Description détaillée du sixième élément et de ses caractéristiques spécifiques',
    titre: 'Carte 6',
  },
  {
    id: 7,
    process: 70,
    text: '1',
    description: 'Description approfondie du septième élément et de ses fonctionnalités',
    titre: 'Carte 7',
  },
  {
    id: 8,
    process: 80,
    text: '1',
    description: "Explication détaillée du huitième élément et de son rôle dans l'ensemble",
    titre: 'Carte 8',
  
  }
])


const truncateDescriptions = (description: string) => {
  console.log(description)
  if (description.length > 50) {
    return description.substring(0, 50) + '...'
  } else {
    return description
  }
}

const truncateCards = (cards: typeof CardArray) => {
  if (cards.value.length > 4) {
    return cards.value.slice(0, 4)
  }
  return cards.value
}
const expandToggle = ref(false)
</script>

<template>
    <TransitionGroup name="list" tag="div" class="CardsContainer">
      <CardMulti
        v-for="item in expandToggle ? CardArray : truncateCards(ref(CardArray))"
        :key="item.id"
        :progress="item.process"
        :text="item.text"
        :description="truncateDescriptions(item.description)"
        :titre="item.titre"
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
