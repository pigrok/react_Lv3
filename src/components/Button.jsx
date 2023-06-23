import React from "react";
import { styled } from "styled-components";

const StBtn = styled.div`
  display: flex;
  gap: 10px;

  padding: 10px;
`;

const StTopBtn1 = styled.button`
  width: 190px;
  height: 60px;
  background-color: transparent;

  border: 4px solid #93def5;
  border-radius: 15px;

  cursor: pointer;
`;

const StTopBtn2 = styled.button`
  width: 190px;
  height: 60px;

  background-color: transparent;

  border: 4px solid #f59adb;
  border-radius: 15px;

  cursor: pointer;
`;

const StMiddleBtn1 = styled.button`
  width: 160px;
  height: 55px;

  background-color: #93def5;

  border: 4px solid #93def5;
  border-radius: 15px;

  cursor: pointer;
`;

const StMiddleBtn2 = styled.button`
  width: 160px;
  height: 55px;

  background-color: #f59adb;

  border: 4px solid #f59adb;
  border-radius: 15px;

  cursor: pointer;
`;

const StBottomBtn1 = styled.button`
  width: 130px;
  height: 45px;

  background-color: #93def5;

  border: 4px solid #93def5;
  border-radius: 15px;

  cursor: pointer;
`;

const StBottomBtn2 = styled.button`
  width: 130px;
  height: 45px;

  background-color: #f59adb;

  border: 4px solid #f59adb;
  border-radius: 15px;

  cursor: pointer;
`;

const Button = () => {
  return (
    <div>
      <h1>Button</h1>
      <div>
        <StBtn>
          <StTopBtn1
            onClick={() => {
              alert("버튼을 만들어보세요");
            }}
          >
            Large Primary Button ▶{" "}
          </StTopBtn1>
          <StMiddleBtn1 onClick={() => {}}>Medium</StMiddleBtn1>
          <StBottomBtn1>Small</StBottomBtn1>
        </StBtn>
        <StBtn>
          <StTopBtn2
            //버튼 클릭시 호출되는 콜백 함수를 정의
            onClick={() => {
              // prompt 함수를 사용하여
              // 팝업 창이 표시되고, 입력 필드에 값을 입력 => clickInput에 저장
              const clickInput = prompt("plz enter your input");
              // 입력된 값이 null이 아니고, 공백을 제거한 후에도 빈 문자열이 아닌지 확인
              // 입력 값이 유효한 경우 코드 실행
              if (clickInput !== null && clickInput.trim() !== "") {
                alert("어렵나요?" + clickInput);
              }
            }}
          >
            Large Negative Button 🔔{" "}
          </StTopBtn2>
          <StMiddleBtn2>Medium</StMiddleBtn2>
          <StBottomBtn2>Small</StBottomBtn2>
        </StBtn>
      </div>
    </div>
  );
};

export default Button;
