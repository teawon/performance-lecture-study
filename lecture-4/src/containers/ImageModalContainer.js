import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  const { modalVisible, bgColor, src, alt } = useSelector(
    state => ({
      modalVisible: state.imageModal.modalVisible,
      bgColor: state.imageModal.bgColor,
      src: state.imageModal.src,
      alt: state.imageModal.alt,
    }),
    shallowEqual
  );

  //함수 or 직접 비교함수를 사용해 객체를 얕게 비교하고 내부의 값을 확인한다.
  /**
   * 객체를 반환하면 항상 새로운 객체 -> 참조값 변경 -> 변경인지 -> 리렌더링 문제가 발생한다!!
   * shallowEqual 사용하기 : 
   * useSelctor를 여러 번 사용해서 각각의 변수값만 가져오기 
   * const modalVisible = useSelector(state => state.imageModal.modalVisible);
      const bgColor = useSelector(state => state.imageModal.bgColor);
   */

  return <ImageModal modalVisible={modalVisible} bgColor={bgColor} src={src} alt={alt} />;
}

export default ImageModalContainer;
