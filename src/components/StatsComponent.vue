<template>
  <v-container fluid>
    <v-card class="py-5" variant="flat">
      <v-row
        class="text-center mb-4 stats-section"
        style="margin-top: -20px;"
      >
        <v-col cols="12" md="4">
          <h3 class="stats-value"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='1000' :duration='4' prefix='' suffix='+' separator=',' decimalSeparator='' :decimals='0' :autoinit='true' /></h3>
          
          <p class="stats-caption">Properties Secured</p>
        </v-col>
        <v-col cols="12" md="4">
        
          <h3 class="stats-value"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='99' :duration='4' prefix='' suffix='%' separator=',' decimalSeparator='' :decimals='0' :autoinit='true' /></h3>
          <p class="stats-caption">Peace of Mind Delivered</p>
        </v-col>
        <v-col cols="12" md="4">
     
          <h3 class="stats-value"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='5' :duration='4' prefix='' suffix='★' separator=',' decimalSeparator='' :decimals='0' :autoinit='true' /></h3>
          <p class="stats-caption">Technician Support</p>
        </v-col>
      </v-row>
      <v-row class="text-center mt-5" v-if="showDescription">
        <v-col cols="12">
          <h4 class="headline mb-5"><b>Trusted Security Solutions for Homes and Businesses</b></h4>
          <div class="caption mt-5">
            We make protecting and upgrading your property effortless and stress-free. Whether you need:<br /><br />
            <ul>
              <li><b>Security Camera Installations</b> for reliable surveillance.</li>
              <li><b>Monitored Alarm Systems</b> to ensure safety around the clock.</li>
              <li><b>Low-Voltage Tech Services</b>, including wiring, Starlink setups, or smart home installations.</li>
            </ul>
            <br />
            Our certified experts deliver precision and professionalism in every project. From setup to system demonstrations, we handle it all, so you can enjoy peace of mind with fast, efficient, and tailored. Experience hassle-free service designed for your convenience.
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "StatsSection",
  props: {
    showDescription: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.stats-section {
  background-color: #007bff; /* Matches the blue header */

  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.stats-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.stats-caption {
  font-size: 1.1rem;
  color: #e8f5ff;
  font-weight: 500;
}

.headline {
  color: #333333;
}

.caption {
  color: #666666;
}


.caption ul {
  margin: 0;
  padding-left: 1.5rem;
  list-style: none; /* Hides the bullets */
}

.caption ul li {
  margin-bottom: 0.5rem;
}
</style>
