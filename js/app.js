const save = document.querySelector("#save");
const clear = document.querySelector("#clear");

save.addEventListener("click", function () {
  const v = document.querySelector("#text_area").value;
  localStorage.setItem("memo", v);
  console.log("保存完了");
});

clear.addEventListener("click", function () {
  localStorage.removeItem("memo");
  console.log("削除完了");
});

if (localStorage.getItem("memo")) {
  const v = localStorage.getItem("memo");
  const text_area = document.querySelector("#text_area");
  text_area.value = v;
}
