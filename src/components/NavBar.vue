<template>
  <v-app-bar app color="primary" scroll-behavior="elevate">
    <router-link to="/" class="v-toolbar-title-link d-flex align-center ml-3">
      <!-- Logo -->
      <v-img src="../assets/logo.png" class="mr-2" max-height="30"></v-img>
      <!-- Title -->
      <v-toolbar-title>DO DAP</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-autocomplete :items="searchItems" class="mr-2 custom-placeholder" density="comfortable" menu-icon=""
        :placeholder="dynamicPlaceholder" prepend-inner-icon="mdi-magnify" theme="light" variant="solo"
        auto-select-first item-props rounded v-model="searchQuery" :style="{ '--input-text-color': placeholderColor }" ></v-autocomplete>
    </template>

  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      searchItems: [
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Install Security Cameras',
          route: '/SecurityCamera',
        },
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Solve Your Alarm Needs',
          route: '/SecurityAlarm',
        },
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Find Trusted Technicians',
          route: '/TechServices',
        },
      ],
      searchQuery: null,
      placeholderOptions: ["Search.", "Connect.", "Solve."],
      dynamicPlaceholder: "Install Security Cameras.", // Initial placeholder
      placeholderIndex: 0,
      fadeTimeout: null,
      placeholderColors: ["#ff5722", "#4caf50", "#2196f3"], 
      placeholderColor:'#ff5722'
    }
  },
  methods: {
    onSearchEvt(item) {
      if (item && item.route) {
        this.$router.push(item.route);
      }
    },
    startTypewriterEffect() {
      this.fadeTimeout = setInterval(() => {
        const currentIndex = this.placeholderIndex;
        const nextIndex = (currentIndex + 1) % this.placeholderOptions.length;

        // Update placeholder text
        this.searchQuery = this.placeholderOptions[currentIndex];
        this.placeholderIndex = nextIndex;
        this.placeholderColor = this.placeholderColors[nextIndex];

        // Add fade effect for subsequent words
        if (currentIndex > 0) {
          setTimeout(() => {
            this.searchQuery = `${this.placeholderOptions[currentIndex]
            
              }`;
          }, 1500); // Adjust fade delay
        }
      }, 3000); // Adjust interval timing for each word
    },
  },
  watch: {
    searchQuery(val) {
      const item = this.searchItems.find(item => item.title === val);
      this.onSearchEvt(item)
    }
  },
  mounted() {
    this.startTypewriterEffect();
  },
  beforeUnmount() {
    clearTimeout(this.fadeTimeout); // Clear timeout when component is destroyed
  },
}
</script>

<style scoped>
.v-toolbar-title-link {
  color: inherit;
  /* Keep the text color the same */
  text-decoration: none;
  /* Remove underline */
}
.custom-placeholder :deep(.v-field__input) {
  color: var(--input-text-color, #2196F3) !important;
  transition: color 0.3s ease;
  font-weight: 500;
  font-size: larger;
}

:deep(.v-toolbar-title__placeholder) {
  overflow: visible !important;
}

.custom-placeholder input::placeholder {
  color: #ff5722; /* Use your desired color here */
  font-weight: bold; /* Make the placeholder bold if needed */
  font-size: 1rem; /* Adjust the size */
  opacity: 1; /* Ensure visibility of the placeholder */
}
.search-box {
  width: 300px; /* Default width for desktop */
}

/* Mobile responsive styles */
@media (max-width: 600px) {
  .search-box {
    width: 70vw; /* 70% of viewport width on mobile */
  }

  :deep(.v-toolbar__append) {
    width: 65% !important;
    margin-top: 20px;
}
}
@media (min-width: 600px) {
  .search-box {
    width: 80vw; /* 70% of viewport width on mobile */
  }
  
  /* Hide title on very small screens if needed */
  :deep(.v-toolbar__append) {
    width: 40% !important;
    margin-top: 20px;
}
}

/* Ensure the search box doesn't overflow */
.v-toolbar__append {
  max-width: 70%;
}
</style>
