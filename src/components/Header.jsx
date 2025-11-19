import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <MenuContainer>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </MenuContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;

  h1 {
    color: white;
  }
`;
const MenuContainer = styled.ul`
  display: flex;
  gap: 20px;

  li {
    list-style: none;
    font-size: 16px;
    font-weight: 400;
    color: white;
  }
`;
