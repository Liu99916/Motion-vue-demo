<template>
  <!-- 将布局样式移到此处 -->
  <div class="min-h-screen w-full flex items-center justify-center">
    <div>
      <h1 class="text-4xl font-bold mb-4 text-white">Home Page</h1>
      <router-link to="/solutions" class="px-4 py-2 bg-blue-500 text-white rounded">
        Go to Solutions
      </router-link>
      <router-link to="/login" class="px-4 py-2 bg-blue-500 text-white rounded">
        Go to login
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
