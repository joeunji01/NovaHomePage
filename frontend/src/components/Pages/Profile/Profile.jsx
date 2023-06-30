import React from 'react'
import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
</style>

const Title = styled.div`
font-family: 'Noto Sans KR', sans-serif;
text-align : center;
margin-top: 30px;
color : rgb(36,147,191);
text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;  
font-size : 45px;
`
const Hr = styled.hr`
background-color : rgb(36,147,191); 
width : 15%;
  height : 5px;
  border: inset 1px black;
  border-radius: 10px;
`

const Year = styled.div`
font-family: 'Noto Sans KR', sans-serif;
text-align : center;
font-size : 20px;
width : 100px;
height : 40px;
background-color : rgb(36,147,191); 
margin : auto;
display : inline-block;

`


export default function Profile() {
    return (
      <div>
        <Title>동아리 회원</Title>
        <Hr></Hr>
        <Year>2022</Year>
        <Year>2023</Year>


        
      </div>
    )
  }