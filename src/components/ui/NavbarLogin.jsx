import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeState, changeUser } from '../../store';
import { IconContext } from 'react-icons/lib';
import { IoPersonCircleOutline } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Kakao = styled.button`
    color: white;
    padding: 10px;
    border-radius: 10px;
    font-size: medium;
    font-weight: 500;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const Profile = styled.div`
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    span {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
        color: white;
    }
    img {
        margin-top: auto;
        margin-bottom: auto;
        width: 35px;
        height: 35px;
        border-radius: 25px;
        object-fit: cover;
        &:hover {
            cursor: pointer;
        }
    }
`;

const Logout = styled.button`
    color: white;
    align-items: center;
    padding: 10px;
    font-size: medium;
`;

function NavbarLogin() {
    const loginState = useSelector((state) => state.login);
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    useEffect(() => {
        if (localStorage.getItem('user') !== null && loginState === false) {
            let user = JSON.parse(localStorage.getItem('user'));
            dispatch(changeUser({ name: user.nick, email: user.email, profile_img: user.profile_img }));
            dispatch(changeState());
        }
    }, [])

    function KakaoUser() {
        window.Kakao.API.request({
            url: '/v2/user/me',
            success: function (response) {
                UserHandler(response);
            },
            fail: function (error) {
                console.log(error);
            }
        });
    }

    function UserHandler(resData) {
        const id = resData.id;
        const email = resData.kakao_account.email;
        const nick = resData.kakao_account.profile.nickname;
        const profile_img = resData.properties.profile_image;
        // console.log(resData);
        // console.log(profile_img);
        let request = {
            snsId: id,
            nick,
            email,
        };
        let user = {
            nick,
            email,
            profile_img
        }
        process.env.NODE_ENV === 'production'
            ? axios.post(process.env.REACT_APP_SERVER_HOST + "/auth/login", request)
                .catch(function (error) {
                    console.log(error);
                })
            : axios.post("http://localhost:8001/auth/login", request)
                .catch(function (error) {
                    console.log(error);
                });
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(changeUser({ name: nick, email: email, profile_img: profile_img }));
    }

    function KakaoLogin() {
        if (localStorage.getItem('user') !== null) {
            let user = localStorage.getItem('user');
            dispatch(changeUser({ name: user.nick, email: user.email, profile_img: user.profile_img }));
            dispatch(changeState());
        } else if (!window.Kakao.isInitialized()) {
            window.Kakao.init('2d060ab397b864200d0110666e2732ec');
            window.Kakao.Auth.login({
                success: function (response) {
                    window.Kakao.Auth.setAccessToken(response.access_token);
                    // console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
                    KakaoUser();
                    dispatch(changeState());
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        } else {
            window.Kakao.Auth.login({
                success: function (response) {
                    window.Kakao.Auth.setAccessToken(response.access_token);
                    // console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
                    KakaoUser();
                    dispatch(changeState());
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        }
    }

    function KakaoLogout() {
        if (localStorage.getItem('user') !== null) {
            localStorage.removeItem('user');
            dispatch(changeState());
            window.location.reload();
        } else if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            return;
        }
        window.Kakao.Auth.logout(() => {
            console.log(window.Kakao.Auth.getAccessToken());
            dispatch(changeState());
            window.location.reload();
        });
    }

    return (
        <LoginContainer>
            {
                loginState
                    ? isMobile
                        ? <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                            <IoPersonCircleOutline onClick={KakaoLogout} />
                        </IconContext.Provider>
                        : <>
                            <Profile>
                                <span>{userState.value.name}님 어서오세요</span>
                                {/* <img src={userState.value.profile_img} alt='profile_image' /> */}
                            </Profile>
                            <Logout onClick={KakaoLogout}>로그아웃</Logout>
                        </>
                    : isMobile
                        ? <IconContext.Provider value={{ color: 'yellow', size: '22px' }}>
                            <IoPersonCircleOutline onClick={KakaoLogin} />
                        </IconContext.Provider>
                        : <Kakao src='kakao_login.png' onClick={KakaoLogin}>로그인</Kakao>
            }
        </LoginContainer>
    );
}

export default NavbarLogin;