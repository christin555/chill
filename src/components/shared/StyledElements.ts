import styled from "styled-components";
import {StyledButtonProps} from "./StyledButtonI";

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 4px 6px;
  margin: 0;
  border: none;
  opacity: ${({disable}) => disable && 0.8};
  border-radius: ${({theme}) => theme.borderRadius};
  background: ${({style = 'primary', theme: {palette}}) => palette[style]};
  cursor: ${({disable}) => (disable ? 'not-allowed' : 'pointer')};
`;

export const Header  = styled.h1`
  border-bottom: 1px solid ${({theme: {palette}}) => palette.primary.main};
`;

export const Block  = styled.div`
  margin: 20px 0;
  height: 100%;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Nav = styled.nav`
  background: ${({theme: {palette}}) => palette.primary};
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  padding: 0 120px;
  
  ul {
    display: flex;
    gap: 40px;
    font-weight: 500;
    font-size: 14px;
    padding: 0;
    list-style: none;
  }
`;

export const Container  = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;

export const Body  = styled.section`
  color: #fff;
  background: ${({theme}) => theme.palette.common.black};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 120px;
  flex-direction: column;
  flex-grow: 1;
`;
