import styled, {css} from 'styled-components'

export const RevealL = styled.p`
    position: relative;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,1);
    background-color: #808080;
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
@media (min-width: 0) and (max-width: 375px){
    width: 80%;
}
`;
export const RevealR = styled.p`
    position: relative;
    text-align: right;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,1);
    background-color: #bdbdbd;
    color: black;
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
    @media (min-width: 0) and (max-width: 375px){
        width: 80%;
        left: 15%;
    }
`;