// 문제60 : 번호 매기기

const students = [
  '강은지',
  '김유정',
  '박현서',
  '최성훈',
  '홍유진',
  '박지호',
  '권윤일',
  '김채리',
  '한지호',
  '김진이',
  '김민호',
  '강채연',
];

students.sort().map((v, i) => console.log(`번호: ${i + 1}, 이름: ${v}`));
