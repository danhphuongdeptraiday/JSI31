let list_product = [
  { name: 'Chair', price: 26, availability: false, id: '1', category: 'shirt' },
  { name: 'Cup', price: 7, availability: true, id: '2', category: 'shoes' },
  { name: 'Table', price: 64, availability: true, id: '3', category: 'shirt' }
];

let container = document.querySelector('.container');
// Cách 1
// for (let i = 0; i < list_product.length; i++) {
//   let box_content = document.createElement("div");
//   box_content.className = "box_content";

//   let p_id = document.createElement("p");
//   p_id.innerHTML = `ID: <b>${list_product[i].id}</b>`;

//   let p_name = document.createElement("p");
//   p_name.innerHTML = `Tên sản phẩm: <b>${list_product[i].name}</b>`;

//   let p_price = document.createElement("p");
//   p_price.innerHTML = `Giá tiền: <b>${list_product[i].price}$</b>`;

//   let p_status = document.createElement("p");

//   if (list_product[i].availability == true) {
//     p_status.innerHTML = `Trạng thái: <b>Còn hàng</b>`;
//   } else {
//     p_status.innerHTML = `Trạng thái: <b>Hết hàng</b>`;
//   }
//   let p_category = document.createElement("p");
//   p_category.innerHTML = `Loại sản phẩm: <b>Còn hàng</b>`;

//   box_content.appendChild(p_id);
//   box_content.appendChild(p_name);
//   box_content.appendChild(p_price);
//   box_content.appendChild(p_status);
//   box_content.appendChild(p_category);
//   container.appendChild(box_content);
// }

// Cách 2
for (let i = 0; i < list_product.length; i++) {
  let box_content = document.createElement('div');
  box_content.className = 'box_content';
  box_content.innerHTML = `
        <p>ID: <b>${list_product[i].id}</b></p>
      
        <p>Tên sản phẩm: <b>${list_product[i].name}</b></p>
 
        <p>Giá tiền: <b>${list_product[i].price}$</b></p>
      
        <p>Trạng thái hàng: <b>${
          list_product[i].availability ? 'Còn hàng' : 'Hết hàng'
        }</b></p>
      
        <p>Lại sản phẩm: <b>${list_product[i].category}</b></p>
    `;

  container.appendChild(box_content);
}
