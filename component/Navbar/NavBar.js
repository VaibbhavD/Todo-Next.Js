function NavBar() {
  return (
    <nav
      class="relative flex w-full  items-center justify-between bg-orange-600 py-2 shadow-dark-mild text-md lg:py-2"
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
            TODO's
          </li>
        </ul>
      </div>

      <div class="w-1/2 ">
        <div class="flex items-center">
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="me-3 flex rounded px-2 pb-2 pt-2.5  font-bold text-lg  focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            Completed
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
