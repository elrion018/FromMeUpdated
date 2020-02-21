# 1. 목적
--------------------
1. 2019년 8월 처음 expo로 만들어 PlayStore와 AppStore에 올렸던 앱 **FromMe** 를 React-native cli를 바탕으로 업데이트 하려함.
2. 백엔드 서비스를 해보고 싶은데, 적당한 프론트엔드가 없었음. 기존 express로 만들었던 백엔드를 이번 기회에 spring으로 만들어보려 함.
3. 기존에 Mysql을 사용했었으나, RDB가 필요한가? 라는 의구심이 들어, 다이노디비를 사용해볼까 고려중임.
4. Lamda 서버시를 도입해보고 싶으나, 사용량이 많지 않아(속도 부분)을 고려하게 됨. 사실상 현재 서버는 Rest api의 용도로만 사용 중이기에 비용 등의 효율성을 고려하면 lamda로 대체하는게 맞는 것 같음 => ec2는 매일 돌아가는데, 현재 내 서비스는 사용자도 많지 않기에 그럴 필요가 전혀 없음..... lamda의 cold, warm 상태 관련 속도 문제가 많이 개선되었다는데,,,,,, 공부를 위해 spring을 해야하나,,,,, 돈을 위해 람다를 해야 하나..... 쓋,,,,,


# 2. 구성
---------------------
1. react-native cli를 바탕으로한 모바일 앱 개발
2. google firebase를 활용해, local notification과 push notification 기능을 넣으려 함.


# 3. 겪고 있는 문제
---------------------
1. React-navigation5를 도입하는 배경에서 어려움이 있었음 => 전체적으로 기존과 사용법이 많이 달랐음 하지만, 더 편리해진 듯
> 1. 스크린과 헤더에 배치시킨 버튼을 연결하는 과정에서, 기존과 다르게 React-navigation5는 새로운 방법을 제시해주었는데 매우 편리함. (src/screens/loggedIn/toMeScreen 참조)
2. Firebase 적용 과정에서 난항을 겪는 중.
> 1. localNotification을 설치하는 중임. rn 60버전 이상이기에, rnf 홈페이지에서 추천하는 integration 블로그를 보고 적용중.
(https://medium.com/@katharinep/firebase-notification-integration-in-react-native-0-60-3a8d6c8d56ff)
> 2. firebase.messaging().getToken() returns null 이 문제라는 사실을 인지함.
> 3. firevase.messaging()을 rn v60 이후에 사용한 사람이 많지 않아 보임... 일단 로컬을 다른 방법으로 설치하고 pushNoti만 나중에 다시 하는 것으로 진행해야할 듯.
3. localNoti 먼저 설치하겠다.
> 1. AndroidManifest.xml 파일에 다음과 같은 내용을 추가하는데, value에 내 패키지 명을 넣었다. Firebase에서 진행할 때는 저걸 그대로 뒀던거 같은데, 혹시 그게 문제가 아니였을까.    
<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_name" android:value="YOUR NOTIFICATION CHANNEL NAME"/> 일단, 지금 툴을 계속 설치해보겠다.
> 2. 로컬 알람 기능 베이스 설치 완료. 진작에 이걸로 할 걸 ㅡ,.ㅡ => react-native-push-notification 활용
