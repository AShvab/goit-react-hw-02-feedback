import styled from '@emotion/styled';

export const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`
export const Item = styled.li`
font-size: 20px;
color: gray;
&:not(:last-child) {
    margin-bottom: 10px;
}
`