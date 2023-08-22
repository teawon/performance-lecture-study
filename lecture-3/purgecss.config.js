module.exports = {
  defaultExtractor: (content) => content.match(/[\w\:\-]+/g) || [],
};

// 콜론 문자를 하나의 키워드로 인식하기 위한 정규식
