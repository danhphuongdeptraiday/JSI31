let render_value = document.querySelector(".render_value");
let input_search = document.querySelector("input");
let button_search = document.querySelector("button");

// tìm kiếm giá trị thông qua ID
button_search.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      data = data.slice(0, 10);
      for (let i = 0; i < data.length; i++) {
        if (input_search.value == data[i].id) {
          render_value.innerHTML = `
          <ul>
            <b>${data[i].title}</b>
            <li>${data[i].id}</li>
          </ul>
        `;
        }
      }
    });
});

// Render các giá trị ra thôi
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let newData = data.slice(0, 10);

    // 2. Tạo 1 mảng mới có các id là số chẵn
    let mangSoChan = [];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id % 2 == 0) {
        mangSoChan.push(newData[i]);
      }
    }

    // 3. Hiển thị các object ra ngoài giao diện
    for (let i = 0; i < mangSoChan.length; i++) {
      let ul = document.createElement("ul");
      ul.innerHTML = `
          <b>${mangSoChan[i].title}</b>
          <li>${mangSoChan[i].id}</li>
        `;
      render_value.appendChild(ul);
      ul.addEventListener("dblclick", function () {
        ul.remove();
      });
    }
    // [0, 1, 2, 3, 4];
    // // Cách 2
    // let ul = document.getElementsByTagName("ul");
    // for (let i = 0; i < ul.length; i++) {
    //   ul[i].addEventListener("dblclick", function () {
    //     console.log(ul);
    //     ul[i].remove();
    //   });
    // }
  });
