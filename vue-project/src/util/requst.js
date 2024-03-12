// 先使用npm install axios把axios安装到本地
import axios from 'axios';
// 定义统一的URL前缀
const baseURL = 'http://localhost:8080';
const instance = axios.create({ baseURL })

// 添加响应拦截器，对所有请求的响应进行统一处理，拦截器是异步的
instance.interceptors.response.use(
    // http响应状态码为2xx时触发函数
    result => {
        return result.data;
    },
    // http响应状态码为非2xx时触发函数
    err => {
        alert('服务异常');
        return Promise.reject(err); // 把异步的状态转化为失败的状态
    }
)

export default instance;
