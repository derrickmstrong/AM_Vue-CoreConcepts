const app = Vue.createApp({
  // data must be a function that returns an object
  data() {
    return {
      courseGoal: 'Learn Vue',
      vueLink: 'http://vuejs.org',
      courseGoalA: 'Finish Vue course',
      courseGoalB: 'Practice more',
      courseGoalC: '<h1>Master Vue</h1>',
    };
  },
  // methods takes in an object that include functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random(); // returns a value between 0 and 1

      // Return static text based on condition
      // return randomNumber < 0.5 ? 'Learn Vue': 'Master Vue!';

      // Return data via 'this' based on condition
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  }
}).mount('#user-goal') // mount replaces el and sets your Vue instance to look for #user-goal