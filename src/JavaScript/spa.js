import router from "./router.js";

// spa for spa-links
document.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.className.includes("spa-link")) {
    return false;
  }

  urlRoutes(event);
});

// push link href to state address bar
function urlRoutes(event) {
  window.history.pushState({}, "", event.target.href);
  locationHandler();
}

// change the html content
async function locationHandler() {
  const locationPath = window.location.pathname;
  const route = router[locationPath] ?? router["/404.html"];
  const html = await fetch(route.template).then((res) => {
    return res.text();
  });

  document.getElementById("content").innerHTML = html;
  document.title = route.title;
}

// spa for pop state event
window.addEventListener("popstate", () => {
  locationHandler();
});
