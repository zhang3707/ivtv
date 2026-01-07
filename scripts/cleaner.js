// scripts/cleaner.js
const axios = require('axios');
const fs = require('fs');

const sources = [
  'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/cn.m3u',
  // 添加更多抓取地址...
];

async function checkUrl(url) {
  const start = Date.now();
  try {
    // 真实检测逻辑：发起 HEAD 请求并设置 3秒超时
    await axios.head(url, { timeout: 3000 });
    return Date.now() - start;
  } catch (e) {
    return null; // 失效
  }
}

async function run() {
  console.log('开始清洗...');
  let results = [];
  // 逻辑：抓取 -> 解析 -> 检测 -> 排序 -> 导出
  // ... 完整脚本逻辑 ...
  fs.writeFileSync('ipv4.m3u', '#EXTM3U\n...');
  console.log('保存成功');
}

run();
