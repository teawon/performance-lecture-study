# 시작 명령어

`npm i`
`npm run server`
`npm start`
`npm install --save-dev cra-bundle-analyzer` // 번들 파일 분석을 위해 설치
`npx cra-bundle-analyzer` // 번들 파일 확인 명령어
`npm run serve`

# ⭐해당 공부 목차⭐

---

## 1장 블로그 서비스 최적화

- Light house
- 이미지 사이즈 최적화
  - CDN
  - 적절한 이미지 사용하기
- 병목 코드 최적화
  - Performance 패널을 활용한 병목 코드 분석
- 코드분할 & 지연로딩
- 텍스트 압축

[Light house]

- 기타 다룰게 있을까?

[이미지 사이즈 최적화]

- 적절한 이미지 크기란?
- 백엔드에서 이미지를 줄때 이 부분을 CDN으로 어떻게 처리할까
- 배경같은경우 화면 자체가 곧 크기인데 이럴때는 어떻게?

[ 코드분할 & 지연로딩 ]

- 코드 분할은 그럼 모든 페이지에 다 적용시키면 좋은걸까?
- 더 나아가서 라이브러리를 import해야하는 컴포넌트 요소마다 전부 처리하는게 좋은가?

[텍스트 압축]

- 빌드시 경량화 & 난독화와 같은 추가 최적화 작업은 구체적으로 어떤것?
- 텍스트 압축은 그럼 무조건 하는게 좋은가?

https://teawon.github.io/book/perfomence-1/
