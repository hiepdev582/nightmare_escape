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
      <AppSplashScreen v-if="isShowSplash" />
      <NuxtLayout v-else>
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </a-extract-style>
</template>
