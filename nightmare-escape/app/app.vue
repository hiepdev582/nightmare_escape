<script setup lang="ts">
//#region Config
const themeConfig = {
  token: {
    colorPrimary: "#810ca8",
    colorPrimaryHover: "#950fc2",
    colorPrimaryActive: "#6e0c8f",
    colorTextBase: "#212121",
    borderRadius: 6,
  },
};
//#endregion

//#region Loading
const isShowSplash = ref(true);

onMounted(() => {
  setTimeout(() => {
    isShowSplash.value = false;
  }, 500);
});
//#endregion
</script>

<template>
  <a-extract-style>
    <a-config-provider :theme="themeConfig">
      <AppSplashScreen
        :class="[
          'transition-opacity duration-500 ease-in-out',
          isShowSplash
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ]"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </a-extract-style>
</template>
