import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarLogin from './ui/NavbarLogin';
import { useMediaQuery } from 'react-responsive';
import { IconContext } from 'react-icons/lib';
import { IoPersonCircleOutline } from 'react-icons/io5'

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  background: #2b2b2b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 3;
  img {
    height: 24px;
  }
  button {
    border: none;
    background: #2b2b2b;
    &:hover {
      cursor: pointer;
    }
  }
  Link, a {
    color: white;
    text-decoration: none;
  }
  Link, a:visited {
    color: white;
  }
  @media screen and (max-width: 768px) {
    height: 30px;
    img {
      height: 16px;
    }
  }
`;

const NavbarLeft = styled.div`
  align-items: center;
`;

const Logo = styled.img`
  margin: 10px;
  vertical-align: middle;
`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 10px;
  }
  @media screen and (max-width: 768px){
    align-self: center;
  }
`;

// const Menu = styled.p`
//   color: ${props => props.color};
// `;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  p {
    margin: 5px;
    align-items: center;
  }
`;

function Navbar() {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <NavbarContainer>
      {
        isMobile
          ? <>
            <NavbarLeft>
              <Link to={"/"}><Logo src='willywood_white.png' /></Link>
            </NavbarLeft>
            <NavbarCenter>
            </NavbarCenter>
            <NavbarRight>
              <IconContext.Provider value={{ color: 'white', size: '20px' }} >
                <IoPersonCircleOutline>
                  <NavbarLogin />
                </IoPersonCircleOutline>
              </IconContext.Provider>
            </NavbarRight>
          </>
          : <>
            <NavbarLeft>
              <Link to={"/"}><Logo src='willywood_white.png' /></Link>
            </NavbarLeft>
            {/* <NavbarCenter>
          <Link to={"/premium"}><Menu color='#f2e056'>프리미엄관</Menu></Link>
          <Link to={"/category"}><Menu>카테고리</Menu></Link>
          <Link to={"/upload"}><Menu>작품 업로드</Menu></Link>
          <Link to={"/mypage"}><Menu>마이페이지</Menu></Link>
          <Link to={"/support"}><Menu>고객센터</Menu></Link>
          <a target="_blank" rel="noopener noreferrer" href={"http://www.joodra.com/"}>We will go Hollywood</a>
        </NavbarCenter> */}
            <NavbarRight>
              <NavbarLogin />
            </NavbarRight>
          </>
      }
    </NavbarContainer>
  );
}

export default Navbar;