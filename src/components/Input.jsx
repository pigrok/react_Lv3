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

            if (name === "" || price === 0) {
              alert("이름과 가격 모두 입력해주세요.");
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
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></StInput>
          </div>
          <div>
            가격 : &nbsp;
            <StInput
              type="text"
              value={comma(price)}
              onChange={(event) => {
                const changePrice = event.target.value.replace(/[^0-9]/g, "");
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
