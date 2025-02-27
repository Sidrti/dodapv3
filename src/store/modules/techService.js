// stores/techStore.js
import { defineStore } from 'pinia';
import { banner, techService, techServiceDescription } from '@/services/techServices';

export const useTechStore = defineStore('tech', {
  state: () => ({
    // your state here
  }),
  actions: {
    techServicesAPICall(formData) {
      return techService(formData).then(res => {
        return res;
      });
    },
    techServicesDescriptionAPICall(formData) {
      return techServiceDescription(formData).then(res => {
        return res;
      });
    },
    bannerAPICall(formData) {
      return banner(formData).then(res => {
        return res;
      });
    },
  },
});