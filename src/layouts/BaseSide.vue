<template>
  <ElMenu
    class="w-170px"
    default-active="2"
    :collapse="isCollapse"
    backgroundColor="#515a6e"
    textColor="#bfcbd9"
    @open="handleOpen"
    @close="handleClose"
  >
    <ElSubMenu index="1">
      <template #title>
        <span>Navigator One</span>
      </template>
      <ElMenuItemGroup title="Group One">
        <ElMenuItem index="1-1">item one</ElMenuItem>
        <ElMenuItem index="1-2">item two</ElMenuItem>
      </ElMenuItemGroup>
      <ElMenuItemGroup title="Group Two">
        <ElMenuItem index="1-3">item three</ElMenuItem>
      </ElMenuItemGroup>
      <ElSubMenu index="1-4">
        <template #title><span>item four</span></template>
        <ElMenuItem index="1-4-1">item one</ElMenuItem>
      </ElSubMenu>
    </ElSubMenu>
    <ElMenuItem index="2">
      <template #title>Navigator Two</template>
    </ElMenuItem>
    <ElMenuItem index="3" disabled>
      <template #title>Navigator Three</template>
    </ElMenuItem>
    <ElMenuItem index="4">
      <template #title>Navigator Four</template>
    </ElMenuItem>
  </ElMenu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup } from 'element-plus'
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style></style>
