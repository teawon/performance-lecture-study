const express = require("express");
const app = express();
const port = 5001;
const path = require("path");

const header = {
  setHeaders: (res, path) => {
    if (path.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache");
      // no-cache를 사용하면 브라우저는 항상 원래 서버에 해당 리소스의 유효성을 확인하고, 변경되었을 경우 최진 버전을 제공해주어야한다
    } else if (
      path.endsWith(".js") ||
      path.endsWith(".css") ||
      path.endsWith(".webp")
    ) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
      // 정적 자원들은 자주 변경되지 않을 가능성이 높기 때문에 긴 시간을 설정한다
    } else {
      res.setHeader("Cache-Control", "no-store");
      // no-store는 캐시에 어떠한 것도 저장되지 않도록 하는데 이는 매번 해당 자원을 서버에서 새로 가져와야 함을 의미한다.
    }
  },
};

app.use(express.static(path.join(__dirname, "../build"), header));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
