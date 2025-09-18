<script setup>
import { defineProps, watchEffect } from "vue";
import ToolBar from "../components/ToolBar.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Heliox",
  },
});

watchEffect(() => {
  if (props.title) {
    document.title = props.title;
  }
});
</script>


<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{{ props.title }}</title>

      <!-- .. -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <slot name="head" />
    </head>
    <body style="margin: 0; font-family: 'Urbanist', sans-serif">
      <slot />
      <ToolBar />
    </body>
  </html>
</template>
