const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      uniqueKeys: [],
      counter:0,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.addUniKey();
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    addUniKey(){
      this.uniqueKeys.push(++counter)
    }
  },
});

app.mount("#user-goals");
