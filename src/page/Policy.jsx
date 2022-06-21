import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Main = styled.div`
    background-color: #111111;
    color: rgba(255,255,255, 0.92);
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: start;
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    hr {
        margin-top: 50px;
        margin-bottom: 30px;
    }
`;

const Sub = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 10px;
    h1 {
        text-align: center;
        margin-bottom: 15px;
    }
    h2 {
        margin-bottom: 20px;
    }
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

function Policy() {
    return (
        <>
            <Navbar />
            <Main>
                <Sub>
                    <h1>개인정보처리방침</h1>
                    <span>본 방침은 2022년 6월 22일부터 적용됩니다.</span>
                    <hr />
                </Sub>
                <Sub>
                    <h2>1. 총칙</h2>
                    <h3>제 1조 목적</h3>
                    <p>
                        &nbsp;주식회사 주드라는 (이하 '회사'라고 합니다)는 윌리우드(WILLYWOOD) 관련 제반서비스
                        (이하 '서비스'라고 합니다)를 이용하는 회원의 개인정보 보호를 소중하게 생각하고,
                        회원의 개인정보를 보호하기 위하여 항상 최선을 다해 노력하고 있습니다.
                    </p>
                    <p>
                        회사는 개인정보 보호 관련 주요 법률인 개인정보 보호법, 정보통신망 이용촉진 및
                        정보보호 등에 관한 법률(이하 “정보통신망법”이라고 합니다)을 비롯한 모든
                        개인정보 보호에 관련 법률 규정 및 국가기관 등이 제정한 고시, 훈령, 지침 등을
                        준수합니다.
                    </p>
                    <p>
                        본 개인정보처리방침은 회사의 서비스를 이용하는 회원에 대하여 적용되며, 회원이 제공하는
                        개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위하여 회사가 어떠한
                        조치를 취하고 있는지 알립니다. 또한 개인정보와 관련하여 회사와 회원간의 권리 및 의무 관계를
                        규정하여 회원의 ‘개인정보자기결정권’을 보장하는 수단이 됩니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h2>2. 개인정보의 처리</h2>
                    <h3>제 2조 개인정보의 수집·이용에 대한 동의</h3>
                    <p>
                        &nbsp;회사는 적법하고 공정한 방법에 의하여 서비스 이용계약의 성립 및 이행에 필요한 최소한의
                        개인정보를 수집하며 이용자의 개인 식별이 가능한 개인정보를 수집하기 위하여 회원가입시
                        개인정보수집·이용 동의에 대한 내용을 제공하고 회원이 '동의' 버튼을 클릭하면 개인정보
                        수집·이용에 대해 동의한 것으로 봅니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 3조 수집하는 개인정보의 항목범위 및 수집 방법</h3>
                    <p>
                        1항. 회원가입, 상담, 서비스 신청 등 서비스 제공 및 계약이행을 위해 회원가입 시점에 회사가
                        회원으로부터 수집하는 개인정보는 아래와 같습니다.
                    </p>
                    <blockquote>
                        1) 아이디(이메일 주소), 비밀번호, 이름, 생년월일, 연령, 성별, 프로필 사진, 식별token,
                        회원번호(sns 연동 또는 제휴요금제 이용 회원에 한함)를 수집합니다.
                    </blockquote>
                    <p>
                        2항. 서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                    </p>
                    <blockquote>
                        1) 회사는 회원이 유료 서비스를 이용하고자 하는 경우 결제 시점에 아래와 같이 결제에 필요한 정보를 수집할 수 있습니다.- 결제수단 소유자 정보(이름), 카드정보, 휴대전화번호, 유선전화번호, 결제건별 발행되는 거래 ID, 결제상품코드
                    </blockquote>
                    <blockquote>
                        2) 회사는 회원이 이벤트, 프로모션에 참여하는 경우 아래의 정보를 수집할 수 있습니다.- 이름, 이메일 주소, 휴대전화번호, 주소, 생년월일
                    </blockquote>
                    <blockquote>
                        3) 연령에 따른 콘텐츠 및 상품의 이용/구매 제한, 서비스 부정 이용 방지를 위해 본인인증이 진행되며 이름, 생년월일, 성별, 내/외국인 여부, 휴대전화번호, 연계정보(CI), 중복확인정보(DI)를 수집할 수 있습니다.
                    </blockquote>
                    <blockquote>
                        4) 현금 환불 시 예금주명, 계좌은행명, 계좌번호, 관계증명서류(필요 시)를 수집할 수 있습니다.
                    </blockquote>
                    <blockquote>
                        5) 고객센터로 문의 시 정확한 안내를 위해 이메일 주소, 휴대전화번호, 이름, 생년월일, 결제정보 등의 정보를 수집할 수 있습니다.
                    </blockquote>
                    <blockquote>
                        6) 회원 대상 맞춤형 추천 서비스 제공을 목적으로 이용자를 특정할 수 없는 이용한 서비스의 정보, 접속시간 및 빈도 등의 행태 정보를 수집할 수 있습니다.
                    </blockquote>
                    <p>
                        3항. 서비스 이용과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.
                    </p>
                    <blockquote>
                        1) PC : PC MacAddress, PC 사양정보, 브라우저 정보, 기타 서비스 이용 시 사용되는 프로그램 버전 정보
                    </blockquote>
                    <blockquote>
                        2) 휴대전화(스마트폰) &스마트OS 탑재 모바일 기기(Tablet PC 등) : 모델명, 기기별 고유번호(UDID,IMEI 등), OS정보, 이동통신사, 구글/애플 광고 ID
                    </blockquote>
                    <blockquote>
                        3) 기타 정보 : 서비스 이용(정지) 기록, 접속 로그, 쿠키, 접속 IP정보
                    </blockquote>
                    <p>
                        4항. 회사는 다음과 같은 방식으로 개인정보를 수집합니다.
                    </p>
                    <blockquote>
                        1) 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우 개인정보를 수집합니다.
                    </blockquote>
                    <blockquote>
                        2) 온라인, 오프라인에서 진행되는 이벤트 등을 통해 개인정보가 수집될 수 있습니다.
                    </blockquote>
                    <blockquote>
                        3) 제휴 회사로부터의 제공을 통해 개인정보가 수집될 수 있습니다.
                    </blockquote>
                    <blockquote>
                        4) 고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등을 통해 개인정보가 수집될 수 있습니다.
                    </blockquote>
                    <blockquote>
                        5) 기기정보와 같은 생성정보는 PC웹, 모바일 웹/앱 이용 과정에서 자동으로 생성되어 수집될 수 있습니다.
                    </blockquote>
                    <p>
                        5항. 회사는 기본적 인권침해의 우려가 있는 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향
                        및 범죄기록, 건강상태 및 성생활 등)를 요구하지 않으며, 위의 항목 이외에 다른 어떠한 목적으로도 수집, 사용하지 않습니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 4조 개인정보의 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항</h3>
                    <p>
                        1항. 쿠키란 웹 서버가 웹 브라우저에 보내어 저장했다가 서버의 부가적인 요청이 있을 때 다시 서버로 보내주는
                        문자열 정보(텍스트 파일)로 회원의 컴퓨터 하드디스크에 저장되며 쿠키 (cookie)에는 사용한 웹사이트의 정보 및
                        이용자의 개인정보가 담길 수 있습니다.
                    </p>
                    <blockquote>
                        1) 회사에서 운영하는 서비스는 인터넷을 통하여 회원의 정보를 저장하고 수시로 찾아내는 쿠키(cookie)를 설치, 운용하고 있습니다.
                        회원이 웹사이트에 접속을 하면 회원의 브라우저에 있는 쿠키의 내용을 읽고, 추가정보를 찾아 접속에 따른 성명 등의 추가 입력없이 서비스를 제공할 수 있습니다.
                    </blockquote>
                    <blockquote>
                        2) 회원은 쿠키 설치에 대한 선택권을 가지고 있으며 회원은 웹브라우저에서 옵션을 설정함으로서 모든 쿠키를 허용하거나,
                        또는 쿠키가 저장될 때마다 확인을 거치거나, 혹은 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 회원이 쿠키 설치를
                        거부하는 경우 서비스 제공에 어려움이 발생할 수도 있습니다.
                    </blockquote>
                    <blockquote>
                        3) 회사가 쿠키를 통해 수집하는 정보는 회원의 고유번호에 한하며,
                        그 외의 다른 정보는 수집하지 않습니다. 회사가 쿠키(cookie)를 통해 수집한 회원의 고유번호는 다음의 목적을 위해 사용될 수 있습니다.
                        <blockquote>
                            가. 개인의 관심 분야에 따라 차별화 된 정보를 제공<br />
                            나. 회원과 비회원의 접속 빈도 또는 머문 시간 등을 분석하여 이용자의 취향과 관심분야를 파악하여 타겟 (target) 마케팅에 활용<br />
                            다. 서비스 이용 내역을 추적하여 분석을 통한 추후 개인 맞춤 서비스를 제공 및 서비스 개편 등의 척도로 활용<br />
                            라. 유료서비스 이용 시 이용기간 안내 등<br />
                            마. 회원에게 맞춤형 광고를 제공하기 위하여 회사는 웹 브라우저에서는 ‘쿠키’, 모바일 앱에서는 구글/애플 광고 ID를 수집하여 사용하며, 회원의 웹 사이트 방문이력, 앱 사용 이력 등의 정보를 페이스북, SK텔레콤 주식회사에 제공합니다.
                        </blockquote>
                    </blockquote>
                    <blockquote>
                        4) 회원은 쿠키를 활용한 맞춤형 광고를 언제든지 차단할 수 있으며, 차단한 경우 더이상 맞춤형 광고가 노출되지 않습니다.<br />
                        <blockquote>
                            [안드로이드폰] Google 설정 &gt; 광고 &gt;광고 맞춤설정 선택 또는 해제<br />
                            [아이폰] 설정 &gt; 개인정보보호 &gt; 광고 &gt; 광고 추적 제한<br />
                            [PC웹]익스플로러: 도구 &gt; 인터넷옵션 &gt; 개인정보 &gt; 고급 에서 쿠키 설정크롬: 설정 &gt; 쿠키 및 기타 사이트 데이터 에서 쿠키 설정<br />
                        </blockquote>
                    </blockquote>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 5조 개인정보의 수집목적 및 이용목적</h3>
                    <p>
                        1항. 회사는 수집한 개인정보를 다음의 목적으로 활용합니다.
                    </p>
                    <blockquote>
                        1) 서비스 제공에 관한 계약 이행 유료 서비스 제공에 따른 요금정산<br />
                        - 콘텐츠 제공, 유료 서비스 이용에 대한 과금, 구매 및 요금 결제, 본인인증, 물품배송 또는 청구서 등 발송, 요금 추심
                    </blockquote>
                    <blockquote>
                        2) 회원관리<br />
                        - 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 중복가입확인, 가입의사 확인, 연령확인, 만 14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인 및 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 계정 정보 변경 등 고지사항 전달
                    </blockquote>
                    <blockquote>
                        3) 마케팅 및 광고에 활용<br />
                        - 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스 유효성 확인, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계, 이벤트 및 광고성 정보와 참여기회 제공
                    </blockquote>
                    <blockquote>
                        4) 맞춤 서비스 제공, 서비스 유지·관리 및 품질 향상, 신규 서비스 요소 발굴 및 개선 등<br />
                        - 회사는 본 서비스의 일환으로 회원에게 앱푸시 등의 방법으로 맞춤형 콘텐츠를 추천할 수 있습니다. 회원은 언제든지 앱푸시 설정을 통하여 이를 거절할 수 있습니다.
                    </blockquote>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 6조 개인정보의 제3자 제공 및 위탁</h3>
                    <p>
                        1항. 회사는 회원의 개인정보를 본 개인정보처리방침에서 명시된 범위를 초과하여 이용하거나 회원의 동의 없이 본 개인정보처리방침에
                        명시된 제공 대상자 외의 제3자(타인 또는 타기 업 기관)에 제공하지 않습니다. 다만, 다음 각호의 어느 하나에 해당하는 경우에는 예외로 합니다.
                    </p>
                    <blockquote>
                        1) 관계법령에 의하여 수사, 재판 또는 행정상의 목적으로 관계기관으로부터 요구가 있을 경우
                    </blockquote>
                    <blockquote>
                        2) 금융실명거래 및 비밀보장에 관한 법률, 신용정보의 이용 및 보호에 관한 법률, 전기통신기본법, 전기통신사업법, 지방세법, 소비자보호법, 한국은행법, 형사소송법 등 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
                    </blockquote>
                    <p>
                        2항. 영업의 전부 또는 일부를 양도하거나, 합병/상속 등으로 서비스제공자의 권리, 의무를 이전 승계하는 경우 개인 정보보호 관련 회원의 권리를 보장하기 위하여 반드시 그 사실을 회원에게 통지합니다.
                    </p>
                    <p>
                        3항. 보다 나은 서비스 제공을 위하여 회사가 귀하의 개인정보를 타 기업 등 제3자에게 제공하는 것이 필요한 경우 회사는 사전에
                        제휴사가 누구인지, 제공 또는 공유되어야 하는 개인정보항목이 무엇인지, 제공 또는 공유되는 개인정보의 이용목적, 그리고
                        언제까지 공유되며 어떻게 보호 관리되는지에 대하여 회원에게 고지하여 동의를 구하는 절차를 거칠 것이며, 회원이 동의하지 않는
                        정보는 제3자에 제공하거나 제3자와 공유하지 않습니다. 회사는 개인정보처리방침에서 정한 본래의 수집목적 및 이용목적에 반하여
                        무분별하게 회원의 개인 정보가 제공되지 않도록 최대한 노력하겠습니다.
                    </p>
                    <p>
                        4항. 회사는 서비스 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁받은 업체가 정보통신망법에 따라 개인정보를
                        안전하게 처리하도록 필요한 사항을 규정하고 관리/감독을 하고 있습니다. 회사가 수탁업체에 위탁하는 업무와 관련된 서비스를 이용하지
                        않는 경우, 이용자의 개인정보가 수탁업체에 제공되지 않습니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 7조 회원 및 법정 대리인의 권리와 그 행사방법</h3>
                    <p>
                        1항. 회원은 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있습니다. 만 14세 미만의 아동의 개인정보는
                        그 법정대리인(이하 본 조에서 “법정대리인”이라고 합니다)이 아동을 대리하여 위와 같은 권리를 행사할 수 있습니다.
                    </p>
                    <p>
                        2항. 회원 및 법정대리인은 제14조에 기재된 고객센터에 웹 문의, 서면, 전화, 전자우편의 방법으로 본인(법정대리인의 경우는 아동)의
                        개인정보의 조회, 수정, 삭제를 요청할 수 있습니다. 고객센터는 회원 또는 법정대리인의 권리 행사에 대하여 지체없이 조치하고 처리 결과를 안내합니다.
                    </p>
                    <p>
                        3항. 회원은 웹, 전용 애플리케이션의 [설정] 메뉴에서 등록되어 있는 개인정보를 직접 조회, 수정할 수 있으며, 즉시 결과를 확인할 수 있습니다.
                    </p>
                    <p>
                        4항. 회원 및 법정대리인이 위 제2, 3항의 조회, 수정, 삭제 요청의 처리 결과에 대해 이의가 있을 경우 고객센터에 연락할 수 있으며,
                        회사는 이의제기 내용을 검토하여 처리 결과를 안내합니다.
                    </p>
                    <p>
                        5항.회원 또는 만 14세 미만 아동의 법정대리인은 서비스 이용계약해지(회원탈퇴)를 통하여 개인정보의 수집 및 이용동의에 대한 동의를 철회할 수 있습니다.
                    </p>
                    <p>
                        6항.개인정보의 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게
                        이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. 단, 다음과 같은 경우에는 예외적으로 개인정보의
                        열람 및 정정을 제한할 수 있습니다.
                        <blockquote>
                            1) 본인 또는 제 3 자의 생명, 신체, 재산 또는 권익을 현저하게 해할 우려가 있는 경우<br />
                            2) 당해 서비스 제공자의 업무에 현저한 지장을 미칠 우려가 있는 경우<br />
                            3) 법령에 위반하는 경우
                        </blockquote>
                    </p>
                    <p>
                        7항. 회사는 삭제 또는 회원 탈퇴 요청이 있을 경우, 개인정보 및 개인 데이터를 삭제 또는 제거합니다.
                        단, 회사는 제9조 "개인정보의 보관기간 및 이용기간"에 명시된 바에 같이 법령에 따른 기간 동안 회원의 개인정보를 보관할 수 있습니다.
                    </p>
                    <p>
                        8항.회사는 회원이 타인의 개인정보를 도용하여 회원가입 등을 하였음을 알게 된 때 지체없이 해당 아이디에 대한 서비스 이용정지 또는
                        회원탈퇴 및 개인정보 삭제 등 필요한 조치를 취합니다. 또한 자신의 개인정보 도용을 인지한 회원이 해당 아이디에 대한 서비스 이용정지
                        또는 회원탈퇴 및 개인정보 삭제를 요구하는 경우에도 회사는 즉시 조치를 취합니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 8조 개인정보의 보관기간 및 이용기간</h3>
                    <p>
                        1항. 회원의 개인정보는 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기됩니다.
                        회원이 회원탈퇴를 하거나 개인정보 허위기재로 인해 회원 ID 삭제 처분을 받은 경우 수집된 개인정보는 완전히 삭제되며 어떠한 용도로도 이용할 수 없도록 처리됩니다.
                    </p>
                    <p>
                        2항. 또한 명의 도용 등 분쟁 발생시 본인확인을 위해 제출 받은 신분증 사본은 본인확인 후 즉시 파기합니다.
                    </p>
                    <p>
                        3항. 회원의 개인정보는 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기되나, 아래 각 항목에 해당하는
                        경우에는 명시한 기간 동안 보관할 수 있으며, 그 외 다른 목적으로는 사용하지 않습니다.
                        <blockquote>
                            1) 불건전한 서비스 이용으로 서비스에 물의를 일으킨 이용자의 경우 사법기관 수사의뢰를 하거나 다른 회원을 보호할 목적으로 1년간 해당 개인정보를 보관할 수 있습니다.
                        </blockquote>
                        <blockquote>
                            2) 관계법령의 규정에 의하여 보관할 필요가 있는 경우 회사는 개인정보 수집 및 이용 목적 달성 후에도 관계법령 에서 정한 일정 기간 동안 회원의 개인정보를 보관할 수 있습니다.
                            <blockquote>
                                가. 계약 또는 청약철회 등에 관한 기록: 5년<br />
                                나. 대금결제 및 재화의 공급에 관한 기록: 5년<br />
                                다. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년<br />
                                라. 표시, 광고에 관한 기록: 6개월<br />
                                마. 웹사이트 방문기록: 3개월
                            </blockquote>
                        </blockquote>
                        <blockquote>
                            3) 회사는 ‘개인정보 유효기간제’에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하여 관리합니다.
                        </blockquote>
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 9조 개인정보의 파기절차 및 방법</h3>
                    <p>
                        회사는 수집한 개인정보의 이용목적이 달성된 후 별도의 DB로 옮겨 보관기간 및 이용기간에 따라 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
                    </p>
                    <p>
                        1항. 파기절차<br />
                        회원이 서비스 가입 등을 위해 기재한 개인정보는 서비스 해지 등 이용목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호
                        사유에 따라 일정기간(개인정보 보관기간 및 이용기간 참조) 동안 저장 보관된 후 삭제하거나 파기합니다.
                    </p>
                    <p>
                        2항. 파기방법<br />
                        서면양식에 기재하거나, 종이에 출력된 개인정보는 분쇄기로 분쇄하여 파기하고, 전자적 파일형태로 저장된
                        개인 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 10조 회원의 권리와 의무</h3>
                    <p>
                        &nbsp;회원은 본인의 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방해주시기 바랍니다. 회원이 입력한 부정확한 정보로 인해 발생하는
                        사고의 책임은 회원 자신에게 있으며 타인 정보의 도용 등 허위정보를 입력할 경우 계정의 이용이 제한될 수 있습니다.회사가 운영하는 서비스를 이용하는
                        회원은 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 회원은 아이디(ID), 비밀번호를 포함한
                        개인정보가 유출되지 않도록 조심하여야 하며, 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해야 합니다. 만약 이 같은 책임을 다하지 못하고
                        타인의 정보 및 타인의 존엄성을 훼손할 경우에는 정보통신망법 등에 의해 처벌 받을 수 있습니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 11조 고지의 의무</h3>
                    <p>
                        &nbsp;현 「개인정보처리방침」 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 홈페이지의 '공지사항'을 통해 고지하고, 개정 내용이
                        회원에게 불리할 경우에는 개정 30일전부터 고지할 것입니다. 변경 관련 문의는 고객센터를 통해 할 수 있습니다.
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 12조 개인정보보호책임자 및 담당자</h3>
                    <p>
                        &nbsp;회사는 회원의 개인정보보호를 가장 중요시하며, 회원의 개인정보가 훼손, 침해 또는 누설되지 않도록 최선을 다하고 있습니다.
                        서비스를 이용하시면서 발생하는 모든 개인정보보호 관련 민원은 고객센터에 신고하시면 신속하게 답변해 드리도록 하겠습니다.<br /><br />
                        [개인정보보호책임자 및 개인정보관리담당자] 성 명: 조현호<br /> 전자우편: pronce7@joodra.com
                    </p>
                    <hr />
                </Sub>
                <Sub>
                    <h3>제 13조 개인정보 침해 관련 상담 및 신고</h3>
                    <p>
                        회사는 회원의 의견을 소중하게 생각합니다.<br />
                        회사가 운영중인 서비스에 대하여 문의사항이 있을 경우 고객센터 등에 문의하시면 신속/정확한 답변을 드리겠습니다.<br />
                        회사는 원활환 의사소통을 위해 고객상담센터를 운영하고 있으며 연락처는 다음과 같습니다.
                    </p>
                    <blockquote>
                        [고객상담센터]<br />
                        - 전화번호: 010 – 4543 –4731<br />
                        - 전자우편: pronce7@joodra.com<br />
                        - 웹문의: pronce7@joodra.com<br />
                        - 주소: 서울특별시 성북구 고려대로26길 45-9, 207호<br />
                    </blockquote>
                    <p>
                        기타 개인정보에 관한 상담이 필요한 경우에는 정보통신부 산하 공공기관인 한국인터넷진흥원(KISA)
                        개인정보침해신고센터, 경찰청 사이버테러대응센터, 대검찰청 사이버범죄수사단으로 문의하시기 바랍니다.
                    </p>
                    <blockquote>
                        [한국인터넷진흥원 개인정보침해신고센터]<br />
                        전화번호 : 국번없이 118
                    </blockquote>
                    <p>
                        링크 사이트<br />
                        회사는 운영중인 서비스 홈페이지를 통하여 회원에게 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다.
                        이 경우 해당 사이트의 「개인정보처리방침」은 회사가 운영중인 서비스의 「개인정보처리방침」과 무관하므로 새로 방문한 사이트의
                        「개인정보처리방침」을 확인하시기 바랍니다.
                    </p>
                </Sub>
            </Main>
            <Footer />
        </>
    )
}

export default Policy;