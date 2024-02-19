const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jhon",
      lastName: "Doe",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Bob";
// }, 2000);
