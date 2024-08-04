let list_product = [
  { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
  { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
  { name: "Table", price: 64, availability: true, id: "3", category: "shirt" },
];

// Để viết 1 vòng for cần những gì ?
// - Vị trí bắt đầu (1)
// - Điều kiện để vòng lặp chạy (2)
// - Bước nhảy của vòng lặp (3)

// for( (1) ; (2) ; (3) )

// console.log(list_product[0]);
// console.log(list_product[1]);
// console.log(list_product[2]);

for (let i = 0; i < list_product.length; i++) {
  console.log(list_product[i]);
}
