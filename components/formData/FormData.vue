<template>
    <form class="habit-creation-form">
      <div class="habit-creation-form__container">
        <h1 class="habit-creation-form__title">Créer une nouvelle habitude</h1>
        
        <div class="habit-creation-form__input-group">
          <label class="habit-creation-form__label">Nom de l'habitude</label>
          <input 
            type="text"
            class="habit-creation-form__input"
            placeholder="Ex: Méditation quotidienne"
          />
        </div>
   
        <div class="habit-creation-form__input-group">
          <label class="habit-creation-form__label">Description</label>
          <textarea 
            class="habit-creation-form__textarea"
            placeholder="Ex: Prendre 10 minutes pour méditer et se recentrer"
          />
        </div>
   
        <button type="submit" class="habit-creation-form__submit">
          Créer l'habitude
        </button>
      </div>
    </form>
   </template>
   
   <style lang="scss">
   .habit-creation-form {
    display: flex;
    justify-content: center;
    padding: 2rem;
   
    &__container {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
   
    &__title {
      color: $primaryColor;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }
   
    &__input-group {
      margin-bottom: 1.5rem;
    }
   
    &__label {
      display: block;
      margin-bottom: 0.5rem;
      color: #666;
      font-weight: 500;
    }
   
    &__input,
    &__textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #eee;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.3s;
   
      &:focus {
        outline: none;
        border-color: $primaryColor;
      }
    }
   
    &__textarea {
      min-height: 100px;
      resize: vertical;
    }
   
    &__submit {
      width: 100%;
      padding: 1rem;
      background: $primaryColor;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.3s;
   
      &:hover {
        opacity: 0.9;
      }
    }
   }
   </style>