// GET, POST, PUT, DELETE
// fetch("url").then()

// Khhi fetch 1 đường link nó sẽ trả về chúng ta 1 promise
// Để xử lý promise phải dùng hàm .then()

// function hello() {
//   console.log("HEllo");
// }

// ES6: biến thẻ arrow function

// const print = (name) => "My name is " + name;
// const print = (name) => {
//   return "My name is " + name;
// };

const myPromise = new Promise(function (resolve, reject) {
  let name = "Phương";
  if (name == "Phương") {
    resolve("Tên bạn vừa nhập đúng là Phương rồi");
  } else {
    reject("Bạn nhập tên ko phải là Phương");
  }
});

// Để xử lý trường hợp promise thành công thì ra dùng: .then()
// Để xử lý trường họp thất bại ta dùng: catch()
// Cach 1
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   ĐƯờng link: https://picsum.photos/200/300 => trả về 1 cái url ảnh bất kỳ

let img = document.querySelectorAll("img");
fetch("https://picsum.photos/200/300").then((data) => {
  img[0].src = data.url;
});
// Cach 2
async function execute() {
  try {
    const dataImage = await myPromise;
    console.log(dataImage);
  } catch (err) {
    console.log(err);
  }
}
execute();

fetch("https://picsum.photos/200/300").then((data) => {
  img[1].src = data.url;
});

fetch("https://picsum.photos/200/300").then((data) => {
  img[2].src = data.url;
});

// Async/Await: Dùng để xử lý promise, ta dùng await để sử lý trường hợp resolve
// của promise, dùng try-catch để xử lý trường hợp reject. Khi dùng dùng await thì phải để trong function
// và function phải có async
