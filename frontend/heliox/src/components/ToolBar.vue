<script setup>
import { ref } from "vue";

// Reactive array of nav links
const navLinks = ref([
  { name: "Home", path: "/dashboard", icon: "fa-solid fa-house" },
  { name: "Challenges", path: "/challenges", icon: "fa-solid fa-trophy" },
  { name: "Logs", path: "/logs", icon: "fa-solid fa-clipboard-list" },
  { name: "Communities", path: "/communities", icon: "fa-solid fa-users" },
  { name: "Profile", path: "/profile", icon: "fa-solid fa-user" },
]);

// current path 
const currentPath = ref("/challenges");

</script>



<template>

  <nav>
    <!-- link for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" 
    integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!--  -->
    <a
      v-for="(link, index) in navLinks"
      :key="index"
      :href="link.path"
      :class="['nav-item', currentPath === link.path ? 'active' : '']"
    >
      <i :class="link.icon"></i>
      <span>{{ link.name }}</span>
    </a>
    <!--  -->
  </nav>

</template>



<style scope>
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  padding: 0.4rem 0;
  z-index: 100;
}
.nav-item {
  flex: 1;
  text-align: center;
  color: #6b7280;
  font-size: 0.75rem;
  transition: color 0.3s ease;
  padding: 0.4rem 0;
}
.nav-item.active {
  color: #2563eb;
}
.nav-item span {
  display: block;
  margin-top: 0.15rem;
}
.nav-item i {
  font-size: 1.3rem;
  transition: transform 0.25s ease;
}
.nav-item.active i {
  transform: scale(1.2);
}
.nav-item:hover {
  color: #2563eb;
}
@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
</style>



