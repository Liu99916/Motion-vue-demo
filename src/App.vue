<!-- App.vue -->
<template>
  <div class="relative min-h-screen">
    <!-- 1. 背景层：由 App.vue 直接管理，它监听路由变化 -->
    <!-- 使用 route.path (或 route.meta.bg) 作为 key 来触发过渡 -->
    <transition name="bg-fade">
      <div :key="route.path" class="absolute inset-0 z-0" :class="route.meta.bg"></div>
    </transition>

    <!-- 2. 内容层：完全交给 router-view 处理 -->
    <router-view v-slot="{ Component, route }">
      <transition name="content-fade" mode="out-in">
        <div :key="route.path" class="relative z-10">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

// App.vue 需要知道当前路由是什么，以便正确渲染背景
const route = useRoute();
</script>

<style>
/* 样式保持不变 */
.bg-fade-enter-active,
.bg-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0;
}

.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.content-fade-enter-from,
.content-fade-leave-to {
  opacity: 0;
}
</style>
