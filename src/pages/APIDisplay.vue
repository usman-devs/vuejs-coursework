<template>
   <div class="container">
    <h3>Self Medication List</h3>
    <ul>
      <li v-for="item in medications">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ROUTES } from '../constants/routes.js';
import axios from 'axios';

export default {
  name: 'SelfMedication',
  data() {
    return {
        medications: [],
    };
  },
    mounted() {
    this.fetchSelfMedication();
  },
  methods: {
   async fetchSelfMedication() {
      const response = await axios.get('https://apidb.dvago.pk/AppAPIV3/GetSelfMedication');
      this.medications = response.data.Data;
      return response.data.Data;
    }
  }
}
</script>

<style scoped>

</style> 


