let input_search = document.querySelector("input");
let search_btn = document.querySelector("button");

// Bước 1: lấy các thẻ div có class là response ở HTML
// Bước 2: Lấy ra đc value ở trong input search place
// Bước 3: Fetch đường link dựa theo giá trị của input search place (Thao khảo các tạo url dựa biến ở dòng 19)
// Bước 4: Fetch đường link từ bước 3
// Bước 5: Lấy giá trị latitude và longitude của bước 3 và fetch đường link thứ 2
// Bước 6: Gọi response và gán innerHTML vào, trong innerHTML thì chứa các giá trị cần thiết (place, latitude, longitude, temperature)
search_btn.addEventListener("click", function () {
  fetch("https://geocoding-api.open-meteo.com/v1/search?name=hanoi")
    .then((res) => res.json())
    .then((data) => {
      console.log();
      console.log(data.results[0].longitude);
      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;

      // let url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true"
      let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

      fetch(url)
        .then((res) => res.json())
        .then((data_weather) => {
          console.log(data_weather.current_weather.temperature);
        });
    });
});
