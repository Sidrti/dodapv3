<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
}
@media (max-width: 600px) {
  .headline {
    font-size: 1.2rem !important;;
    font-weight: 350 !important;
    white-space: preserve-breaks !important;
  }
  .headline-bold {
    font-size: 1.2rem !important;;
    font-weight: 500 !important;
  }
  .subheading {
    font-size: 1rem !important;
    font-weight: 350 !important;
}
.caption {
    font-size: 0.9rem !important;
    font-weight: 350 !important;
}

.text {
    font-size: 0.8rem !important;
    font-weight: 350 !important;
}
.text-sm {
    font-size: 0.7rem !important;
    font-weight: 350 !important;
}
}

@media (min-width: 601px) and (max-width: 960px) {
  .headline {
    font-size: 1.7rem !important;;
    font-weight: 350 !important;
  }
  .subheading {
    font-size: 1.5rem !important;
    font-weight: 350 !important;
}
.caption {
    font-size: 1.3rem !important;
    font-weight: 350 !important;
}

.text {
    font-size: 1.1rem !important;
    font-weight: 350 !important;
}
.text-sm {
    font-size: 0.9rem !important;
    font-weight: 350 !important;
}
}
@media (min-width: 961px) {
  .headline {
    font-size: 1.7rem !important;;
    font-weight: 350 !important;
  }
  .headline-bold {
    font-size: 1.7rem !important;;
    font-weight: 500 !important;
  }
  .subheading {
    font-size: 1.5rem !important;
    font-weight: 350 !important;
}
.caption {
    font-size: 1.3rem !important;
    font-weight: 350 !important;
}

.text {
    font-size: 1.1rem !important;
    font-weight: 350 !important;
}
.text-sm {
    font-size: 0.9rem !important;
    font-weight: 350 !important;
}
}

.text-dark {
    color: black !important;
}

.text-card-color {
    color: #333333 !important
}
  </style>
