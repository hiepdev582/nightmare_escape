<script setup lang="ts">
const loadingHints = [
  "Shuffling the Labyrinth...",
  "Watching out for Nightmares...",
  "Unlocking the Dream Doors...",
  "Preparing the Key Cards...",
  "Dreading the Limbo...",
];

const currentHintIndex = ref(0);
let hintInterval: any;

onMounted(() => {
  hintInterval = setInterval(() => {
    currentHintIndex.value = (currentHintIndex.value + 1) % loadingHints.length;
  }, 1000);
});

onUnmounted(() => {
  if (hintInterval) clearInterval(hintInterval);
});
</script>

<template>
  <section
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-radial from-[#1d0a2f] via-[#0c0314] to-[#050109] overflow-hidden select-none"
  >
    <!-- Runic backdrop glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,12,168,0.15)_0%,transparent_60%)] pointer-events-none"
    ></div>

    <header class="text-center mb-10 z-10">
      <h1
        class="text-4xl md:text-5xl font-serif font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] uppercase"
      >
        Nightmare Escape
      </h1>
      <p
        class="text-xs md:text-sm tracking-[0.4em] uppercase text-purple-300/60 mt-3 font-semibold"
      >
        A Solo Board Game
      </p>
    </header>

    <!-- Glowing Runic Magic Circle / Portal (Door Theme) -->
    <section
      class="relative w-36 h-36 flex items-center justify-center z-10 mb-8"
    >
      <!-- Outer Runic Ring (Rotating) -->
      <svg
        class="absolute w-full h-full animate-[spin_10s_linear_infinite] opacity-60 filter drop-shadow-[0_0_8px_rgba(193,71,233,0.4)]"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="#c147e9"
          stroke-width="1"
          fill="none"
          stroke-dasharray="8 6 4 6 12 4"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#810ca8"
          stroke-width="1.5"
          fill="none"
          stroke-dasharray="40 10"
        />
      </svg>

      <!-- Inner Rotating ring (Reverse Direction) -->
      <svg
        class="absolute w-28 h-28 animate-[spin_6s_linear_infinite_reverse] opacity-80 filter drop-shadow-[0_0_6px_rgba(129,12,168,0.5)]"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#c147e9"
          stroke-width="1"
          fill="none"
          stroke-dasharray="5 15 10 5"
        />
      </svg>

      <!-- Center Dream Door / Key Icon -->
      <div
        class="relative z-20 w-16 h-16 rounded-full bg-[#0c0314] border border-amber-300/40 flex items-center justify-center shadow-[inset_0_0_15px_rgba(245,158,11,0.2),0_0_20px_rgba(129,12,168,0.6)]"
      >
        <!-- SVG of a Keyhole / Key -->
        <svg
          class="w-8 h-8 text-amber-300 animate-pulse"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <!-- Door outline -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m8.25 0v11.25A2.25 2.25 0 0113.5 22.5h-3a2.25 2.25 0 01-2.25-2.25V9m8.25 0H7.5"
          />
          <!-- Keyhole -->
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
          <path d="M12 14.5v3" stroke-linecap="round" />
        </svg>
      </div>
    </section>

    <!-- Custom Loading Hints & Progress Indicator -->
    <footer class="w-64 flex flex-col items-center z-10">
      <!-- Pulsing Hint -->
      <p
        class="text-xs text-amber-200/80 font-medium tracking-wider h-5 transition-all duration-300 text-center uppercase"
      >
        {{ loadingHints[currentHintIndex] }}
      </p>

      <!-- Thin glowing progress bar wrapper -->
      <div
        class="w-full h-1 bg-purple-950/80 rounded-full mt-4 overflow-hidden border border-purple-900/30"
      >
        <!-- Indeterminate progress bar sweep -->
        <div
          class="h-full bg-gradient-to-r from-purple-600 via-amber-400 to-purple-600 w-1/2 rounded-full progress-bar-sweep"
        ></div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.progress-bar-sweep {
  animation: progress 1.8s ease-in-out infinite;
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
