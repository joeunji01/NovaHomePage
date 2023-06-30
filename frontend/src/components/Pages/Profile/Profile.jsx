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
margin : 0 auto;
display : inline-block, center;
`

//background-color : ${({ Ycolor }) => Ycolor ? 'rgb(36,147,191)': 'rgb(27,87,166)'};

export default function Profile() {
    const [Y22color,sety22color] = useState(false);
    const [Y23color,sety23color] = useState(true);
    const onClick =()=> {sety22color(!Y22color); sety23color(!Y23color)};
    if (Y22color===true){
        'rgb(36,147,191)'
    }

    return (
      
      <div>
        <Title>동아리 회원</Title>
        <Hr></Hr>
        <Year onClick={onClick} >2022</Year>
        <Year onClick={onClick}>2023</Year>


        
      </div>
    )
  }