<template>
    <v-container >
      <v-card class="mb-4 pa-4 elevation-2">
        <h5 class="text-h6 mb-3 mt-5">📷 Add Camera Information</h5> <br>
        
        <v-form @submit.prevent="addCamera" v-model="isFormValid" >
          <v-row >
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="newCamera.type"
                label="Camera Resolution"
                type="text"
                variant="outlined"
                placeholder="4 MP"
                 prepend-inner-icon="mdi-camera"
                
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model.number="newCamera.quantity"
                label="Quantity"
                type="number"
                variant="outlined"
                 prepend-inner-icon="mdi-gauge"
                :rules="[
                  v => !!v || 'Quantity is required',
                  v => v > 0 || 'Quantity must be greater than 0'
                ]"
                
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model.number="newCamera.cameraPrice"
                label="Camera Unit Price"
                type="number"
                variant="outlined"
                prepend-inner-icon="mdi-cash"
                prefix="$"
                :rules="[
                  v => !!v || 'Camera price is required',
                  v => v > 0 || 'Price must be greater than 0'
                ]"
                
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" sm="12" md="6">
              <div class="d-flex align-center">
                <v-text-field
                  v-model.number="newCamera.nvrPrice"
                  label="NVR Unit Price"
                  type="number"
                  variant="outlined"
                  prepend-inner-icon="mdi-cash"
                  prefix="$" 
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              
                <v-btn
                  color="#4CAF50"
                  class="ml-5 mb-5 float-right"
                  type="submit"
                  :disabled="!isFormValid">
                  <v-icon>mdi-plus</v-icon>
                  Add
                </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <h5 class="text-h6 mb-3 mt-5">🛒 Camera in Cart</h5> <br>
        <v-data-table
          :headers="headers"
          :items="cameras"
          :search="search"
          :items-per-page="5"
          class="elevation-1 bg-white">
          
          <template v-slot:item="{ item }">
            <tr>
              <td>
                <v-edit-dialog
                  :return-value.sync="item.type"
                  @save="saveEdit(item)"
                >
                  {{ item.type }}
                  <template v-slot:input>
                    <v-select
                      v-model="item.type"
                      :items="cameraTypes"
                      label="Edit"
                      single-line
                    ></v-select>
                  </template>
                </v-edit-dialog>
              </td>
              <td>
                <v-edit-dialog
                  :return-value.sync="item.quantity"
                  @save="saveEdit(item)"
                >
                  {{ item.quantity }}
                  <template v-slot:input>
                    <v-text-field
                      v-model.number="item.quantity"
                      type="number"
                      label="Edit"
                      single-line
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td>
                <v-edit-dialog
                  :return-value.sync="item.cameraPrice"
                  @save="saveEdit(item)"
                >
                  ${{ item.cameraPrice }}
                  <template v-slot:input>
                    <v-text-field
                      v-model.number="item.cameraPrice"
                      type="number"
                      label="Edit"
                      single-line
                      prefix="$"
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td>
                <v-edit-dialog
                  :return-value.sync="item.nvrPrice"
                  @save="saveEdit(item)"
                >
                  ${{ item.nvrPrice }}
                  <template v-slot:input>
                    <v-text-field
                      v-model.number="item.nvrPrice"
                      type="number"
                      label="Edit"
                      single-line
                      prefix="$"
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td>${{ calculateRowTotal(item).toFixed(2) }}</td>
              <td>
                <v-icon
                  color="error"
                  icon="mdi-delete"
                  size="large"
                  @click="deleteCamera(item)"
                ></v-icon>
              </td>
            </tr>
  </template>
    <!-- Add this new bottom slot -->
    <template v-slot:bottom>
    <v-divider></v-divider>
    <div class="d-flex justify-end pa-4">
      <div class="text-subtitle-1 font-weight-bold">
        Total: ${{ calculateTotal.toFixed(2) }}
      </div>
    </div>
  </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive, computed,watch  } from 'vue';
  
  const emit = defineEmits(['update-cameras']);
  const isFormValid = ref(false);
  const search = ref('');
  const cameras = ref([]);
  
  
  const headers = [
    { title: 'Camera Resolution', key: 'type' },
    { title: 'Quantity', key: 'quantity' },
    { title: 'Camera Unit Price', key: 'cameraPrice' },
    { title: 'NVR Unit Price', key: 'nvrPrice' },
    { title: 'Total', key: 'total' },
    { title: 'Actions', key: 'actions', sortable: false },
  ];
  
  const newCamera = reactive({
    type: '',
    quantity: null,
    cameraPrice: null,
    nvrPrice: null,
  });
  watch(
  cameras,
  (newVal) => {
    emit('update-cameras', newVal); // Emit updated cameras array
  },
  { deep: true } // Ensure deep watching for nested object changes
);
  const addCamera = () => {
    cameras.value.push({ ...newCamera });
    // Reset form
    Object.keys(newCamera).forEach(key => newCamera[key] = key === 'type' ? '' : null);
  };
  
  const deleteCamera = (item) => {
    const index = cameras.value.indexOf(item);
    cameras.value.splice(index, 1);
  };
  
  const saveEdit = (item) => {
    // You can add validation or API calls here
    console.log('Saved:', item);
  };
  const calculateRowTotal = (item) => {
  return (item.cameraPrice * item.quantity) + item.nvrPrice;
  };
  const calculateTotal = computed(() => {
  return cameras.value.reduce((total, camera) => {
    return total + (camera.cameraPrice * camera.quantity + camera.nvrPrice);
  }, 0);
});
  </script>
  <style scoped>
  .stepper-card {
    background: rgba(255, 255, 255, 0.95) !important;
    border-radius: 16px !important;
    padding: 30px !important;
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>