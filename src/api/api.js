// package.json에 등록된 모듈을 가져옴 (node_modules 디렉토리의 모듈)
import axios from 'axios';

// config
// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'http://127.0.0.1:8000/api/',
}

// 2. api 함수들을 정리
// articles
function getBuckets() {
  return axios.get(`${config.baseUrl}bucketlist/list`);
}

function getBucket() {
  return axios.get(`${config.baseUrl}bucketlist/detail/:id/`);
}

function createPost() {
  return axios.post(`${config.baseUrl}bucketlist/create`);
}


// users



// function

// 3. 내보내기
export {
  getBuckets,
  getBucket,
  createPost
}