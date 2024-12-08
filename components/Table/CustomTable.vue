<script setup lang="ts">
defineProps<{
    tableArray: { index: number; date: string; statut: boolean; dateEnregistrement: string }[]
}>()
</script>
<template>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=cancel,task_alt" rel="stylesheet">
    <table class="table">
        <thead>
            <tr>
            <td>Date</td>
            <td>Statut</td>
            <td>Date d'enregistrement</td>
        </tr>
        </thead>
        <tbody>
                <tr v-for="item in tableArray" :key="item.index">
                    <th>{{item.date}}</th>
                    <th><span class="material-symbols-outlined">{{ item.statut ? "&#xe2e6;" : "&#xe5c9;" }}</span> {{item.statut ? "Terminé" : "Non terminé"}}</th>
                    <th>{{ item.dateEnregistrement }}</th>
                </tr>
        </tbody>
    </table>
    <span class="material-symbols-outlined">&#xe5c9;</span>
    <span class="material-symbols-outlined">&#xe2e6;</span>
</template>

<style lang="scss">
.table {
    width: 100%;
    border: solid 1px black;
    border-radius: 5px;
}
.table * {
    border: solid 1px black;
    border-radius: 5px;
}
</style>