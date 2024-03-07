<script setup lang="ts">
defineProps<{
  treeData: TreeNode<IMenuDetail>[]
  indentLevel: number
}>()
</script>

<template>
  <ul :class="indentLevel > 0 ? 'sidebar__child' : 'sidebar__menu'">
    <li v-for="menu in treeData" :key="`sidebar-main-menu-${menu.id}`">
      <div>
        <!-- <Icon v-if="indentLevel === 0" :name="getIcon(menu.id)" width="20" height="20" :alt="menu.menuName" /> -->
        <span>{{ menu.text }}</span>
      </div>
      <tree-section v-if="menu.children.length" :tree-data="menu.children" :indent-level="indentLevel + 1" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
</style>
