// Announcement Slider Section
var swiper = new Swiper('#announcement-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '#announcement-swiper-button-next',
        prevEl: '#announcement-swiper-button-prev',
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 1 },
        480: { slidesPerView: 1 }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

// Programs slider section
var swiper = new Swiper('.programs-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    infinite: true,
})

// Event Slider Section
var swiper = new Swiper('#event-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    infinite: true,
});


// Research Slider Section
var swiper = new Swiper('#research-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        480: { slidesPerView: 1 }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    infinite: true,
});

// Sau Video slider section
var swiper = new Swiper('#sau-video-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        480: { slidesPerView: 1 }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    infinite: true,
});


// faculty Members slider section
var swiper = new Swiper('#faculty-member-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '#announcement-swiper-button-next',
        prevEl: '#announcement-swiper-button-prev',
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 4 },
        480: { slidesPerView: 1 }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});


// Testimonial Section

let currentTestimonialIndex = 0;
let testimonials = document.querySelectorAll(".testimonial-card");
let testimonialContent = document.getElementById("testimonial-content");
let autoSlideInterval;
let restartTimeout;

function showTestimonial(element) {
    let img = element.getAttribute('data-image');
    let title = element.getAttribute("data-title");
    let content = element.getAttribute("data-content");
    let name = element.getAttribute("data-name");
    let course = element.getAttribute("data-course");

    // Remove animation before changing content
    testimonialContent.classList.remove("testimonial-show");

    // Wait before changing the content
    setTimeout(() => {
        testimonialContent.innerHTML = `
            <div class="testimonial-info">
                <img src="${img}" alt="">
                <h3 class="text-5xl">${name}</h3>
                <p class="text-3xl">${course}</p>
            </div>
            <div class="testimonial-details">
                <h3 class="text-5xl">${title}</h3>
                <p class="text-3xl">${content}</p>
            </div>
        `;
        testimonialContent.classList.add("testimonial-show");
    }, 300);

    // Reset Auto-Slide Timer
    clearInterval(autoSlideInterval);
    clearTimeout(restartTimeout);
    restartTimeout = setTimeout(startAutoSlide, 10000); // Restart after 10s
}

// Function to automatically switch testimonials
function autoSlideTestimonials() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonials[currentTestimonialIndex]);
}

// Start the auto-slide feature
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlideTestimonials, 5000); // Change every 5s
}

// Initialize auto-slide when page loads
startAutoSlide();