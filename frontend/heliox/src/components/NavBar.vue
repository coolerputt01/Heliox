<script setup>
  import HelioxLogo from '../assets/Heliox-Logo.png'
</script>


<template>
  
    <nav>
      <img
        :src="HelioxLogo"
        alt="Heliox Logo"
        class="logo"
        width="48"
        height="48"
      />
    </nav>
  
</template>


<style scope>
nav {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
  background: transparent;
}
nav > img {
  width: 3em;
  height: 3em;
  mix-blend-mode: multiply;
}
</style>