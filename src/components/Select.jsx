import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const StSelectContainer = styled.div`
  border: 3px solid grey;
  padding: 20px;

  overflow: hidden;
  position: relative;

  width: 1300px;
  height: 200px;
  margin: 50px auto 0;
`;

const StSelectBox = styled.div`
  display: flex;
  gap: 20px;
`;

const StSelect1 = styled.select`
  width: 250px;
  height: 40px;

  border: 1px solid grey;
  border-radius: 15px;

  text-align: center;

  margin-top: 50px;
`;

const StSelect2 = styled.select`
  width: 250px;
  height: 40px;

  border: 1px solid grey;
  border-radius: 15px;

  text-align: center;

  margin-top: 50px;
`;

function Select() {
  const selectList = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [select, setSelect] = useState("");
  return (
    <StSelectContainer>
      {" "}
      <h1>Select</h1>
      <StSelectBox>
        <StSelect1
          onChange={(event) => {
            setSelect(event.target.value);
          }}
          value={select}
        >
          {selectList.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </StSelect1>
        <StSelect2
          onChange={(event) => {
            setSelect(event.target.value);
          }}
          value={select}
        >
          {selectList.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </StSelect2>
      </StSelectBox>
    </StSelectContainer>
  );
}

export default Select;
