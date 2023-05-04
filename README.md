<div align ="center">
https://2th-fisa-pj.github.io/dev-test/index.html </br>
# 👨‍💻 당신은 어떤 개발자인가요 ? 👩‍💻

MBTI 테스트를 변형해 개발자 성향테스트를 하는 프로젝트 입니다. 


# 팀원 소개

김민수

김성훈

이준희

조윤나

</div>


# 협업 방식

### 1. 애자일기법 적용 

✔ 매일 오전 9:00부터 15분씩 회의 진행 후 역할 분담
</br></br>
💻 DAY 1 : 초기 시작화면, 질문 화면, 결과창 화면 레이아웃 작성, GitHub repository 생성 및 Commit 메세지 규칙 설정
</br>
<img width="622" alt="스크린샷 2023-05-04 12 28 47" src="https://user-images.githubusercontent.com/68263815/236106558-e9952830-003a-4312-a6ec-39b977b849dc.png">



main | 버전별 브랜치
-- | --
dev | 개발용 브랜치
개발자별 브랜치 | 개발자별 담당기능 브랜치

<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; font-weight: var(--base-text-weight-semibold, 600); line-height: 1.25; color: rgb(31, 35, 40); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></h3>

💻 DAY 2 : 시작화면의 마우스 이벤트, 질문 클릭 시 클릭 이벤트와 점수계산 및 결과값 산출 JS 개발, GitHub branch 생성하여 작업 효율 극대화
</br>
</br>
### 2. Prettier을 설치하여 코드정렬 기능 사용 
</br>

### 3. 페어프로그래밍 적용 

</br>

# 동작 예시
![use_readme](https://user-images.githubusercontent.com/61442302/236079470-fd27dbd8-ae5e-4608-ad06-2e6c380f51c0.gif)

## 프로젝트 결과 화면

**1. 초기화면**

✔ 화면에 공백이 많아 지루함을 달랠 수 있도록 커서를 따라다니는 이벤트를 생성하였다.
</br>
✔ JavaScript를 기반으로 한 라이브러리인 p5.js 오픈 소스를 활용하여 마우스에 storing input 이벤트 적용
</br>

**2. 질문화면**

✔ 질문과 대답 데이터를 상수로 두고 페이지가 넘어갈 때마다 JS에서에서 배열 변수에서 값을 
</br>

**3. 결과창**

✔ 계산된 결과에따라 각각 출력. 공유를 위한 링크복사기능, 다시하기 기능구현


</br>

## 트러블 슈팅

✔ 캔버스 크기를 화면 전체에 적용
windowWidth와 windowHeight 변수를 사용하여 캔버스 크기 지정

✔ 화면 맨 뒤에 이벤트 배치
CSS z-index 속성을 사용하여 캔버스의 쌓이는 순서 변경함 (z-index 속성 값이 작을수록 쌓이는 순서가 뒤로 배치)

✔ 깃허브를 통한 웹페이지 생성
HTML과 연결된 참조 연결 상대경로 지정을 형식에 맞추어 지정

✔ 페이지 크기에 따른 내부 아이템 크기조절
flexbox 사용으로 뷰포트나 동적레이아웃에 적용되도록 코딩

✔ 질문에 대한 버튼1 버튼2 클릭 이벤트마다 함수 중복이 있는 것 같아서 어떤 버튼을 누르건 공통의 기능을 수행하도록  
</br>
# 아쉬운점 
✔ 버튼 클릭시 서서히 사라지고 다음 대답이 서서히 나오는 등의 애니메이션을 추가했으면 좋았을 것 같다.
✔


</br>

# 느낀점 
✔ 김성훈: 프로젝트를 통해 배운 내용을 잘 복습할 수 있었고, 브랜치 전략을 도입해서 협업 방식에 대해 많이 배울 수 있었습니다. 

✔ 이준희 :  평상시 자주 하던 테스트를 직접 구현하게되어 감회가 새롭고 즐거웠다. 깃에 대해 많은것을 깨닫고 HTML,CSS,JS 학습한것을 사용하며 더 알아가게되었던 귀중한 시간이었습니다.

✔ 김민수 :   팀원들에게 기존에 제가 깃을 이해한대로 적용하자했는데 알고보니 가짜뉴스여서 레파지토리를 새로 만들기도 하는 등 사소한 부분에서 시간이 많이 소비되었습니다. 이런 시행착오 덕분에 더 이해를 할 수 있게 되었습니다.

✔ 조윤나 : 수업에서 배운 내용을 직접 코드로 구현해보면서 한번 더 리뷰해볼 수 있었고, 개인 깃허브 브랜치에 소스 코드 업데이트 작업을 통한 효율적인 협업 방식을 배울 수 있는 좋은 기회였습니다.
