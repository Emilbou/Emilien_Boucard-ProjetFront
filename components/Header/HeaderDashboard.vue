<template>
    <header class="dashboard-header">
      <div class="dashboard-header__content">
        <div class="dashboard-header__text">
          <h1 class="dashboard-header__title">Tableau de bord</h1>
          <p class="dashboard-header__subtitle">Gérez et suivez vos habitudes quotidiennes</p>
        </div>
      </div>
    </header>
  </template>
  
  <style lang="scss" scoped>
  .dashboard-header {
    background: linear-gradient(135deg, $primaryColor, $primaryDarkColor);
    padding: 2.5rem 2rem;
  
    &__content {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    &__text {
      max-width: 600px;
    }
  
    &__title {
      color: $white;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
    }
  
    &__subtitle {
      color: rgba($white, 0.9);
      font-size: 1rem;
      line-height: 1.5;
    }
  }
  </style>