<script setup lang="ts">
import type { Product } from '~/types/order'

const props = defineProps<{ product: Product }>()
const modal = useTemplateRef('modal')
const isModalShown = inject<Ref<boolean>>('isModalShown')

function closeModal() {
  isModalShown!.value = false
}

onClickOutside(modal, () => closeModal())
</script>

<template>
  <Transition>
    <div v-if="isModalShown" class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10">
      <div ref="modal" class="relative bg-base-100 p-2 rounded-xs">
        <p class="mb-10">
          Ви точно хочете видалити {{ props.product.title }}
        </p>
        <div class="flex gap-3 justify-end">
          <button class="btn btn-neutral">
            Ні
          </button>
          <button class="btn btn-success">
            Так
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
