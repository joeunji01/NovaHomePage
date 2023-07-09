import React from 'react'
import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/react'
import  {ReactComponent as Phone} from './svg/Phone.svg'
import profile from './profiles.json'
<style>
  @import urlimport { jsx } from '@emotion/react'
('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
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
justify-content: center;
width : 100px;
height : 40px;
margin : 0 auto;
margin-left: 2px;
margin-right: 2px;
display : inline-block, center;
background-color : rgb(36,147,191);
border-radius: 10px;

`

const Profilebox = styled.div`
  background-color: rgb(255,255,255,90%);
  width: 450px;
  height: 200px;
  border-radius: 10px;
  font-family: 'Noto Sans KR', 'sans-serif';
  font-size: 16px;
  border: 1px solid black;


`

//background-color : ${({ Ycolor }) => Ycolor ? 'rgb(36,147,191)': 'rgb(27,87,166)'};


export default function Profile() {
    const [Ycolor,setycolor] = useState(true);
    const onClick =()=> {setycolor(!Ycolor)};



    return (
      
      <div styled={"margin:0 auto"}>
        <Title>동아리 회원</Title>
        <Hr></Hr>
        <div styled={"text-align:center"}>
        <Year>2022</Year>
        <Year>2023</Year>
        <br/><br/>
        </div>
        <Profilebox>
        <Array/>
        <Phone/>
        </Profilebox>

      
      </div>
    )
  }