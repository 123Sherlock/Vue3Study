import request from '@/util/requst.js'

// export导出函数供外部使用
export function articleGetAllService() {
    request.get('/article/getAll');
}

// 使用外部传入的参数并传递到服务器
export function articleSearchService(conditions) {
    request.get('/article/search', { params: conditions })
}
