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
    desc: "Looking for a better experience and approach with task management and task completions? Let's get you fired up!"
  },
  {
    img: trackIllustration, caption: 'Track your commitment daily', alt: "Track illustration",
    desc: `If you have ever had issues keep track of your daily streak activities, Heliox is the one in all app you need!`
  },
  {
    img: organise, caption: "Organise your Streaks", alt: "Organise",
    desc: " Heliox was built to provide the best streak organising experience to help you along your challenges"
  },
  {
    img: letsgo , caption: "Lets goooo!!", alt: "Lets Go",
    desc: ""
  },  
];


let index = ref(0);
let isActive = ref(true);
let buttonText = ref('Next');
let allDots = ref([true, false, false, false]);
let sectionInfo = ref(sectionInfos[index.value]);

const nextSlide = () => {

  isActive.value = false;
  requestAnimationFrame(() => {
    isActive.value = true;
  })

  index.value = index.value >= 4 ?  4 : index.value +=1;
  sectionInfo.value = sectionInfos[index.value];
  
  allDots = ref(new Array(4).fill(false));
  allDots.value[index.value] = ref(true);

  if (sectionInfos.length -1 === index.value) {
    buttonText.value = 'Get Started' 
  }  else if (index.value === 4 && buttonText.value === "Get Started") {
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "/signup";
    }, 300);
  };

};
</script>


<template>
  <BaseLayout title="Heliox" ShowToolBar="hide">
    <header aria-label="Page Header">
      <Navbar />
    </header>
    <main aria-label="Page Sliders">
      <div class="slider-container" >
        <section :class="{'zoom-active': isActive }">
          <img :src="sectionInfo.img" class="slider-img" :alt="sectionInfo.alt" />
          <h2 :class="['slider-head', {'fade-to-bottom': isActive}]">{{ sectionInfo.caption }}</h2>
          <p :class="['slider-desc' , {'fade-to-bottom': isActive}]">{{ sectionInfo.desc }}</p>
        </section>
      </div>
      <div class="next">
        <div class="details">
          <div :class="['dot', {'current-frame': Dots} ]" v-for="Dots in allDots" :key="Dots"></div>
        </div>
        <button :class="['next-btn', {'clicked': isActive}]" v-on:click="nextSlide"> {{ buttonText }} </button>
      </div>
    </main>
  </BaseLayout>
</template>



