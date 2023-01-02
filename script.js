var Sunrise =
  "https://empire-s3-production.bobvila.com/slides/32336/original/Taft-Point-in-Yosemite-National-Park-sunrise.jpeg?1559750100";
var Day =
  "https://i0.wp.com/chubaoyolu.org/wp-content/uploads/2016/07/bluesky_rainbow.jpg?ssl=1";
var Sunset =
  "https://img.freepik.com/free-vector/gradient-beach-sunset-landscape-background_52683-64263.jpg?w=2000";
var Night = "https://i.ytimg.com/vi/lN4uLzUfYCo/maxresdefault.jpg";

setInterval(function () {
  document.querySelector("#time").textContent = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  var currentHour = moment().hour();

  var selectedSrc = "";

  if (currentHour >= 6 && currentHour < 9) {
    selectedSrc = Sunrise;
  }

  if (currentHour >= 9 && currentHour < 16) {
    selectedSrc = Day;
  }

  if (currentHour >= 16 && currentHour < 20) {
    selectedSrc = Sunset;
  }

  if (currentHour >= 0 && currentHour < 6) {
    selectedSrc = Night;
  }

  if (currentHour >= 18 && currentHour < 24) {
    selectedSrc = Night;
  }

  console.log(selectedSrc);

  document.body.style.background = "url(" + selectedSrc + ")";
}, 1000);
