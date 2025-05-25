<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div class="flex justify-center items-center">
        <h1 class="text-5xl text-warning flex items-center gap-3">
            <Icon name="lucide:construction" />
            Вибачте за пил
        </h1>
        <p class="text-info">Сторінка {{ route.path }} ще не готова</p>
    </div>
</template>
