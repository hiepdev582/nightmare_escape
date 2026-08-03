<script setup lang="ts"></script>

<template>
  <a-layout-content
    :style="{
      marginTop: '0px',
      marginBottom: '0px',
      marginInline: '0px',
      paddingBlock: '14px',
      paddingInline: '20px',
      backgroundColor: '#fff',
      overflow: 'hidden',
      height: 'calc(100vh - 39.5px)',
    }"
  >
    <slot />
  </a-layout-content>
</template>
