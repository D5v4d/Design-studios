const completedProjects = [
  {
    city: "Rostov-on-Don \n LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    img: "img/png/Rostov-on-Don.png",
    title: "ROSTOV-ON-DON, ADMIRAL"
  },
  {
    city: "Sochi \n Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    img: "img/png/Sochi-Thieves.png",
    title: "SOCHI THIEVES"
  },
  {
    city: "Rostov-on-Don \n Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    img: "img/png/Rostov-on_Don_Patriotic.png",
    title: "ROSTOV-ON-DON PATRIOTIC"
  }
]



function initSlider() {

  let currentIndex = 0

  const city = document.getElementById("city_text")
  const apartmentArea = document.getElementById("apartment_text")
  const repairTime = document.getElementById("repair_text")
  const imgCompletedProjects = document.querySelector(".main__img")
  const sliderDots = document.querySelector(".slider__dots");
  const sliderNav = document.querySelector(".main__img__name");

  const setEntity = () => {
    city.innerText = completedProjects[currentIndex].city
    apartmentArea.innerText = completedProjects[currentIndex].apartmentArea
    repairTime.innerText = completedProjects[currentIndex].repairTime
    imgCompletedProjects.style.backgroundImage = `url(${completedProjects[currentIndex].img})`

  }

  let slider = document.querySelector(".main__transition")

  function initArrows() {
    slider.querySelectorAll(".main__transition__arrows").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = currentIndex === 0 ? currentIndex = completedProjects.length - 1 : currentIndex -= 1;
          setEntity();
        } else {
          nextNumber = currentIndex === 2 ? currentIndex = 0 : currentIndex += 1;
          setEntity();
        }
        moveSlider(nextNumber);
      })
    }
    )
  }
  initArrows()

  function initDots() {
    completedProjects.forEach((completedProjects, currentIndex) => {
      let dot = `<div class="slider__dots-item n${currentIndex} ${currentIndex === 0 ? "active" : ""}" data-index="${currentIndex}"></div>`;
      let nav = `<span class="title n${currentIndex} ${currentIndex === 0 ? "active" : ""}" data-index="${currentIndex}">${completedProjects.title}</span>`;
      sliderDots.innerHTML += dot;
      sliderNav.innerHTML += nav;
    });

    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index)
      })
    })

    sliderNav.querySelectorAll(".title").forEach(nav => {
      nav.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      })
    })
  }
  initDots();

  function moveSlider(num) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderNav.querySelector(".active").classList.remove("active");
    sliderNav.querySelector(".n" + num).classList.add("active");
    currentIndex = +num;
    setEntity();
  }
}


document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});