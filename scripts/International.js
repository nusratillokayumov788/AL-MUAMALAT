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
  const courses = [
    {
      id: 1,
      category: "Design",
      title: "UI/UX Design Fundamentals & Prototyping",
      image: "../images/Shop-img1.svg",
      rating: 5.0,
      reviewsCount: 20,
      price: 500,
      currency: "$"
    },
    {
      id: 2,
      category: "Business",
      title: "Introduction to Islamic Banking & Finance",
      image: "../images/Shop-img2.svg",
      rating: 4.0,
      reviewsCount: 102,
      price: 500,
      currency: "$"
    },
    {
      id: 3,
      category: "Business",
      title: "Strategic Management & Corporate Growth",
      image: "../images/Shop-img3.svg",
      rating: 4.0,
      reviewsCount: 102,
      price: 500,
      currency: "$"
    },
    {
      id: 4,
      category: "Finance",
      title: "Halal Investment & Portfolio Management",
      image: "../images/Shop-img1.svg",
      rating: 4.9,
      reviewsCount: 88,
      price: 450,
      currency: "$"
    },
    {
      id: 5,
      category: "Marketing",
      title: "Digital Marketing & Brand Building",
      image: "../images/Shop-img2.svg",
      rating: 4.7,
      reviewsCount: 64,
      price: 350,
      currency: "$"
    },
    {
      id: 6,
      category: "Development",
      title: "Modern Frontend Web Development",
      image: "../images/Shop-img3.svg",
      rating: 4.8,
      reviewsCount: 140,
      price: 600,
      currency: "$"
    }
];

const shopContainer = document.querySelector('.shop');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
const visibleCardsCount = 3;

function renderCourses() {
    shopContainer.innerHTML = '';
    
    const currentCourses = courses.slice(currentIndex, currentIndex + visibleCardsCount);
    
    currentCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        
        card.innerHTML = `
            <div class="card-image-box">
                <span class="category-badge">${course.category}</span>
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="card-content">
                <h3 class="course-title">${course.title}</h3>
                <div class="rating-box">
                    <span class="stars">★★★★★</span>
                    <span>(${course.reviewsCount})</span>
                </div>
            </div>
            <div class="card-footer">
                <span class="price">${course.currency} ${course.price}</span>
                <button class="action-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </button>
            </div>
        `;
        shopContainer.appendChild(card);
    });
    
    renderDots();
}

function renderDots() {
    dotsContainer.innerHTML = '';
    const totalDots = courses.length - visibleCardsCount + 1;
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentIndex = i;
            renderCourses();
        });
        dotsContainer.appendChild(dot);
    }
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < courses.length - visibleCardsCount) {
        currentIndex++;
        renderCourses();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderCourses();
    }
});

renderCourses();

const servicesMockData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    enrolledStudentsCount: 45,
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    ],
    startDate: "21 December 2024",
    title: "Islamic Fund Management",
    description: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
    price: 250,
    originalPrice: 300,
    currency: "$"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    enrolledStudentsCount: 38,
    studentAvatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    ],
    startDate: "15 January 2025",
    title: "Sukuk & Fixed Income",
    description: "Gain in-depth knowledge of Shariah-compliant bonds, structured debt instruments, and capital preservation strategies for ethical portfolios.",
    price: 280,
    originalPrice: 350,
    currency: "$"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
    enrolledStudentsCount: 62,
    studentAvatars: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    ],
    startDate: "28 January 2025",
    title: "Halal Equity Screening",
    description: "Learn financial ratio analysis and Shariah screening criteria to filter global stock markets and build clean, compliant stock portfolios.",
    price: 190,
    originalPrice: 240,
    currency: "$"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    enrolledStudentsCount: 29,
    studentAvatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
    ],
    startDate: "5 February 2025",
    title: "Takaful & Risk Sharing",
    description: "Explore the operational models of Islamic cooperative insurance, risk management, and regulatory compliance standards.",
    price: 220,
    originalPrice: 260,
    currency: "$"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    enrolledStudentsCount: 54,
    studentAvatars: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    ],
    startDate: "18 February 2025",
    title: "Islamic Wealth & Estate Planning",
    description: "Master Islamic inheritance principles (Mirath), wills (Wasiyyah), and trust structures for sustainable generational wealth transfer.",
    price: 310,
    originalPrice: 400,
    currency: "$"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    enrolledStudentsCount: 70,
    studentAvatars: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80"
    ],
    startDate: "1 March 2025",
    title: "Corporate Zakat Calculation & Audit",
    description: "Practical guide to calculating corporate and personal Zakat on modern financial assets, trade inventory, and investment real estate.",
    price: 175,
    originalPrice: 210,
    currency: "$"
  }
];

const gridContainer = document.getElementById('servicesGrid');

servicesMockData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';

    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${service.image}" alt="${service.title}" class="card-img">
            <div class="students-badge">
                <div class="avatars">
                    <img src="${service.studentAvatars[0]}" alt="User">
                    <img src="${service.studentAvatars[1]}" alt="User">
                </div>
                <span>+${service.enrolledStudentsCount} students</span>
            </div>
        </div>
        <div class="card-content">
            <div>
                <p class="start-date">Start date : ${service.startDate}</p>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
            <div class="card-footer">
                <div class="price-wrapper">
                    <span class="current-price">${service.currency} ${service.price}</span>
                    <span class="original-price">${service.currency} ${service.originalPrice}</span>
                </div>
                <a href="#" class="enroll-btn">Enroll Now</a>
            </div>
        </div>
    `;

    gridContainer.appendChild(card);
});

// JSON -  javascript object notation - 

// let data = {
//     ism:"Azizbek",
//     age: 12
// }

// localStorage.setItem("malumot", JSON.stringify(data) )

// let dataq = JSON.parse(localStorage.getItem("malumot"))
// console.log( dataq);

// const elLogOut = document.querySelector(".signin-btn")

// elLogOut.addEventListener("click", ()=>{
//     localStorage.removeItem("malumot")
// })
