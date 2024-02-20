const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jhon",
      lastName: "Doe",
      url: "https://google.com",
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
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
}).mount("#app");
