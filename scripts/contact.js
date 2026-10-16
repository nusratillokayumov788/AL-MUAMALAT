function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    
    document.querySelectorAll('.dropdown').forEach(item => {
        if (item.id !== dropdownId) {
            item.classList.remove('open');
        }
    });

    dropdown.classList.toggle('open');
}

window.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(item => {
            item.classList.remove('open');
        });
    }
});

const chatToken = "8697433616:AAGtRhyHn1dOE17EXlnNivlYMH1DTmZ-qxs"
const chatID = "5712192260";

let elName = document.querySelector(".input1")
let elEmail = document.querySelector(".input2")
let elWhat = document.querySelector(".input3")
let elBudget = document.querySelector(".input4")
let elMassage = document.querySelector(".inputs5")
let elForm = document.querySelector(".form")

elForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const foydalanuvchi = `
  📩 Yangi habar:

  👨Ism: ${elName.value}
  📩Email: ${elEmail.value}
  ❓What service are you interested in : ${elWhat.value}
  💰Budget : ${elBudget.value}
  ✒️ Massage : ${elMassage.value}
  `
  fetch(`https://api.telegram.org/bot${chatToken}/sendMessage`,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        chat_id: chatID,
        text: foydalanuvchi
      })
  })
  .then(res=>res.json())
  .then(data=>{
    console.log("yuborildi :", data);
  })
  .catch(error=>{
    console.log("xatolik:", error);
    
  })
})