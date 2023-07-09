const btn = document.querySelector("#btn");
const container = document.querySelector(".nav_container");

// # sidebar
const sidebarBtn = document.querySelector("#sidebar");
const sidebar = document.querySelector(".sidebar");

// function eventHandler(params) {}

btn.addEventListener("click", () => {
  // # 1-yo'li
  // if (container.classList.contains("open")) {
  //   container.classList.remove("open");
  // } else {
  //   container.classList.add("open");
  // }
  // * 2-yo'li
  if (sidebar.classList.contains("sidebar_active")) {
    sidebar.classList.remove("sidebar_active");
  }

  container.classList.toggle("menu_active");
});

sidebarBtn.addEventListener("click", function () {
  if (container.classList.contains("menu_active")) {
    container.classList.remove("menu_active");
  }
  sidebar.classList.toggle("sidebar_active");
});
