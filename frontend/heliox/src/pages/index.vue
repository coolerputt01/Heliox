<script setup>
import { ref } from "vue";
import "../styles/index.css";
import Navbar from "../components/NavBar.vue";
import BaseLayout from "../layout/BaseLayout.vue";
import getStarted from "../assets/get-started.png";
import trackIllustration from "../assets/track-illustration.png";
import organise from "../assets/organize.png";
import letsgo from "../assets/letsgo.png";

const sectionInfos =[
  {
    img: getStarted, caption: 'Welcome to Heliox', alt: "Getting Started",
    des: "Looking for a better experience and approach with task management and task completions? Let's get you fired up!"
  },
  {
    img: trackIllustration, caption: 'Track your commitment daily', alt: "Track illustration",
    des: `If you have ever had issues keep track of your daily streak activities, Heliox is the one in all app you need!`
  },
  {
    img: organise, caption: "Organise your Streaks", alt: "Organise",
    des: " Heliox was built to provide the best streak organising experience to help you along your challenges"
  },
  {
    img: letsgo , caption: "Lets goooo!!", alt: "Lets Go",
    des: ""
  },  
];

let index = ref(0);
let buttonText = ref('Next');
let allDots = new Array(4).fill(false);
let currentDot = ref(allDots[index.value])
let sectionInfo = ref(sectionInfos[index.value]);

const nextSlide = () => {
  index.value = index.value >= 4 ?  4 : index.value +=1;
  sectionInfo.value = sectionInfos[index.value];

  if (sectionInfos.length -1 === index.value) {
    buttonText.value = 'Get Started' 
  }  else if (index.value === 4 && buttonText.value === "Get Started") {
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "/signup";
    }, 300);
  }
 
  // allDots.value = ref(new Array(4).fill(true));
  currentDot.value = ref(true);
  console.log(allDots.value + currentDot.value);
};

</script>


<template>
  <BaseLayout title="Heliox" ShowToolBar="hide">
    <header aria-label="Page Header">
      <Navbar />
    </header>
    <main aria-label="Page Sliders">
      <div class="slider-container" >
        <section :class="{'zoom-active': true }">
          <img :src="sectionInfo.img" class="slider-img" :alt="sectionInfo.alt" />
          <h2 class="slider-head fade-to-bottom">{{ sectionInfo.caption }}</h2>
          <p class="slider-desc fade-to-bottom">{{ sectionInfo.des }}</p>
        </section>
      </div>
      <div class="next">
        <div class="details">
          <div :class="['dot', {'current-frame': currentDot} ]" v-for="Dots in allDots" :key="Dots"></div>
          
        </div>
        <button class="next-btn" v-on:click="nextSlide"> {{ buttonText }} </button>
      </div>
    </main>
  </BaseLayout>
  
</template>










<!-- 
// const frames = [
//    "getStarted",
//    "trackIllustration",
//    "organise",
//    "letsgo",
// ];
// let currentFrame = ref(frames[index.value]);
// currentFrame.value = frames[index.value];

// const allSlides = document.querySelectorAll(".slider-container section");
// const sliderContainer = document.querySelector(".slider-container");
// const nextButton = document.querySelector(".next-btn");
// const dots = document.querySelectorAll(".dot");

// nextButton.classList.remove("clicked");
  // void nextButton.offsetWidth;
  // nextButton.classList.add("clicked");
  // if (currentFrame < 3) {
  //   currentFrame += 1;
  //   let offSet = -currentFrame * 100;
  //   sliderContainer.style.transform = `translateX(${offSet}vw)`;
  //   dots.forEach((dot) => {
  //     dot.classList.remove("current-frame");
  //   });
  //   dots[currentFrame].classList.add("current-frame");
  //   let activeSlide = allSlides[currentFrame];
  //   activeSlide.querySelectorAll(".fade-to-bottom").forEach((ele) => {
  //     ele.classList.remove("fade-to-bottom");
  //     void ele.offsetWidth;
  //     ele.classList.add("fade-to-bottom");
  //   });
  //   allSlides.forEach((slide) => slide.classList.remove("zoom-active"));

  //   allSlides[currentFrame].classList.add("zoom-active");
  //   if (currentFrame === 3) {
  //     nextButton.innerText = "Get Started";
  //     return;
  //   }
  // } else if (currentFrame === 3 && nextButton.innerText === "Get Started") {
  //   document.body.style.opacity = 0;
  //   setTimeout(() => {
  //     window.location.href = "/signup";
  //   }, 300);
  // }
 -->

        <!-- 
        <section class="slider2" v-for="sectionInfo in sectionInfos" :key="sectionInfo">
          <img
            :src=""
            class="slider-img"
            alt=""
          />
          <h2 class="slider-head fade-to-bottom">
            
          </h2>
          <p class="slider-desc fade-to-bottom">
            
          </p>
        </section>
        <section class="slider3">
          <img :src="" class="slider-img" alt="" />
          <h2 class="slider-head fade-to-bottom"></h2>
          <p class="slider-desc fade-to-bottom">
            Heliox was built to provide the best streak organising experience to
            help you along your challenges
          </p>
        </section>
        <section class="slider4">
          <img :src="" class="slider-img" alt="" />
          <h2 class="slider-head fade-to-bottom"></h2>
          <p class="slider-desc"></p>
        </section>

         <div class="dot "></div>
          <div class="dot"></div>
          <div class="dot"></div> 
          -->
