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
              <input
                id="search-dropdown"
                v-model="todo"
                class="block p-4 pr-16 w-full z-20 text-2xl text-white bg-bgSecondary drop-shadow-3xl rounded-r-xl border-none focus:ring-transparent"
                placeholder="Create a new todo..."
                required=""
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
      <div class="container-todoItem text-white mt-10 drop-shadow-3xl">
        <div class="todoItem__items px-3 py-5 bg-bgSecondary">
          <div
            v-for="todo in todos"
            :key="todo"
            class="flex items-center p-5 text-[36px] justify-between hover:cursor-pointer"
          >
            <div class="item">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-7 h-7 text-blue-600 bg-gray-100 hover:cursor-pointer rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-4 hover:cursor-pointer font-medium"
                >{{ todo.name }}</label
              >
            </div>
            <button
              type="submit"
              class="bg-red-500 text-white font-bold px-5 rounded-lg text-[26px] m-"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      todo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.unshift({
        name: this.todo,
        done: false,
      });
      console.log(this.todos);
      this.todo = "";
    },
  },
};
</script>

<style scoped></style>
