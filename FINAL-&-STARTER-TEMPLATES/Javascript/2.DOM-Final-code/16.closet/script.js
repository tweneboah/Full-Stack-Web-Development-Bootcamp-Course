// Select the sub-menu item with the id "team"
const selectedSubMenuItemEl = document.getElementById("team");

// Find the closest menu item to this sub-menu item
const parentMenuItemEl = selectedSubMenuItemEl.closest(".menuItem");

//Find the closest sub-menu to this sub-menu item

const closetSubMenuEl = selectedSubMenuItemEl.closest(".subMenu");
console.log(closetSubMenuEl);
