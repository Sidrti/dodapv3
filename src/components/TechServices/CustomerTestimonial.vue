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
          cols="12" md="3"
        >
          <v-fade-transition>
            <v-card 
              elevation="8" 
              class="pa-6 testimonial-card d-flex flex-column justify-space-between"
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
          {
            name: "Amit Sharma",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            rating: 5,
            feedback: "Absolutely fantastic service! The technician arrived on time, explained the process clearly, and mounted my TV perfectly. Highly recommended!",
          },
          {
            name: "Priya Verma",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            rating: 4.5,
            feedback: "Great experience with CCTV installation. The team ensured proper angles and explained the monitoring system well.",
          },
          {
            name: "Rahul Mehta",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            rating: 4.8,
            feedback: "Smooth ceiling fan installation. Technician was knowledgeable and even cleaned up afterward. Will use again!",
          },
          {
            name: "Sanya Kapoor",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
            rating: 5,
            feedback: "Excellent AC servicing. The team was very professional, and my AC works perfectly now!",
          },
          {
            name: "Manish Tiwari",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
            rating: 4.6,
            feedback: "Very efficient home cleaning service. My house looks spotless!",
          },
          {
            name: "Neha Rajput",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
            rating: 4.9,
            feedback: "Quick and professional furniture assembly. I am really impressed with their work.",
          },
          {
            name: "Rajesh Malhotra",
            image: "https://randomuser.me/api/portraits/men/7.jpg",
            rating: 5,
            feedback: "Timely washing machine repair service. Saved me a lot of hassle!",
          },
          {
            name: "Ananya Sen",
            image: "https://randomuser.me/api/portraits/women/8.jpg",
            rating: 4.7,
            feedback: "Very smooth experience with plumbing services. They fixed my leakage problem efficiently.",
          },
        ],
      };
    },
    computed: {
  chunkedTestimonials() {
    const chunkSize = 4; 
    return this.testimonials.reduce((acc, _, i) => 
      i % chunkSize === 0 ? [...acc, this.testimonials.slice(i, i + chunkSize)] : acc
    , []);
  }
}
  };
  </script>
  
  <style scoped>
  .testimonial-carousel {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding: 16px;
    scrollbar-width: none;
  }
  
  .testimonial-card {
    border-radius: 12px;
    position: relative;
    min-width: 280px;
    max-width: 300px;
  }
  
  .speech-bubble {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 15px;
    position: relative;
    font-size: 16px;
  }
  
  .speech-bubble::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 0;
    height: 0;
    border-top: 10px solid #f5f5f5;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  .testimonial-card {
  height: 100%; /* Ensures all cards take the same height */
  min-height: 250px; /* Adjust as needed */
  display: flex;
  flex-direction: column;
}

.speech-bubble {
  flex-grow: 1; /* Ensures feedback text expands equally */
  display: flex;
  align-items: center;
}
.testimonial-carousel {

  padding: 20px 0;
}

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
  