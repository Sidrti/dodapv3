<template>
    <v-footer class="footer">
      <v-container>
        <v-row align="center" justify="space-between">
          <!-- Left Content -->
          <v-col cols="12" md="12" class="text-center ">
            <p class="footer-text">&copy; {{ new Date().getFullYear() }} DO DAP. All Rights Reserved.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
    data() {
      return {
        links: [
          { text: "Home", href: "/" },
          { text: "About", href: "/about" },
          { text: "Services", href: "/services" },
          { text: "Contact", href: "/contact" }
        ],
        socialIcons: [
          { name: "Facebook", icon: "mdi-facebook", link: "https://facebook.com" },
          { name: "Twitter", icon: "mdi-twitter", link: "https://twitter.com" },
          { name: "Instagram", icon: "mdi-instagram", link: "https://instagram.com" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Import Montserrat */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
  
  .footer {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
  }
  
  .footer-text {
    font-size: 14px;
    opacity: 0.8;
  }
  
  .footer-link {
    font-size: 14px;
    color: #ffffff !important;
    background-color: black;
    text-transform: capitalize;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  
  .social-btn {
    color: white !important;
  }
  </style>
  