<script setup lang="ts">
const layout = useLayout()

const menuItems = [
  { title: 'Привіз', link: '/', icon: 'lucide:align-start-vertical' },
  { title: 'Групи', link: '/groups', icon: 'lucide:group' },
  { title: 'Продукти', link: '/products', icon: 'lucide:shopping-basket' },
  { title: 'Користувачі', link: '/users', icon: 'lucide:user' },
  { title: 'Налаштування', link: '/settings', icon: 'lucide:settings' },
]
</script>

<template>
  <aside
    class="self-stretch bg-base-100 rounded-xs p-4 transition-all duration-300"
    :class="{ 'w-56': layout.sidebarVisibe, 'w-0': !layout.sidebarVisibe, '-translate-x-96': !layout.sidebarVisibe, 'overflow-hidden': !layout.sidebarVisibe }"
  >
    <nav>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index + item.title">
          <NuxtLink :to="item.link" class="group p-2 w-full flex items-center">
            <Icon :name="item.icon" class="h-4 w-4 mr-2" />
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.router-link-active {
  color: var(--color-accent);
}
</style>
