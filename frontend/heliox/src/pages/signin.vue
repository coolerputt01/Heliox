<script setup>
import "../styles/signup.css";
import Navbar from "../components/NavBar.vue";
import BaseLayout from "../layout/BaseLayout.vue";
</script>

<template>
  <BaseLayout title="Heliox - Signin" ShowToolBar="hide">
    <header><Navbar /></header>
    <!-- From Uiverse.io by Yaya12085 -->
    <div class="form-container">
      <form class="form">
        <p class="title">Sign In</p>
        <p class="message">Welcome back to Heliox</p>
        <label>
          <input required="" placeholder="" type="text" class="input" />
          <span>Username</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Password</span>
        </label>
        <button class="submit">Submit</button>
        <p class="signin">
          Don't have an account ? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  </BaseLayout>
</template>
