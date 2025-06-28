<template>
  <div>
    <form class="row g-4 p-4 shadow rounded bg-light needs-validation" @submit.prevent="submitForm" novalidate>
      <h3 class="text-center text-primary fw-bold">User Registration</h3>

      <!-- Email -->
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="usman@gmail.com" v-model="email" required>
        <div v-if="submittedAttempt && !email" class="text-danger small">Email is required.</div>
      </div>

      <!-- Password -->
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="••••••••" v-model="password" required>
        <div v-if="submittedAttempt && !password" class="text-danger small">Password is required.</div>
      </div>

      <!-- Address 1 -->
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Korangi number 6" v-model="address1" required>
        <div v-if="submittedAttempt && !address1" class="text-danger small">Address is required.</div>
      </div>

      <!-- Address 2 -->
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Naval land" v-model="address2" required>
        <div v-if="submittedAttempt && !address2" class="text-danger small">Address 2 is required.</div>
      </div>

      <!-- City -->
      <div class="col-md-4">
        <label for="inputCity" class="form-label">City</label>
        <select id="inputCity" class="form-select" v-model="city" required>
          <option disabled value="">Select City</option>
          <option>Karachi</option>
          <option>Sargodha</option>
          <option>Lahore</option>
          <option>Islamabad</option>
          <option>Rawalpindi</option>
          <option>Faisalabad</option>
          <option>Peshawar</option>
          <option>Quetta</option>
          <option>Multan</option>
          <option>Sialkot</option>
        </select>
        <div v-if="submittedAttempt && !city" class="text-danger small">City is required.</div>
      </div>

      <!-- Province -->
      <div class="col-md-4">
        <label for="inputState" class="form-label">Province</label>
        <select id="inputState" class="form-select" v-model="province" required>
          <option disabled value="">Select Province</option>
          <option>Sindh</option>
          <option>Punjab</option>
          <option>Khyber Pakhtunkhwa</option>
          <option>Balochistan</option>
          <option>Gilgit-Baltistan</option>
          <option>Azad Kashmir</option>
          <option>Islamabad Capital Territory</option>
        </select>
        <div v-if="submittedAttempt && !province" class="text-danger small">Province is required.</div>
      </div>

      <!-- Country -->
      <div class="col-md-4">
        <label for="inputCountry" class="form-label">Country</label>
        <select id="inputCountry" class="form-select" v-model="country" required>
          <option disabled value="">Select Country</option>
          <option>Pakistan</option>
          <option>India</option>
          <option>Bangladesh</option>
          <option>United Arab Emirates</option>
          <option>United States</option>
        </select>
        <div v-if="submittedAttempt && !country" class="text-danger small">Country is required.</div>
      </div>

      <!-- Zip Code -->
      <div class="col-md-4">
        <label for="inputZip" class="form-label">Zip Code</label>
        <input type="text" class="form-control" id="inputZip" placeholder="e.g. 74900" v-model="zipCode" required>
        <div v-if="submittedAttempt && !zipCode" class="text-danger small">Zip code is required.</div>
      </div>

      <!-- Checkbox -->
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" v-model="formCheck" required>
          <label class="form-check-label" for="gridCheck">
            I agree to the terms and conditions
          </label>
          <div v-if="submittedAttempt && !formCheck" class="text-danger small">You must agree to terms.</div>
        </div>
      </div>

      <div class="col-12">
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
      <div class="col-md-6"><strong>Address:</strong></div>
      <div class="col-md-6">{{submittedData.address1}}</div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6"><strong>Address 2:</strong></div>
      <div class="col-md-6">{{ submittedData.address2 }}</div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6"><strong>City:</strong></div>
      <div class="col-md-6">{{ submittedData.city }}</div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6"><strong>Province:</strong></div>
      <div class="col-md-6">{{ submittedData.province }}</div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6"><strong>Country:</strong></div>
      <div class="col-md-6">{{ submittedData.country }}</div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6"><strong>Zip Code:</strong></div>
      <div class="col-md-6">{{ submittedData.zipCode }}</div>
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

export default defineComponent({
  name: 'UserRegistrationForm',
  data() {
    return {
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      province: "",
      country: "",
      zipCode: "",
      formCheck: false,

      submitted: false,
      submittedData: {},
      submittedAttempt: false, // for showing validation
    };
  },
  methods: {
    submitForm() {
      this.submittedAttempt = true;

      if (
        this.email &&
        this.password &&
        this.address1 &&
        this.address2 &&
        this.city &&
        this.province &&
        this.country &&
        this.zipCode &&
        this.formCheck
      ) {
        // Store submitted data
        this.submittedData = {
          email: this.email,
          password: this.password,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          province: this.province,
          country: this.country,
          zipCode: this.zipCode,
          formCheck: this.formCheck,
        };

        this.submitted = true;

        // Reset form
        this.email = "";
        this.password = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.province = "";
        this.country = "";
        this.zipCode = "";
        this.formCheck = false;
        this.submittedAttempt = false;
      }
    },
  },
}
);


</script>

<style scoped>

</style> 