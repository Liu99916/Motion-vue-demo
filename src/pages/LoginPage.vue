<template>
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0">
      <!-- {/* Floating orb 1 */} -->
      <div
        className="absolute top-1/4 left-1/12 lg:left-1/4 w-64 h-64 bg-amber-600 rounded-full blur-3xl animate-pulse opacity-60"
      ></div>
      <div
        className="absolute top-1/4 left-1/12 lg:left-1/4 w-64 h-64 bg-amber-600 rounded-full blur-2xl animate-bounce opacity-40"
        style="animation-duration: '3s'"
      ></div>

      <!-- {/* Floating orb 3 */} -->
      <div
        className="absolute bottom-1/6 right-1/12 lg:right-1/4 w-64 h-64 bg-blue-600 rounded-full blur-2xl animate-pulse opacity-80"
        style="animation-delay: '2s'"
      ></div>
      <div
        className="absolute bottom-1/6 right-1/12 lg:right-1/4 w-64 h-64 bg-blue-600 rounded-full blur-xl animate-bounce opacity-25"
        style="animation-duration: '4s'; animation-delay: '2s'"
      ></div>
    </div>

    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div
        className="w-full max-w-md mx-auto text-center space-y-8 backdrop-blur-md bg-black/20 border border-white/30 rounded-3xl p-8 shadow-2xl"
      >
        <!-- {/* Main Heading */} -->
        <div className="space-y-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance drop-shadow-lg"
          >
            Your Crypto Journey
          </h1>

          <!-- {/* Subtitle */} -->
          <p
            className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty px-4 drop-shadow-md"
          >
            Unlock the world of crypto with ease
            <br />
            and confidence
          </p>
        </div>

        <!-- {/* Get Started Button */} -->
        <div className="space-y-6">
          <button
            @click="navigate('/')"
            className="cursor-pointer w-full max-w-sm mx-auto bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-full py-4 px-8 text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Get Started
          </button>

          <!-- {/* Login Link */} -->
          <p className="text-white/80 text-sm md:text-base drop-shadow-sm">
            all ready have an account ?
            <button
              @click="navigate('/solutions')"
              className="cursor-pointer text-white hover:text-white/80 underline underline-offset-2 transition-colors"
            >
              login
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const navigate = (path: string) => {
  router.push(path);
};
</script>

<style scoped></style>
