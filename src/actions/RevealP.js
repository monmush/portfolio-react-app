import styled, {css} from 'styled-components'

export const RevealL = styled.p`
    position: relative;
    color: #C93C3C;
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
`;