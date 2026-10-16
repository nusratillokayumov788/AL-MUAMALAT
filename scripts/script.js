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


const servicesData = [
  {
    id: 1,
    title: "Islamic Fund Management",
    description:
      "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
    color: "#DCE8FF",
  },
  {
    id: 2,
    title: "International Relations",
    description:
      "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
    color: "#D9F5EA",
  },
  {
    id: 3,
    title: "Education and Training",
    description:
      "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
    color: "#F9DDF1",
  },
  {
    id: 4,
    title: "For Islamic Banks",
    description:
      "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
    color: "#E3DDF9",
  },
  {
    id: 5,
    title: "Islamic Capital Market",
    description:
      "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
    color: "#E9EDF2",
  },
  {
    id: 6,
    title: "Shariah Compliance Audit",
    description:
      "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
    color: "#FFF0B8",
  },
];

const elservices = document.querySelector(".section")

servicesData.forEach((section)=>{
    elservices.innerHTML += `
    <div class="section-item" style="background-color: ${section.color};">
        <div class="content-box">
            <h3 style="font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px;">${section.title}</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 25px;">${section.description}</p>
        </div>
        <button class="learn-more-btn">Learn more</button>
    </div>
    `
})
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('marqueeTrack');
    
    track.addEventListener('mouseenter', () => {
        track.style.cursor = 'grab';
    });
});

const videosData = [
  {
    id: 1,
    title: "Why Islamic finance?",
    image: "/images/Image-1.png",
    videoUrl: "",
  },
  {
    id: 2,
    title: "What makes Islamic finance unique?",
    image: "/images/Image-2.png",
    videoUrl: "",
  },
  {
    id: 3,
    title: "How is risk managed in Islamic finance?",
    image: "/images/Image-3.png",
    videoUrl: "",
  },
];

const elvideo = document.querySelector(".VDs");

videosData.forEach((VDs) => {
    elvideo.innerHTML += `
    <div class="Vds">
        <img src="${VDs.image}">
        <h2>${VDs.title}</h2>
    </div>
    `;
});

const testimonialsData = [
  {
    id: 1,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
    name: "Finlay Kirk",
    position: "Web designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 2,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
    name: "Finlay Kirk",
    position: "Web designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 3,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
    name: "Finlay Kirk",
    position: "Web designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
];
  
const elGrid = document.querySelector(".Media-grid");

testimonialsData.forEach((Media) => {
    elGrid.innerHTML += `
    <div class="Media-item">
        <p class="Media-item-text">${Media.text}</p> 
        <div class="Media-author">
            <img src="${Media.image}" alt="${Media.name}">
            <div>
                <h3 class="Media-name">${Media.name}</h3>
                <p class="Media-position">${Media.position}</p>
            </div>
        </div>
    </div>
    `;
});



const chatToken = "8697433616:AAGtRhyHn1dOE17EXlnNivlYMH1DTmZ-qxs"
const chatID = "5712192260";

let elName = document.querySelector(".Name-input")
let elNumber = document.querySelector(".Number-input")

let elForm = document.querySelector(".support")

elForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const foydalanuvchi = `
  📩 Yangi habar:

  👨Ism: ${elName.value}
  📞Tel: ${elNumber.value}
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