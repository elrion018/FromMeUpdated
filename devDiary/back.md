# back-end
1. 구성
----------------

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