<script setup>
import mailSend from "../assets/mail-sent.gif";
import Navbar from "../components/NavBar.vue";
import "../styles/verify.css";
import BaseLayout from "../layout/BaseLayout.vue";
</script>


<template>
  <BaseLayout title="Verify Heliox Account" ShowToolBar="hide">
    <header><Navbar /></header>
    <main aria-label="Main Verification">
      <section>
        <img
          :src="mailSend"
          alt="Mail Sent"
          width="480"
          height="480"
          class="verify-img"
        />
        <h2>Check Your Inbox</h2>
        <p>
          We've sent a verification link to your email address. Click the link
          to activate your Heliox account.
        </p>
        <button class="button">Already Verified</button>
      </section>
    </main>
  </BaseLayout>
</template>


<style scoped>
body {
  margin: 0;
  background-color: #f9f9f9;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  min-height: 100vh;
  overflow: hidden;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  gap: 5em;
  border-radius: 16px;
  text-align: center;
  max-width: 100vw;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: grey;
  margin-bottom: 2rem;
  padding: 0 1rem;
  font-size: 0.8em;
}
</style>