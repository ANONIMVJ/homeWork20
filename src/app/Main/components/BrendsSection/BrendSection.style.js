import styled from "styled-components";
import { colors } from "@/styles/theme"

export const BrendsSectionWrapper = styled.div`
    padding-bottom:  100px;

    .header-brands {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 70px;
    }

    .title {
        font-size: 40px;
        font-weight: 500;
        color: ${colors.main};
    }
`

export const SliderButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const BrendWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.lightGray};
    height: 115px;

    & > img {
        width: 80%;
    }
`