import styled from '@emotion/styled';

export const Button = styled.button`
font-size: 20px;
border: none;
border-radius: 10px;
background-color: green;
color: inherit;
cursor: pointer;
transition: transform 250ms linear;
:not(:last-child) {
    margin-right: 12px;
}
height: 48px;
width: 140px;
:hover {
    font-weight: bold;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-color: rgb(2, 71, 5);   
    border: none;
    transform: scale(1.03);
}
`