<template lang="">
  <div class="todoItem__items px-3 py-5" :class="computedClass">
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="flex items-center p-5 text-[36px] bg-bgSecondary justify-between hover:cursor-pointer"
    >
      <div class="item">
        <input
          :id="index"
          @click="finishTodo(index)"
          type="checkbox"
          value=""
          required
          class="w-7 h-7 text-blue-600 bg-gray-100 hover:cursor-pointer rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          :for="index"
          :class="
            todo.done ? 'line-through opacity-50' : 'no-underline opacity-100'
          "
          class="ml-4 hover:cursor-pointer font-medium"
          >{{ todo.name }}</label
        >
      </div>
      <button
        type="submit"
        @click="deleteTodo(index)"
        class="bg-red-500 text-white font-bold px-5 rounded-lg text-[26px] m-"
      >
        X
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
      default: [],
    },
  },
  computed: {
    computedClass() {
      let className = this.todos.length.toString();

      // More complicated logic to determine what
      // class should be applied

      if (className > 0) {
        return "overflow-y-scroll h-full";
      }
      return "overflow-y-auto h-auto";
    },
  },
  methods: {
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
    finishTodo(todoIndex) {
      this.todos.forEach((element, index) => {
        if (todoIndex == index) {
          element.done = !element.done;
          console.log(element);
          // this.showDone(element.done);
        }
      });
    },
  },
};
</script>
<style lang=""></style>
