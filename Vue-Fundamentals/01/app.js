const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jhon",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      age: 20,
    };
  },
  methods: {
    increment() {
      return this.age++;
    },
    updateFirstName(event) {
      this.firstName = event.target.value;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Running again");
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  }
}).mount("#app");
