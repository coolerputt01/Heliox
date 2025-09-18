<script setup>
import "../styles/dashboard.css";
import BaseLayout from "../layout/BaseLayout.vue";
import userProfile from "../assets/userProfile.png";
import streak from "../assets/fire-streak.gif";
import timer from "../assets/timer.gif";
</script>



<template>
  <BaseLayout title="Heliox - Dashboard">
    <main>
      <section aria-label="Header and Dashboard Card Section" class="head">
        <header>
          <nav>
            <div class="header-profile">
              <img
                :src="userProfile"
                alt="User Profile"
                class="user-image"
                width="45"
                height="45"
              />
            </div>
          </nav>
        </header>
        <section>
          <h1 class="header-head">Heliox</h1>
          <p class="header-desc">
            Keep track of your progress with <b>Heliox</b>
          </p>
        </section>
      </section>
      <section aria-label="Daily Progress">
        <section aria-label="Personal Progress">
          <!-- Dashboard Main Card -->
          <div class="heliox-card">
            <h2>Hey Coolerputt 👋</h2>
            <p class="challenge-label">Current Challenge:</p>
            <h3>30-Day Focus Detox</h3>

            <div class="streak-row">
              <span
                ><img :src="streak" alt="Fire Streak" width="35" height="35" />
                <strong>7-day streak</strong>
              </span>
              <span
                ><img
                  :src="timer"
                  alt="Challenge Timer"
                  width="35"
                  height="35"
                />
                3 days left</span
              >
            </div>

            <div class="progress-bar">
              <div class="progress" style="width: 23%"></div>
            </div>

            <button class="log-button">Quick Log</button>
          </div>
        </section>
        <section aria-label="Community Progress">
          <div class="heliox-card">
            <h2>Code Clan</h2>
            <p class="challenge-label">Current Challenge:</p>
            <h3>30-Day Focus Detox</h3>
            <div class="streak-row">
              <span
                ><img
                  :src="streak"
                  alt="Fire Streak"
                  width="35"
                  height="35"
                /><strong>7-day streak</strong></span
              >
              <span
                ><img
                  :src="timer"
                  alt="Challenge Timer"
                  width="35"
                  height="35"
                />
                3 days left</span
              >
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 70%"></div>
            </div>

            <button class="log-button">Quick Log</button>
          </div>
        </section>
      </section>
    </main>
  </BaseLayout>
</template>


