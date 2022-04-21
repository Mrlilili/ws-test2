<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import { ElContainer, ElMain } from 'element-plus'
// import BaseHeader from './layouts/BaseHeader.vue'
// import BaseSide from './layouts/BaseSide.vue'
</script>

<template>
  <!--  <BaseHeader />-->
  <!--  <ElContainer>-->
  <!--    <BaseSide />-->
  <!--    <ElMain>-->
  <!--    </ElMain>-->
  <!--  </ElContainer>-->
  <RouterView />
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}
#app {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
