# 1. 목적
--------------------
1. 2019년 8월 처음 expo로 만들어 PlayStore와 AppStore에 올렸던 앱 **FromMe** 를 React-native cli를 바탕으로 업데이트 하려함.
2. 백엔드 서비스를 해보고 싶은데, 적당한 프론트엔드가 없었음. 기존 express로 만들었던 백엔드를 이번 기회에 springBoot로 만들어보려 함.
3. 기존에 Mysql을 사용했었으나, RDB가 필요한가? 라는 의구심이 들어, 다이노디비를 사용해볼까 고려중임.
4. aws Lambda 서비스를 도입해보고 싶으나, 사용량이 많지 않아(속도 부분)을 고려하게 됨. 사실상 현재 서버는 Rest api의 용도로만 사용 중이기에 비용 등의 효율성을 고려하면 lambda와 같은 서버리스로 대체하는게 맞는 것 같음 => ec2는 매일 돌아가는데, 현재 내 서비스는 사용자도 많지 않기에 그럴 필요가 전혀 없음..... lambda의 cold, warm 상태 관련 속도 문제가 많이 개선되었다는데,,,,,, 공부를 위해 springB을 해야하나,,,,, 돈을 위해 람다를 해야 하나..... 쓋,,,,,


# 2. stack구성
---------------------
1. react-native cli를 바탕으로한 모바일 앱 개발 (redux, hook, react-navigation5 사용)
2. 백엔드는 springBoot 사용 예정
3. ec2 서버 및 Mysql RDBMS 사용(DB는 변경 가능)


# 3. 설계
---------------------
##front-end


1. loggedIn + loggedOut으로 구성
> 1. loggedOut - loggedInScreen ,signUpScreen
> 2. loggedIn - homeScreen, toMeScreen, fromMeScreen, fromOthersScreen


2. homeScreen
> 1. toMeScreen , fromMeScreen, fromOthersScreen 으로 네비게이션 이동하는 기능.


3. toMeScreen
> 1. 알림 시간 설정 기능(나에게 쓴 편지의 알림이 뜨는 기능)
> 2. 편지 내용 쓰는 기능
> 3. 서버로 편지 내용, 시간, 작성자ID, toMe&toOthers 여부 전송


4. fromMeScreen
> 1. 서버에서 카드 내용을 받아와 화면에 보여줌
> 2. 현재와 시간 차이
> 3. 편지의 시간 정보를 분석해 미래에 맞춰진 편지는 안 보여줌
> 4. 리프레시 기능
> 5. (카드의 내용을 가지고 ToMeScreen으로 이동)


5. fromOthersScreen
> 1. 서버에서 카드 내용을 받아와 화면에 보여줌
> 2. 현재와 시간 차이
> 3. 고정된 댓글 달기 기능


##back-end


1. loggedInScreen
> 1. 아이디와 비밀번호 일치가 있는지 체크
> 2. 일치하면 로그인 // 일치하지 않으면 Alert


2. signUpScreen
> 1. 폰넘버 일치하는지 체크
> 2. 일치하는 것 없으면 회원가입 OK


3. toMeScreen
> 1. 전달받은 편지 정보를 편지함에 put


4. fromMeScreen
> 1. 나의 코드와 일치하는 편지 중 시간 데이터가 과거인 것만 받아옴


5. fromOthersScreen
> 1. 모든 편지 중 시간 데이터가 과거인 것 + fromOthers 코드를 가지고 있는 편지만 페치
> 2. 해당 편지의 댓글도 같이 페치 


# 4. 겪고 있는 문제
---------------------
##Front-end


1. React-navigation5를 도입하는 배경에서 어려움이 있었음 => 전체적으로 기존과 사용법이 많이 달랐음 하지만, 더 편리해진 듯
> 1. 스크린과 헤더에 배치시킨 버튼을 연결하는 과정에서, 기존과 다르게 React-navigation5는 새로운 방법을 제시해주었는데 매우 편리함. (src/screens/loggedIn/toMeScreen 참조)


2. Firebase 적용 과정에서 난항을 겪는 중.
> 1. localNotification을 설치하는 중임. rn 60버전 이상이기에, rnf 홈페이지에서 추천하는 integration 블로그를 보고 적용중.
(https://medium.com/@katharinep/firebase-notification-integration-in-react-native-0-60-3a8d6c8d56ff)
> 2. firebase.messaging().getToken() returns null 이 문제라는 사실을 인지함.
> 3. firevase.messaging()을 rn v60 이후에 사용한 사람이 많지 않아 보임... 일단 로컬을 다른 방법으로 설치하고 pushNoti만 나중에 다시 하는 것으로 진행해야할 듯.
> 4. admob도 달아야 하는뎁,,,,


3. localNotification 먼저 설치하겠다.
> 1. AndroidManifest.xml 파일에 다음과 같은 내용을 추가하는데, android:value에 내 패키지 명을 넣었다. Firebase에서 진행할 때는 저걸 그대로 뒀던거 같은데, 혹시 그게 문제가 아니였을까.    
<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_name" android:value="YOUR NOTIFICATION CHANNEL NAME"/> 일단, 지금 툴을 계속 설치해보겠다.
> 2. 로컬 알람 기능 베이스 설치 완료. 진작에 이걸로 할 걸 ㅡ,.ㅡ => react-native-push-notification 활용
참고: (https://dev-yakuza.github.io/ko/react-native/react-native-push-notification/)
참고: (https://github.com/zo0r/react-native-push-notification)


4. 시간 설정 기능은 componets/toMeScreen/scheduleFunction 에 넣었다. 이전보다 코드가 깔끔해졌다. ( 깔끔해졌다기보다 조금이나마 사람다워졌다. 발로 짜도 이전 코드보다는 잘 짰었을 듯 )


# 5. Task
---------------------
- ToMeScreen의 질문 리스트를 서버로 이전하여 사용자가 ToMeScreen에 진입할 때마다 랜덤으로 질문을 받아오도록 한다.
> 질문 업데이트를 자주 할 수 있다는 장점이 있다.
> 매번 서버에서 받아오는 것이 서버에 부담을 안 줄까? 하는 고민. => 물론 내 서버의 사용자 수 정도는 가뿐히 처리하겠지만