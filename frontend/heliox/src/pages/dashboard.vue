<script setup>
import "../styles/dashboard.css";
import BaseLayout from "../layout/BaseLayout.vue";
import userProfile from "../assets/userProfile.png";
import ProgressCards from "../components/ProgressCards.vue";

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

      <progress-cards />
      
    </main>
  </BaseLayout>
</template>


