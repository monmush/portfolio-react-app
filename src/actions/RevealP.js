import styled, {css} from 'styled-components'

export const RevealP = styled.p`
    position: relative;
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

        transition: transform 3s;
    }
    ${({hide})=>hide && css`
    &:after{
        transform: rotateY(0deg);
    }
`}
`;