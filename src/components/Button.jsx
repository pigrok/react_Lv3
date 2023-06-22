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
            onClick={() => {
              const clickInput = prompt("plz enter your input");
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
