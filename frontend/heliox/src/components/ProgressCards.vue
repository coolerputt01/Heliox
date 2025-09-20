<script setup>
import userProfile from "../assets/userProfile.png";
import streak from "../assets/fire-streak.gif";
import timer from "../assets/timer.gif";

const cardInfos = [
    {
       label: 'Personal Progress', caption: 'Hey Coolerputt 👋', focusDays: '30-Day Focus Detox',
       streakDays: '10-day streak', daysLeft: '3 days left', progressPercent: '70%',
    }, 
    {
       label: 'Community Progress', caption: 'Code Clan', focusDays: '30-Day Focus Detox', 
       streakDays: '7-day streak', daysLeft: '6 days left', progressPercent: '30%',
    }
];
</script>

<template>
  <section aria-label="Daily Progress">
    <section :aria-label="cardInfo.label" v-for="cardInfo in cardInfos" :key="cardInfo">
      <!-- Dashboard Main Card -->
      <div class="heliox-card">
        <h2>{{ cardInfo.caption }}</h2>
        <p class="challenge-label">Current Challenge:</p>
        <h3>{{ cardInfo.focusDays }}</h3>

        <div class="streak-row">
          <span>
            <img :src="streak" alt="Fire Streak" width="35" height="35" />
            <strong>{{ cardInfo.streakDays }}</strong>
          </span>
          <span>
            <img :src="timer" alt="Challenge Timer" width="35" height="35" />
            {{ cardInfo.daysLeft }}
          </span>
        </div>

        <div class="progress-bar">
          <div class="progress" :style="{width: cardInfo.progressPercent}"></div>
        </div>

        <button class="log-button">Quick Log</button>
      </div>
    </section>
  </section>
</template>



