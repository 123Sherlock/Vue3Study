<!-- 组合式API必须声明setup -->
<script setup>
import { ref, onMounted } from 'vue';
// 声明响应式数据ref，可以通过.value访问到数据
const count = ref(0);

function increment() {
    count.value++;
}

// 钩子函数
onMounted(() => {
    console.log('Vue挂载完毕');
});
</script>

<template>
    <button @click="increment">count: {{ count }}</button>
</template>

<style scoped>
</style>
