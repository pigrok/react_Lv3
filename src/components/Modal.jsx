import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const StModalForm = styled.div`
  display: flex;
  gap: 20px;

  padding: 20px;
`;

const StModalBtn1 = styled.button`
  background-color: #93def5;
  border: 1px solid #93def5;
  border-radius: 15px;

  width: 120px;
  height: 50px;
`;

const StModalBtn2 = styled.button`
  background-color: transparent;
  border: 4px solid #f59adb;
  border-radius: 15px;

  width: 200px;
  height: 60px;
`;

const StBtnForm = styled.div`
  display: flex;
  gap: 20px;

  justify-content: center;
`;

const StCloseBtn = styled.button`
  background-color: #93def5;
  border: 1px solid #93def5;
  border-radius: 5px;

  width: 50px;
  height: 30px;

  margin-top: 30px;
`;

function Modal() {
  // 모달의 표시여부를 저장하는 상태 변수
  //  초기 값은 false
  const [showModal, setShowModal] = useState(false);

  // openModal 함수는 모달을 열기 위해
  // setShowModal 함수를 호출하여 showModal값을 true로 변경
  const openModal = () => {
    setShowModal(true);
  };

  // closeModal 함수는 모달을 닫기 위해
  // showModal 함수를 호출 하여 showModal 값을 false로 변경
  const closeModal = () => {
    setShowModal(false);
  };

  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  return (
    <div>
      <h1>Modal</h1>
      <StModalForm>
        <div>
          {" "}
          {/* modal 버튼으로 클릭 시 openModal 함수가 호출되어 모달을 열음 */}
          <StModalBtn1 onClick={openModal}>open modal</StModalBtn1>
          {/* showModal 값이 true인 경우에만 렌더링되는 조건부 렌더링 */}
          {showModal && (
            <StModal>
              <StModalContent>
                <p>
                  닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                  않아요.
                </p>
                <StBtnForm>
                  {/* 닫기 버튼으로 클릭 시 closeModal이 호출되어 모달을 닫음 */}
                  <StCloseBtn onClick={closeModal}>닫기</StCloseBtn>
                  <StCloseBtn>확인</StCloseBtn>
                </StBtnForm>
              </StModalContent>
            </StModal>
          )}
        </div>
        <div>
          {" "}
          {/* 클릭 시 openModal2 함수가 호출되어 두 번째 모달을 열음 */}
          <StModalBtn2 onClick={openModal2}>open modal2</StModalBtn2>
          {/* showModal2 값이 true인 경우에만 렌더링되는 조건부 렌더링 */}
          {showModal2 && (
            <StModal onClick={closeModal2}>
              {/* 모달의 내용을 담는 컨테이너로, 외부 영역 클릭 시 이벤트를 방지 */}
              <StModalContent onClick={(event) => event.stopPropagation()}>
                <p>외부 영역을 클릭하면 닫히도록 만들었습니다.</p>
                <StBtnForm>
                  {/* 닫기 버튼입니다. 클릭 시 closeModal2 함수가 호출되어 모달을 닫음 */}
                  <StCloseBtn onClick={closeModal2}>닫기</StCloseBtn>
                </StBtnForm>
              </StModalContent>
            </StModal>
          )}
        </div>
      </StModalForm>
    </div>
  );
}

export default Modal;
