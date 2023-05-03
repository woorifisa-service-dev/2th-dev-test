let progress = document.getElementById("progress1");
let num = progress.textContent.substring(0, 1);
let main = document.getElementsByClassName("main").item(0);

let [question1, question2] = document.getElementsByClassName("qcontent");

let score = [0, 0];

const arr = [
  [
    "개발 도중 의도치 않았는데 원하는 결과가 나왔을 때 나는?",
    "이성을 볼 때 우선순위?",
    "연인과 싸우고나서 풀때?",
    "당신의 성향은?",
    "영화를 볼 때 나는?",
    "드디어 꿈같은 연휴가 시작되었다. 나는… ",
    "새로운 프로젝트에 투입하게 되었다. 나는... ",
    "기말고사 3일전 공부를 시작하려는데 갑자기 친구가 찾아와 놀자고 한다면?",
    "당신은 어떤 옷 스타일을 추구하나요?",
    "10년지기 친구와 동시에 한 이성을 좋아하게 됐을 때 나는 어떻게 할까?",
    "최신 맥북이 나왔다 나의 반응은...?",
  ],
  [
    "결과가 제대로 나왔으니 일단 넘어간다",
    "외모",
    "바로바로 푼다",
    "E",
    "화려한 영상미를 주로 보는 편이다",
    "날도 좋은데 여행을 간다",
    "개념공부를 완벽히 하고 투입되는 것을 원한다",
    "공부 그게 뭔데, 바로 놀러간다",
    "SIMPLE IS THE BEST",
    "사랑을 쟁취한다",
    "디자인 너무 예쁘다",
  ],
  [
    "코드를 다시 살펴본다",
    "마음",
    "시간을 갖고 생각 정리 후 대화한다",
    "I",
    "영상의 스토리를 보는 편이다",
    "집에서 넷플릭스, 게임 ,영화까지 즐긴다",
    "일단 투입되고 개발부터 하는 것을 원한다",
    "그래도 계획은 지켜야지.. 다음에 놀자고한다",
    "조금은 화려한게 좋다",
    "친구에게 양보한다",
    "M2칩 탑재했다고? 성능 미쳤다 !",
  ],
];

question1.addEventListener("click", func1);
question2.addEventListener("click", func2);

function func1() {
  num++;
  progress.textContent = `${num}/12`;
  score[0]++;
  main.textContent = arr[0][num - 2];
  question1.textContent = arr[1][num - 2];
  question2.textContent = arr[2][num - 2];
  console.log("현재 num: " + num);
  if (num == 13) {
    linkResult();
  }
}

function func2() {
  num++;
  progress.textContent = `${num}/12`;
  score[1]++;
  main.textContent = arr[0][num - 2];
  question1.textContent = arr[1][num - 2];
  question2.textContent = arr[2][num - 2];
  if (num == 13) {
    linkResult();
  }
}
function linkResult() {
  let result = "풀스택";
  if (score[0] <= 4) {
    result = "백엔드";
  } else if (score[0] > 7) {
    result = "프론트";
  }
  location.href = "result.html?result=" + result;
}
