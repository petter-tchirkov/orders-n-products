<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

const modalDiv = useTemplateRef('modalDiv')
onClickOutside(modalDiv, () => emit('close'))
</script>

<template>
  <transition>
    <teleport to="#teleports">
      <div
        class="fixed top-0 left-0 w-screen h-screen z-10 flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
      >
        <div ref="modalDiv" class="min-w-96 bg-base-300 rounded-xs p-2">
          <h2 class="text-xl font-bold">
            <slot name="title" />
          </h2>
          <p>
            <slot name="body" />
          </p>
          <slot name="footer" />
        </div>
      </div>
    </teleport>
  </transition>
</template>
