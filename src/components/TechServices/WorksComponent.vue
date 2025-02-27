<template>
  <v-container fluid class="mounting-section pa-0">
    <v-carousel
      :show-arrows="banners.length > 1"
      cycle
      height="auto"
      hide-delimiter-background
      delimiter-icon="mdi-circle"
      :interval="5000"
    >
      <v-carousel-item
        v-for="(banner, index) in banners"
        :key="index"
        cover
      >
      <template v-if="loaderStore.isLoading">
    <v-skeleton-loader
      type="image"
      class="full-width-skeleton"
      height="500"
    />
  </template>

  <template v-else>
    <v-img
      :src="banner.image"
      class="mounting-image"
      cover
      height="500"
      alt="Banner image"
      @click="bannerClickEvt(banner)"
      @load="loading = false"
      @error="loading = false"
    >
      <template v-slot:placeholder>
        <v-skeleton-loader type="image" height="500px" />
      </template>
    </v-img>
  </template>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import { useLoaderStore } from '@/store/modules/loader';
const loaderStore = useLoaderStore();
export default {
  name: 'WorksComponent',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loaderStore
    }
  },
  methods: {
    bannerClickEvt(banner) {
      window.open(banner.link, '_blank');
      
    }
  }
}
</script>

<style scoped>
.mounting-section {
  position: relative;
}

.mounting-image {
  width: 100%;
}

.info-card-overlay {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 2;
}

.info-card {
  background: rgba(255, 255, 255, 0.98) !important;
}

@media (max-width: 600px) {
  .info-card-overlay {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    max-width: 100%;
    margin: 20px;
  }
}
</style>