<script setup lang="ts">
import type { Homepage } from "~/types";

defineProps<{
  homepageData: Homepage | null;
}>();
const {urlFor} = useSanityImage();
</script>

<template>
  <section class="testimonials">
    <div class="testimonials__container">
      <div 
        v-for="(testimonial, index) in homepageData?.temoignages" 
        :key="index" 
        class="testimonials__card"
      >
        <div class="testimonials__card-header">
          <div class="testimonials__card-image">
            <img 
              :src="testimonial.photoUtilisateur ? urlFor(testimonial.photoUtilisateur)?.url() : `https://picsum.photos/id/${index}/300/300`"
              :alt="testimonial.nomUtilisateur"
              class="testimonials__card-avatar"
            > 
          </div>
          <div class="testimonials__card-info">
            <h3 class="testimonials__card-name">{{ testimonial.nomUtilisateur }}</h3>
            <p v-if="testimonial.roleUtilisateur" class="testimonials__card-role">
              {{ testimonial.roleUtilisateur }}
            </p>
          </div>
        </div>
        <div v-if="testimonial.note" class="testimonials__card-rating">
          <span 
            v-for="star in 5" 
            :key="star"
            :class="[
              'testimonials__card-star',
              { 'testimonials__card-star--filled': star <= testimonial.note }
            ]"
          >★</span>
        </div>
        <blockquote class="testimonials__card-content">
          {{ testimonial.commentaire }}
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: 2rem 1rem;
  background-color: $backgroundColor;

  @media (min-width: 768px) {
    padding: 4rem 0;
    width: 100%;
  }

  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    background-color: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (min-width: 768px) {
      padding: 2rem;
    }

    &:hover {
      @media (min-width: 768px) {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }
    }

    &-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    &-image {
      width: 50px;
      height: 50px;
      min-width: 50px; // Empêche le rétrécissement
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid $primaryColor;

      @media (min-width: 768px) {
        width: 60px;
        height: 60px;
        min-width: 60px;
      }
    }

    &-avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-info {
      flex: 1;
      min-width: 0; // Permet au texte de se rétrécir si nécessaire
    }

    &-name {
      font-size: 1rem;
      font-weight: 600;
      color: $gray400;
      margin: 0;
      word-wrap: break-word;

      @media (min-width: 768px) {
        font-size: 1.125rem;
      }
    }

    &-role {
      font-size: 0.813rem;
      color: $gray400;
      margin: 0.25rem 0 0;
      word-wrap: break-word;

      @media (min-width: 768px) {
        font-size: 0.875rem;
      }
    }

    &-rating {
      margin-bottom: 1rem;
      display: flex;
      gap: 0.25rem;
    }

    &-star {
      color: #ddd;
      font-size: 1.125rem;

      @media (min-width: 768px) {
        font-size: 1.25rem;
      }

      &--filled {
        color: $primaryColor;
      }
    }

    &-content {
      margin: 0;
      font-size: 0.938rem;
      line-height: 1.6;
      color: $gray800;
      font-style: italic;
      position: relative;
      padding-left: 1.5rem;

      @media (min-width: 768px) {
        font-size: 1rem;
        padding-left: 2rem;
      }

      &::before {
        content: '"';
        font-size: 2.5rem;
        color: $primaryColor;
        opacity: 0.2;
        position: absolute;
        left: 0;
        top: -0.5rem;

        @media (min-width: 768px) {
          font-size: 3rem;
          left: 0;
          top: -1rem;
        }
      }
    }
  }
}
</style>