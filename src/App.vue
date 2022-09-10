<template>
  <h1 class="text-white text-[66px] m-8">Todo App</h1>

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
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-2xl text-white bg-bgPrimary drop-shadow-3xl rounded-r-xl border-none focus:ring-transparent"
                placeholder="Create a new todo..."
                required=""
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-2xl font-medium text-white bg-addBtn rounded-r-lg border hover:bg-addBtn border-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-7 h-7"
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
      <div class="container-todoItem"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
