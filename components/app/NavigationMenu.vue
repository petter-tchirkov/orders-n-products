<script setup lang="ts">
const layout = useLayout()

const menuItems = [
  { title: 'Поставки', link: '/', icon: 'lucide:align-start-vertical' },
  { title: 'Групи', link: '/groups', icon: 'lucide:group' },
  { title: 'Продукти', link: '/products', icon: 'lucide:shopping-basket' },
  { title: 'Користувачі', link: '/users', icon: 'lucide:user' },
  { title: 'Налаштування', link: '/settings', icon: 'lucide:settings' },
]
</script>

<template>
  <Transition name="slide-fade">
    <aside
      v-if="layout.sidebarVisibe"
      class="self-stretch bg-base-100 rounded-xs p-4 transition-all duration-300"
    >
      <UserCount />
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
  </Transition>
</template>

<style scoped>
.router-link-active {
  color: var(--color-accent);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
