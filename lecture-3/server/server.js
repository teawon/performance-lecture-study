const express = require("express");
const app = express();
const port = 5001;
const path = require("path");

const header = {
  setHeaders: (res, path) => {
    res.setHeader("Cache-Control", 'max-age="10'); // 헤더에 캐시 정보를 사용한다. 10초동안 캐시를 적용하겠다는 의미
  },
};

app.use(express.static(path.join(__dirname, "../build"), header));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
