import styled from '@emotion/styled';

export const Button = styled.button`
font-size: 15px;
border: none;
border-radius: 10px;
background-color: rgb(83, 226, 43);
cursor: pointer;
transition: transform 250ms linear;
:not(:last-child) {
    margin-right: 12px;
}
height: 40px;
width: 120px;
:hover {
    font-weight: bold;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: red;
    border: none;
    transform: scale(1.03);
}
`