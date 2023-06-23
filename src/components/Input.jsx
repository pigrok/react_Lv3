import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const StForm = styled.form`
  display: flex;
  gap: 15px;
  padding: 10px;
`;

const StInput = styled.input`
  width: 220px;
  height: 50px;

  border: 1px solid black;
  border-radius: 15px;
`;

const StBtn = styled.button`
  width: 100px;
  height: 50px;

  background-color: #93def5;

  border: 1px solid #93def5;
  border-radius: 15px;
`;

const Input = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const comma = (number) => {
    return number.toLocaleString();
  };
  return (
    <div>
      <h1>Input</h1>
      <div>
        <StForm
          onSubmit={(event) => {
            event.preventDefault();
            // name이 비어있거나 price가 0인 경우 alert
            if (name === "" || price === 0) {
              alert("이름과 가격 모두 입력해주세요.");
              // 함수 실행을 중단하고 이후의 코드를 실행하지 않음
              return;
            }
            alert(`이름: ${name}, 가격: ${price}`);
          }}
        >
          <div>
            이름: &nbsp;
            <StInput
              type="text"
              value={name}
              // 입력 값이 변경 될 때 마다 호출
              // event.target.value를 통해 가져와서
              // name 상태 변수를 업데이트 => 사용자가 입력한 값이 name 변수에 저장되고 출력
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></StInput>
          </div>
          <div>
            가격 : &nbsp;
            <StInput
              type="text"
              // comma함수를 사용하여 가격 값에 콤마를 추가하여 표시
              value={comma(price)}
              // 사용자가 입력한 값을 숫자 이 외의 문자는 제거하여 changePrice에 저장
              // /[^0-9]/g은 숫자가 아닌 문자를 찾아 제거하는 역할
              onChange={(event) => {
                const changePrice = event.target.value.replace(/[^0-9]/g, "");
                // changePrice 변수의 값이 비어있는 경우 0으로 설정하고,
                // 그렇지 않은 경우 parseInt()를 사용하여 문자열을 정수로 변환
                // setPRice함수를 호출하여 price 상태 변수를 업데이트
                setPrice(changePrice === "" ? 0 : parseInt(changePrice, 10));
              }}
            ></StInput>
          </div>
          <StBtn type="submit">저장</StBtn>
        </StForm>
      </div>
    </div>
  );
};

export default Input;
