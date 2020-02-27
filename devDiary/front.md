# front-end
## 1. 구성
----------------


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
> 1. 회면에 진입할 때마다, 카드를 패치받아와야 함 => 댓글에 대한 여부, 내 편지를 확인할 수 있어야 하기 때문에.
> 2. 현재와 시간 차이 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
> 3. 편지의 시간 정보를 분석해 미래에 맞춰진 편지는 안 보여줌
> 4. 리프레시 기능
> 5. (카드의 내용을 가지고 ToMeScreen으로 이동)
> 6. 수정하기버튼 누를 시 toMe로 이동하는데, 수정하기 버튼에 대해 update기능이 들어가야함.


5. fromOthersScreen
> 1. 서버에서 카드 내용을 받아와 화면에 보여줌
> 2. 현재와 시간 차이 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
> 3. 고정된 댓글 달기 기능


## 2. 겪은 문제
-----------------


### 1. React-navigation5를 도입하는 배경에서 어려움이 있었음 => 전체적으로 기존과 사용법이 많이 달랐음 하지만, 더 편리해진 듯
> 1. 스크린과 헤더에 배치시킨 버튼을 연결하는 과정에서, 기존과 다르게 React-navigation5는 새로운 방법을 제시해주었는데 매우 편리함. (src/screens/loggedIn/toMeScreen 참조)
> 2. 헤더를 transparent로 할 경우, const headerHeight = useHeaderHeight(); 이 문장을 통해 상단에 헤이트 크기만큼 공간을 줄 수 있음.


### 2. Firebase 적용 과정에서 난항을 겪는 중.
> 1. localNotification을 설치하는 중임. rn 60버전 이상이기에, rnf 홈페이지에서 추천하는 integration 블로그를 보고 적용중.
(https://medium.com/@katharinep/firebase-notification-integration-in-react-native-0-60-3a8d6c8d56ff)
> 2. firebase.messaging().getToken() returns null 이 문제라는 사실을 인지함.
> 3. firevase.messaging()을 rn v60 이후에 사용한 사람이 많지 않아 보임... 일단 로컬을 다른 방법으로 설치하고 pushNoti만 나중에 다시 하는 것으로 진행해야할 듯.
> 4. admob도 달아야 하는뎁,,,,


### 3. localNotification 먼저 설치하겠다.
> 1. AndroidManifest.xml 파일에 다음과 같은 내용을 추가하는데, android:value에 내 패키지 명을 넣었다. Firebase에서 진행할 때는 저걸 그대로 뒀던거 같은데, 혹시 그게 문제가 아니였을까.    
<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_name" android:value="YOUR NOTIFICATION CHANNEL NAME"/> 일단, 지금 툴을 계속 설치해보겠다.
> 2. 로컬 알람 기능 베이스 설치 완료. 진작에 이걸로 할 걸 ㅡ,.ㅡ => react-native-push-notification 활용
참고: (https://dev-yakuza.github.io/ko/react-native/react-native-push-notification/)
참고: (https://github.com/zo0r/react-native-push-notification)


### 4. 시간 설정 기능은 componets/toMeScreen/scheduleFunction 에 넣었다. 이전보다 코드가 깔끔해졌다. ( 깔끔해졌다기보다 조금이나마 사람다워졌다. 발로 짜도 이전 코드보다는 잘 짰었을 듯 )

### 5. 편지리스트 데이터를 어디에서 페치할 것인가?
> 1. 패치 해야할 데이터 : 편지 리스트 + 각 편지에 댓글이 있다면 댓글까지
> 2. 데이터의 특징 : 디비에 쌓이는 데이터를 내가 특정 화면에 들어갈 때마다 체크해야함. (편지 - 시간을 비교하여 기준을 충족한 편지를 체크해야 함. 댓글 - 내 편지에 댓글이 달릴 경우 해당 댓글을 표시해줘야함.)
> 3. 패치를 어디에서 할 것이가? 해당 스크린? 리덕스?
>> 어차피, 리프레시 기능은 필요함. 리덕스에 굳이 저장해야하나?
>> 리덕스에 저장하면 장점은? 새롭게 추가된 카드만 받아오면 됨. => 디비의 연산이나 IO 양이 준다.
>> 리덕스로 하자.


## 3. Task
------------------
- ToMeScreen의 질문 리스트를 서버로 이전하여 사용자가 ToMeScreen에 진입할 때마다 랜덤으로 질문을 받아오도록 한다.
> 질문 업데이트를 자주 할 수 있다는 장점이 있다.
> 매번 서버에서 받아오는 것이 서버에 부담을 안 줄까? 하는 고민. => 물론 내 서버의 사용자 수 정도는 가뿐히 처리하겠지만

- FromMeScreen에서 댓글을 달 경우와 그 개수를 받아와서 화면에 표시한다.?
- 수정하기 기능 추가