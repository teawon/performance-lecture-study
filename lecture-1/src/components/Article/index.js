import React from "react";

import "./index.css";

function zeroPad(value, len) {
  const str = "0000000000" + value.toString();
  return str.substring(str.length - len);
}

/* 파라미터 참고: https://unsplash.com/documentation#supported-parameters */
function getParametersForUnsplash({ width, height, quality, format }) {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
}

/*
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * (Markdown으로 된 문자열의 특수문자를 제거하기 위함)
 * */

// 정규식 엔진의 경우 효과적인 알고리즘을 사용하므로 입력크기가 커져도 성능이 더 빠름 (반복문 -> 정규식으로 코드 수정)
function removeSpecialCharacter(str) {
  let _str = str.substring(0, 300);
  _str = _str.replace(/[#_*~&;![\]`>\n=\->]/g, "");
  return _str;
}

function Article(props) {
  const createdTime = new Date(props.createdTime);
  return (
    <div className={"Article"}>
      <div className={"Article__summary"}>
        <div className={"Article__summary__title"}>{props.title}</div>
        <div className={"Article__summary__desc"}>
          {removeSpecialCharacter(props.content)}
        </div>
        <div className={"Article__summary__etc"}>
          {createdTime.getFullYear() +
            "." +
            zeroPad(createdTime.getMonth() + 1, 2) +
            "." +
            zeroPad(createdTime.getDate(), 2)}
        </div>
      </div>
      <div className={"Article__thumbnail"}>
        <img
          src={
            props.image +
            getParametersForUnsplash({
              // CDN을 사용해서 적절한 크기의 이미지를 받아온다. 120의 2배크기인 240px로 크기 지정(적절치)
              width: 240,
              height: 240,
              quality: 80,
              format: "jpg",
            })
          }
          alt="thumbnail"
        />
      </div>
    </div>
  );
}

export default Article;
