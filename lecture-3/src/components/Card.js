import React, { useEffect, useRef } from "react";

function Card(props) {
  const imgRef = useRef(null);

  useEffect(() => {
    // 하나의 인스턴스만 생성하도록 useEffect를 사용
    const options = {
      // root: null,                                 // 뷰포트 요소 설정( null 이면 기본 브라우저)
      // threshhold: 0,                              // 0~1 사이의 값으로, 이미지 노출 비율을 의미한다. 1이면 전부 보여야 실행
      // rootMargin: "1000px 1000px 1000px 1000px",  // 이미지가 미리 로딩되도록 여유분을 준다
    };

    // 이때 이미지의 크기를 미리 지정하지않으면, threshold를 1로 하더라도, 이미지 높이가 0이라서 이미지 전체가 보이지 않아도 로딩된다.
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const previousSibling = target.previousSibling;
          // previousSibling 은 DOM에서 이전 형제 요소를 참조하는 속성
          // ref자체가 img태그를 가리키기 때문에 상위의 source에 접근하기 위해 사용한다
          target.src = target.dataset.src;
          previousSibling.srcset = previousSibling.dataset.srcset;
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(imgRef.current);

    return () => observer.disconnect(); // clean up 함수를 사용해 리소스 낭비를 줄인다
  }, []);

  return (
    <div className="Card text-center">
      {/* lazy옵션을 통해 직접 넣으면, 브라우저내에서 자체적으로 해당 이미지를 지연로딩시킨다. 단 어느정도 여백을 남기고 미리 받는듯 */}
      {/* <img
        data-src={props.image}
        ref={imgRef}
        //    loading="lazy"
      /> */}

      {/* 가장 상위의 WebP이미지를 우선으로 로드하고 이어서 아래로 아래로.. */}
      <picture>
        <source data-srcset={props.webp} type="image/webp" />
        <img data-src={props.image} ref={imgRef} />
      </picture>
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
