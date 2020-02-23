const Question = () => {
  const questionList = {
    0: '지금 나를 슬프게 하는 것은 무엇인가요?',
    1: '아무에게도 들려줄 수 없는 솔직한 마음을 털어놔봐요.',
    2: '당신의 버킷 리스트 여행지는 어디인가요? 언제쯤 떠날건가요?',
    3: '10년 후 당신은 무엇을 하고 있을까요?',
    4: '내가 가장 자랑스러울 때는 언제인가요?',
    5: '내가 가장 갖고 싶은 것은 무엇인가요?',
    6: '나를 5글자로 표현해주세요.',
    7: '내가 되고 싶은 영화 속 주인공은 무엇인가요?',
  };
  let question = questionList[Math.floor(Math.random() * 8)];
  // {Math.random() * (max-min+1)} + min  (0 <= x < 1) >>> (0 <= x < 8)
  return question;
};
//차후에 이 부분을 서버로 옮기는 것은 어떨까? ToMeScreen으로 진입할 때마다 서버에 있는 글 중 하나 임의로 받아오기.

export default Question;
