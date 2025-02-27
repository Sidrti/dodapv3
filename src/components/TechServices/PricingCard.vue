<template>
  <v-card 
    class="pricing-card ma-3" 
    max-width="350"
    @mouseover="isHovered = true" 
    @mouseleave="isHovered = false"
  >
    <!-- Image Wrapper -->
    <div class="image-container">
      <!-- <v-img 
        :src="isHovered ? service.hoverImage : service.image" 
        height="180" 
        cover 
        class="service-image"
      ></v-img> -->
      <v-img 
        :src="service.card_image" 
        height="180" 
        cover 
        class="service-image"
      ></v-img>
    </div>

    <v-card-title class="d-flex justify-space-between align-center">
      <span class="text-h6">{{ service.name }}</span>
      <div class="d-flex align-center">
        <v-icon size="18" class="mr-1" color="grey">mdi-clock-outline</v-icon>
        <span class="text-body-2 text-grey">{{ service.duration }}</span>
      </div>
    </v-card-title>

    <v-card-subtitle class="d-flex align-center">
      <span>{{ service.rating }}</span>
      <v-rating dense readonly size="20" color="yellow accent-4"
            class="mr-3" length="1" half-increments></v-rating>
      <span class="text-body-2 mt-2">{{ service.rater_count }} reviews</span>
    </v-card-subtitle>

    <v-card-text>
      <div class="price-info">
        <span class="original-price">{{ service.price }}</span>
        <span class="discounted-price">{{ service.discounted_price }}</span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" block @click="bookService">Book Now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    service: Object, // Expect service data as a prop
  },
  data() {
    return {
      isHovered: false, // State to track hover
    };
  },
  methods: {
    bookService() {
      this.$router.push(`/service/${this.service.id}`);
    },
  },
};
</script>

<style scoped>
.pricing-card {
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.pricing-card:hover {
  transform: scale(1.02);
}

/* Image container for smooth transition */
.image-container {
  position: relative;
  overflow: hidden;
}

.service-image {
  transition: opacity 0.5s ease-in-out;
}

/* Smooth price styling */
.price-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
}

.original-price {
  text-decoration: line-through;
  color: grey;
}

.discounted-price {
  color: #ff5722;
}
</style>
