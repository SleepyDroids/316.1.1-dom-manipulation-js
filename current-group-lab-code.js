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

const menuLinks = [
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

    // receiving an error in the console when I click on about
    // probably because they're no sublinks in about
    // so there is nothing to iterate through aka the undefined error 
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

// -------------- My attempt at the 2nd Part of Section 5 -----------
// This is where our group left off on the lab

subMenuEl.addEventListener("click", function () {
  // prevents the default actions fo the browser
  subMenuEl.preventDefault();
  // if the tag name isn't <a>, immediately return
  // aka if this isn't a link
  if (e.target.tagName !== "A") return;
  console.log(e.target); // couldn't confirm link aquisiton because of issue with .forEach function
  // that I would need to debug first, decided to continue at least building out the function
  // to gauge my understanding of the assignment.

  // setting the CSS top posiiotn to be 0 from the body element
  subMenuEl.style.top = "0";
  // remove active class from top menuMenuLinks
  topMenuLinks.classList.remove("active");

  /*
Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked 
within subMenuEl. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
  */
 
// STILL A WIP

  if (mainEl.textContent == "ABOUT") {
      subMenuEl.createElement("a");
      document.querySelector()

      // subMenuEl.innerHTML = "<h1>About</h1>";
    } 
  // using this as a placeholder, although I'm not convinved innerHTML is the solution
  // since I believe that wipes out all of the html that is already in there which
  // isn't necessarily what I want?
  
});

/*
Final notes: I'll concede I got lost in the syntax of this code. I know it's very well
done and concise, but something I'd need more practice and time to achieve on my own. 
I commend my group for how efficient and knowledgable they were and how DRY the code 
is for sure.

I also wholly concede I should've given myself more time to comb through the code,
done some more console logging through out to figure out how the code itself was working.

This also highlights my goal to improve my adaptability to work on code that I was not 
initially a part of. To be able to learn what are the right questions to ask regarding the code.

To clarify, I know these are weakpoints that I need to work on and improve on. Especially
when it comes to being able to read code and understand the functionality of it. 

This is definitely a lab I want to return to, maybe with the original code I worked on
and try to figure it out on my own to see what code I may come up with or at least solutions
that initially make sense to me.
*/

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


