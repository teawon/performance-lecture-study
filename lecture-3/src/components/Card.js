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
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("is intersecting", entry.target.dataset.src);
          entry.target.src = entry.target.dataset.src;
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
      <img
        data-src={props.image}
        ref={imgRef}
        //    loading="lazy"
      />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
