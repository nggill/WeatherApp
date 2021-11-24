///Search Input to Change h2, h4, and call API
function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${searchInput.value}`;
    let h4 = document.querySelector("h4");
    if (searchInput.value) {
      h4.innerHTML = `${searchInput.value}`;
    } else {
      h4.innerHTML = null;
      alert("Please enter a City");
    }
  }
  
  let form = document.querySelector(`#searchForm`);
  form.addEventListener("submit", search);
  
  ///Date and Time in h5
  let now = new Date();
  
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];
  let day = days[now.getDay()];
  
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[now.getMonth()];
  let h5 = document.querySelector("#date-time");
  h5.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}`;
  
  ///API weather documentation
  let apiKey = "23ae8af4580cf1669a4ba3e951eb0962";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  