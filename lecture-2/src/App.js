import React, { useState, Suspense, lazy, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import InfoTable from "./components/InfoTable";
import SurveyChart from "./components/SurveyChart";
import Footer from "./components/Footer";
// import ImageModal from './components/ImageModal'
const LazyImageModal = lazy(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    import("./components/ImageModal").catch();
    // Hover보다 더 빠르게, 모든 컴포넌트가 마운트 완료되면 추가로 로드
  }, []);

  // const handleMouseEnter = () => {
  //   import("./components/ImageModal").catch();
  //   // 네트워크 요청이 이미 완료되었다면, 같은 모듈을 다시 요청할 때 네트워크 요청을 다시 수행하지 않는다.
  //   // 따라서 여기서 이미 모듈을 가져오면 ,브라우저나 JavaScript 엔진은 이전에 불러온 모듈의 캐시된 본을 사용한다
  // };

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        // onMouseEnter={handleMouseEnter} //hover시 미리 ImageModal 컴포넌트를 사전에 로딩한다.
        onClick={() => {
          setShowModal(true);
        }}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
