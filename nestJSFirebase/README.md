# Next.js 어플리케이션 BoilerPlate

## 구동 방법
+ Prerequsite
  + 필수 전역 모듈 설치
    `npm i -g firebase-tools`
+ 셋팅
  + `npm run install`
+ *유의사항
  + Powershell로 구동 안 됨 (react, react-dom 등 모듈을 전역으로만 찾음.) -> Bash로 구동해야함 (배포도 마찬가지)
+ 개발 & 빌드
  + `npm run dev`
+ 배포버전 로컬에서 돌리기
  + `npm run serve`
+ 배포
  + `npm run deploy`
+ 배포 폴더 비우기
  + `npm run clean`
---

## 참고 정보

+ 아래 샘플코드를 참고하여 만듦
  + https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting-and-typescript
  + 사용법은 https://github.com/segmentio/create-next-app#overview 참고