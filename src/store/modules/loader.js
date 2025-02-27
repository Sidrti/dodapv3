import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    isLoading: false,
    isSkeltonLoading: false,
    componentLoading: {},
    counter:0
  }),
  actions: {
    pending() {
      this.isLoading = true,
      this.counter++
    },
    done() {
      this.counter--
      if(this.counter == 0) {
        this.isLoading = false
      }
      
    },
    skeltonPending() {
      this.isSkeltonLoading = true
    },
    skeltonDone() {
      this.isSkeltonLoading = false
    },
    updateComponentLoading(payload) {
      this.componentLoading = {
        ...this.componentLoading,
        ...payload
      }
    }
  }
})