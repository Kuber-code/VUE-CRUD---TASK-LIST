const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      tasks: [],
      listVisible: true,
      buttonText: "Hide List",
      editValue: "",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
    },
    editTask(index) {
      this.tasks[index] = this.editValue;
      this.editValue = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    hideOrShowTasksList() {
      this.listVisible = !this.listVisible;
      if (this.listVisible) {
        this.buttonText = "Hide List";
      } else {
        this.buttonText = "Show List";
      }
    },
  },
});
app.mount("#assignment");
