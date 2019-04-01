import styled, {css} from 'styled-components'

export const RevealL = styled.p`
    position: relative;
    background-color: #EA6A6A;
    text-align: left;
    color: black;
    width: 65%;
    padding: 2%;
    &:after {
        content:'';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:black;
        transform-origin: left;
        transform: rotateY(90deg);

        transition: transform 2s;
    }
    ${({hide})=>hide && css`
    &:after{
        transform: rotateY(0deg);
    }
`}
`;
export const RevealR = styled.p`
    position: relative;
    text-align: right;
    background-color: #F5E9E9;
    color: blue;
    width: 55%;
    left: 35%;
    padding: 2%;
    
    &:hover{
        cursor: pointer;
    }

    &:after {
        content:'';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:black;
        transform-origin: right;
        transform: rotateY(90deg);

        transition: transform 2s;
    }
    ${({hide})=>hide && css`
    &:after{
        transform: rotateY(0deg);
    }
`}
    &:visited{
        color: purple;
    }
`;