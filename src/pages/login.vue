<template>
  <div>
    <form class="row g-4 p-4 shadow rounded bg-light needs-validation" @submit.prevent="submitForm" novalidate>
      <h3 class="text-center text-primary fw-bold">User Registration</h3>

      <!-- Email -->
      <div class="row-md-4">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="usman@gmail.com" v-model="email" required>
        <div v-if="submittedAttempt && !email" class="text-danger small">Email is required.</div>
      </div>

      <!-- Password -->
      <div class="row-md-4">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="••••••••" v-model="password" required>
        <div v-if="submittedAttempt && !password" class="text-danger small">Password is required.</div>
      </div>

     

      <!-- Checkbox -->
      <div class="row-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" v-model="formCheck" required>
          <label class="form-check-label" for="gridCheck">
            I agree to the terms and conditions
          </label>
          <div v-if="submittedAttempt && !formCheck" class="text-danger small">You must agree to terms.</div>
        </div>
      </div>

      <div class="-4">
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </div>
    </form>

    <!-- Submitted User Data -->
     <div class="container my-5">
  <div class="card shadow p-4">
    <h4 class="text-primary text-center fw-bold mb-4">Submitted User Data</h4>
    
    <div class="row mb-2">
      <div class="col-md-6"><strong>Email:</strong></div>
      <div class="col-md-6">{{ submittedData.email }}</div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6"><strong>Password:</strong></div>
      <div class="col-md-6">{{submittedData.password}}</div>
    </div>

   
  

    <div class="row mb-2">
      <div class="col-md-6"><strong>Agreed Terms:</strong></div>
      <div class="col-md-6">{{ submittedData.formCheck }}</div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ROUTES } from '../constants/routes.js'

export default defineComponent({
  name: 'login',
  data() {
    return {
       email: "",
      password: "",
     
      formCheck: false,

      submitted: false,
      submittedData: {},
      submittedAttempt: false, // for showing validation
    }
  },
  computed: {
   
  },
  methods: {
     submitForm() {
      this.submittedAttempt = true;

      if (
        this.email &&
        this.password &&
        this.formCheck
      ) {
        // Store submitted data
        this.submittedData = {
          email: this.email,
          password: this.password,
          formCheck: this.formCheck,
        };

        this.submitted = true;

        const myJson = {
            email: this.email,
            password: this.password
        };

        // Reset form
        this.email = "";
        this.password = "";
        this.formCheck = false;
        this.submittedAttempt = false;
      }
    },
  }
})
</script>

<style scoped>

</style> 