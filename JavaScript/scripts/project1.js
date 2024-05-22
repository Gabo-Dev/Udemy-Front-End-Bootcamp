  // we cud add more colors in the future this is a basic example project
  var bgcolor = new Array("#029FD4", "#D43702", "#1EFF00");
  // each time we refresh the page the backgrounnd gonna change
  document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)];