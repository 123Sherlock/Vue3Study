<!-- *.vue是Vue项目中的组件文件，也称为单文件组件SFC（Single-File Componets），将一个组件的逻辑（JS）模板（HTML）和样式（CSS）封装在一个文件里（*.vue） -->

<!-- 控制数据及行为 -->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

// 导入Api.vue
import ApiVue from './Api.vue'
</script>

<!-- HTML模板部分 -->
<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <!-- 输出Api.vue的内容 -->
  <ApiVue />
</template>

<!-- CSS样式部分 -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
