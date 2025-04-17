import styled from "styled-components";
import { colors } from "../../styles/theme";

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: ${props => props.size === "large" ? "50px" : "26px"};
    background-color: ${props => props.type === "light" ? colors.white : colors.main};
    color: ${props => props.type === "light" ? colors.main : colors.white};
    border-radius: 100px;
    padding: ${props => props.size === "large" ? "14px 28px" : "8px 12px"};
    border: 1px solid ${colors.main};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;