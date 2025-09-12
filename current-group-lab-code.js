// Jacqueline LaFontaine
// Group Lab
// ALAB 316.1.1: DOM Manipulation

// ----------------Part 1: Getting Started--------------------

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// ----------------Part 2: Creating a Menu Bar--------------------

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// ----------------Part 3: Adding Menu Buttons--------------------

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((link) => {
  const aEl = document.createElement("a");
  // aEl.setAttribute("href", link.href);
  aEl.setAttribute("href", link.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});

// ----------------Part 4: Adding Interactivity--------------------
// TODO: Add interactivity in the future
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("#top-menu a");

topMenuEl.addEventListener("click", (e) => {
  handleClick(e);
});

// ----------------- Event Handler --------------
function handleClick(e) {
  e.preventDefault();
  if (e.target.tagName !== "A") return;

  // Set menu to Active or Inactive
  topMenuLinks.forEach((link) => {
    if (e.target !== link) {
      link.classList.remove("active");
      subMenuEl.innerHTML = "";
    }
  });

  if (!e.target.classList.contains("active")) {
    if (e.target.textContent !== "about") {
      e.target.classList.add("active");
      subMenuEl.style.top = "100%";
    } else {
      e.target.classList.add("active");
      subMenuEl.style.top = "0%";
    }
    const subLinks = getsubLinks(menuLinks, e.target.textContent);
    subLinks.forEach((link) => {
      const aEl = document.createElement("a");
      aEl.setAttribute("href", link.href);
      aEl.textContent = link.text;
      subMenuEl.appendChild(aEl);
    });
  } else {
    e.target.classList.remove("active");
    subMenuEl.style.top = "0%";
  }
}
// -------------- Helper Function ---------------
function getsubLinks(Links, target) {
  let subLinks = [];
  Links.forEach((Link) => {
    if (Link.text === target) {
      subLinks = Link.subLinks;
    }
  });
  return subLinks;
}

/*
While incomplete, my intention is to look through both parts 1 and 2 and see if I can understand the code fully.
Then I'll work on completing the code. 
Hopefully I'll be able to make enough sense of it to complete the assignment. 
*/
