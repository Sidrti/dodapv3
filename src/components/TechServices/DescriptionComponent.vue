<template>
    <v-container
      fluid
      class="cctv-banner"
      :style="{ backgroundImage: `url(${bannerImage})` }"
      fill-height
    ></v-container>
  
    <v-container class="overlapping-container">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-card class="pa-4 bg-white">
                <v-card-subtitle>
                  <!-- Skeleton Loader for Title -->
                  <template v-if="loaderStore.isLoading">
                    <v-skeleton-loader type="heading" class="mb-2" />
                  </template>
                  <template v-else>
                    <h3 class="headline text-black"><b>{{ description.name }}</b></h3>
                  </template>
  
                  <!-- Skeleton Loader for Chips -->
                  <template v-if="loaderStore.isLoading">
                    <v-skeleton-loader type="chip" class="mr-2" width="80px" />
                    <v-skeleton-loader type="chip" width="120px" />
                  </template>
                  <template v-else>
                    <v-chip class="ma-2 text-white" color="orange" variant="flat" label>
                      <v-icon icon="mdi-star" start class="text-white"></v-icon>
                      {{ description.rating }}
                    </v-chip>
                    <v-chip class="ma-2 text-white" color="teal" variant="flat" label>
                      <v-icon icon="mdi-account-check" start class="text-white"></v-icon>
                      {{ description.rater_count }} INSTALLATION
                    </v-chip>
                  </template>
                </v-card-subtitle>
  
                <!-- Skeleton Loader for Description -->
                <v-card-text class="text">
                  <template v-if="loaderStore.isLoading">
                    <v-skeleton-loader type="paragraph" />
                    <v-skeleton-loader type="paragraph" />
                    <v-skeleton-loader type="paragraph" width="70%" />
                  </template>
                  <template v-else>
                    <div v-html="description.description"></div>
                  </template>
                </v-card-text>
  
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!-- Skeleton Loader for Button -->
                  <template v-if="loaderStore.isLoading">
                    <v-skeleton-loader type="button" width="150px" height="50px" />
                  </template>
                  <template v-else>
                    <v-btn
                      @click="$router.push({ path: '/TechServiceCart', query: { data: JSON.stringify(description.name) } })"
                      class="bg-primary"
                      size="large"
                      rounded="xl"
                      append-icon="mdi-arrow-right"
                      elevated
                    >
                      Get Started Now
                    </v-btn>
                  </template>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
  
          <!-- Show Skeleton for WorksComponent -->
          <template v-if="loaderStore.isLoading">
            <v-skeleton-loader type="image" height="300px" width="100%" class="mt-5" />
          </template>
          <template v-else>
            <WorksComponent />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useLoaderStore } from '@/store/modules/loader';
  import { defineComponent, computed, ref } from 'vue';
  
  export default defineComponent({
    name: "DescriptionComponent",
    props: {
      description: {
        type: Object,
        required: false, // Allow it to be undefined initially
      },
    },
    setup(props) {
      const loaderStore = useLoaderStore();
      const fallbackImage = '@/assets/cctv.jpg';
      const isImageLoaded = ref(false);
  
      const bannerImage = computed(() => {
        return isImageLoaded.value && props.description?.banner_image
          ? props.description.banner_image
          : props.description.banner_image;
      });
  
      const loadImage = () => {
        if (props.description?.banner_image) {
          const img = new Image();
          img.src = props.description.banner_image;
          img.onload = () => {
            isImageLoaded.value = true;
          };
        }
      };
  
      loadImage();
      return { loaderStore, bannerImage };
    },
  });
  </script>
  
  <style>
  .my-5 {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  
  .cctv-banner {
    position: relative;
    background-size: cover;
    background-position: center;
    height: 500px;
  }
  
  @media (max-width: 768px) {
    .cctv-banner {
      height: 300px;
    }
  }
  
  @media (max-width: 480px) {
    .cctv-banner {
      height: 200px;
    }
  }
  
  .overlapping-container {
    position: relative;
    top: -5%;
    z-index: 1;
  }
  
  .text-dark {
    color: black;
  }
  
  .card-equal-height {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  </style>
  