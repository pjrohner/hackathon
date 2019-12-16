<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <hr />
    <template>
      <v-form v-model="valid" ref="feedbackForm">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col cols="12" mdd="4">
            </v-col>
          </v-row> -->
          <v-btn color="primary" @click="submitData">Submit</v-btn>
        </v-container>
      </v-form>
    </template>
  </div>
</template>

<script>
export default {
  name: "FeedbackFormComponent",
  props: {
    pageTitle: { type: String, required: true }
  },
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => (v && /.+@.+/.test(v)) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    submitData() {
      if (this.$refs.feedbackForm.validate()) {
        const userData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email
        };
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.$emit("submitFeedback", userData);
      }
    }
  }
};
</script>

<style></style>
