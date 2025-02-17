<template>  
  <v-carousel 
    cycle 
    hide-delimiters 
    show-arrows="hover"
    height="auto"
    interval="5000"
    class="testimonial-carousel"
  >
    <v-carousel-item 
      v-for="(group, groupIndex) in chunkedTestimonials" 
      :key="groupIndex"
    >
      <v-container>
        <v-row>
          <v-col 
            v-for="(testimonial, index) in group" 
            :key="index" 
            cols="12" md="4"
          >
            <v-fade-transition>
              <v-card 
                elevation="6" 
                class="pa-4 testimonial-card d-flex flex-column"
              >
                <!-- Profile -->
                <div class="d-flex align-center">
                  <v-avatar size="60" class="mr-4">
                    <v-img :src="testimonial.image"></v-img>
                  </v-avatar>
                  <div>
                    <h3 class="text-subtitle-1 font-weight-bold">{{ testimonial.name }}</h3>
                    <v-rating :value="testimonial.rating" color="yellow darken-2" readonly dense size="20"></v-rating>
                  </div>
                </div>

                <!-- Feedback Bubble -->
                <div class="speech-bubble mt-4 flex-grow-1 d-flex align-center">
                  <p>{{ testimonial.feedback }}</p>
                </div>
              </v-card>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        { name: "Amit Sharma", image: "https://randomuser.me/api/portraits/men/1.jpg", rating: 5, feedback: "Absolutely fantastic service! Highly recommended!" },
        { name: "Priya Verma", image: "https://randomuser.me/api/portraits/women/2.jpg", rating: 4.5, feedback: "Great experience with CCTV installation. Explained well." },
        { name: "Rahul Mehta", image: "https://randomuser.me/api/portraits/men/3.jpg", rating: 4.8, feedback: "Smooth ceiling fan installation. Technician was great!" },
        { name: "Sanya Kapoor", image: "https://randomuser.me/api/portraits/women/4.jpg", rating: 5, feedback: "Excellent AC servicing. Works perfectly now!" },
        { name: "Manish Tiwari", image: "https://randomuser.me/api/portraits/men/5.jpg", rating: 4.6, feedback: "Very efficient home cleaning service. Spotless!" },
        { name: "Neha Rajput", image: "https://randomuser.me/api/portraits/women/6.jpg", rating: 4.9, feedback: "Quick and professional furniture assembly!" },
        { name: "Rajesh Malhotra", image: "https://randomuser.me/api/portraits/men/7.jpg", rating: 5, feedback: "Timely washing machine repair service. Saved me hassle!" },
        { name: "Ananya Sen", image: "https://randomuser.me/api/portraits/women/8.jpg", rating: 4.7, feedback: "Smooth plumbing services. Fixed leakage efficiently." },
      ],
    };
  },
  computed: {
    chunkedTestimonials() {
      const chunkSize = 3; 
      return this.testimonials.reduce((acc, _, i) => 
        i % chunkSize === 0 ? [...acc, this.testimonials.slice(i, i + chunkSize)] : acc
      , []);
    }
  }
};
</script>

<style scoped>
/* Carousel container */
.testimonial-carousel {
  background: linear-gradient(to right, #f8fafc, #eef1f5);
  padding: 20px 0;
}

/* Testimonial Card */
.testimonial-card {
  height: 100%; /* Equal height */
  min-height: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.testimonial-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

/* Speech Bubble */
.speech-bubble {
  flex-grow: 1;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.speech-bubble p {
  font-style: italic;
  font-size: 1rem;
  color: #555;
}
</style>
