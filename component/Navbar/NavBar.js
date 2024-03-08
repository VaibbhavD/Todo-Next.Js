function NavBar() {
  return (
    <nav
      class="relative flex w-full flex-wrap items-center justify-between bg-orange-600 py-2 shadow-dark-mild text-md lg:py-2"
      data-twe-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <ul
          class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
          data-twe-navbar-nav-ref
        >
          <li
            class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 text-2xl text-white font-bold"
            data-twe-nav-item-ref
          >
            Dashboard
          </li>
        </ul>

        <div class="flex items-center">
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="me-3 inline-block rounded px-2 pb-2 pt-2.5  font-bold text-lg  focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
          >
            Todos Done
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
