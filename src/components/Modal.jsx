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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

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
          <StModalBtn1 onClick={openModal}>open modal</StModalBtn1>
          {showModal && (
            <StModal>
              <StModalContent>
                <p>
                  닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                  않아요.
                </p>
                <StBtnForm>
                  <StCloseBtn onClick={closeModal}>닫기</StCloseBtn>
                  <StCloseBtn>확인</StCloseBtn>
                </StBtnForm>
              </StModalContent>
            </StModal>
          )}
        </div>
        <div>
          {" "}
          <StModalBtn2 onClick={openModal2}>open modal2</StModalBtn2>
          {showModal2 && (
            <StModal onClick={closeModal2}>
              <StModalContent onClick={(event) => event.stopPropagation()}>
                <p>외부 영역을 클릭하면 닫히도록 만들었습니다.</p>
                <StBtnForm>
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
