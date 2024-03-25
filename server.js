const express = require('express');
const path = require('path');

const app = express();

// 파일 링크
app.use(express.static(path.join(__dirname, 'project')));

// 라우트 정의
//메인페이지 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'pages', 'main.html'));
});
//채팅페이지
app.get('/chat.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'pages', 'chat.html'));
});
// 서버 시작
app.listen(3000, () => {
  console.log(`Server is running`);
});
