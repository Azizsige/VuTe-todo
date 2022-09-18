<template>
  <h1 class="text-white text-[96px] m-8">
    Todo
    <font-awesome-icon icon="fa-solid fa-arrow-turn-down-left" />
  </h1>

  <div class="wrapper flex flex-col items-center">
    <div class="container w-[666px] h-[412.45]">
      <div class="container-input">
        <form>
          <div class="flex">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >Your Email</label
            >
            <div class="relative w-full">
              <p
                v-if="todo == ''"
                class="text-red-700 text-lg absolute z-10 top-[-3rem]"
              >
                Input Wajib Diisi
              </p>
              <p v-else class="text-red-700 absolute z-10 top-[-2rem]"></p>
              <input
                id="search-dropdown"
                v-model="todo"
                class="block p-4 pr-16 w-full z-20 text-2xl text-white bg-bgSecondary drop-shadow-3xl rounded-r-xl border-none focus:ring-transparent"
                placeholder="Create a new todo..."
                required
                autocomplete="off"
              />
              <button
                type="submit"
                @click.prevent="addTodo"
                class="absolute top-0 right-0 p-2.5 text-2xl font-medium text-white bg-addBtn rounded-r-lg border hover:bg-addBtn border-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-11 h-11"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        class="container-todoItem text-white mt-10 max-h-[50%] drop-shadow-3xl"
        :class="checkHeight"
      >
        <TodoItem :todos="todos" @deleteTodo="deleteTodo" />
      </div>
      <p class="p-2.5 text-white mt-3 text-3xl">
        Jumlah Todo : {{ todoLength }}
      </p>
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
export default {
  components: { TodoItem },
  data() {
    return {
      todos: [],
      todo: "",
    };
  },
  watch: {
    todos() {
      console.log("yyy");
    },
  },

  computed: {
    todoLength() {
      return this.todos.length;
    },

    checkHeight() {
      let num = this.todoLength.toString();

      if (num > 5) {
        return "h-[36rem]";
      }
      return "h-auto";
    },
  },

  methods: {
    addTodo() {
      this.todos.unshift({
        name: this.todo,
        done: false,
      });
      this.todo = "";
    },

    deleteTodo(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        if (index !== todoIndex) {
          return item;
        }
      });
    },
    // finishTodo(todoIndex) {
    //   this.todos.forEach((element, index) => {
    //     if (todoIndex == index) {
    //       element.done = !element.done;
    //       console.log(element);
    //       this.showDone(element.done);
    //     }
    //   });
    // },

    // showDone(isDone) {
    //   if (isDone) {
    //   } else {
    //     alert(isDone);
    //   }
    // },
  },
};
</script>

<style scoped></style>
