<script setup>
// 从js文件中导入函数，@表示src目录
import { articleGetAllService, articleSearchService } from '@/api/article.js';
import { ref } from 'vue';

const articleList = ref([]);

// 使用async和await等待服务器返回结果
const getAllArticle = async function () {
    let data = await articleGetAllService();
    articleList.value = data;
}
getAllArticle();

const searchConditions = ref({
    title: '',
    state: ''
});

const search = async function () {
    // ...表示解构，相当于?title=&state=
    let data = await articleSearchService({ ...searchConditions.value });
    articleList.value = data;
}
</script>

<template>
    <div id="app">
        分类：<input type="text" v-model="searchConditions.title">
        状态: <input type="text" v-model="searchConditions.state">

        <button @click="search">搜索</button>

        <br>
        <br>

        <table border="1 solid" cellspacing="0">
            <tr v-for="article in articleList">
                <td>{{ article.title }}</td>
                <td>{{ article.time }}</td>
                <td>{{ article.state }}</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
        </table>
    </div>
</template>
