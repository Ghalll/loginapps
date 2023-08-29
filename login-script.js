/* Comment: membuat variabel untuk setiap elemen view*/ 
const loginFormElement = document.querySelector("#loginform");
const inputEmailElement = document.querySelector("#inputemail");
const inputPasswordlElement = document.querySelector("#inputpassword");

/* Comment: membuat variabel untuk menyimpan informasi email dan password*/
const emailuser = "yugael4@gmail.com";
const passworduser = "pohonkelapa";

/* Comment: menambahkan aksi klik pada button*/
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  /* Comment: mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan*/
  const email = inputEmailElement.value;
  const password = inputPasswordlElement.value;
  /* Comment: memastikan bahwa nilai email dan password sesuai dengan nilai yang disimpan*/
  if (email === emailuser && password === passworduser) {
    /* Comment: jika sesuai maka program akan berpindah ke halaman home*/
    goToHome();
  } else {
    /* Comment: jika tidak sesuai maka akan menampilkan informasi bahwa input salah*/
    showPopUp();
  }  
})