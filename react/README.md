# Qustory admin

## 구동 방법
+ Prerequsite
  + 필수 전역 모듈 설치
    `npm i -g firebase-tools npm-run-all react-scripts-ts`
+ 셋팅
  + `npm install`
+ 개발
  + `npm run start`
+ 빌드
  + `npm run build`
---

## Tip
+ npm에 type선언파일이 없을 경우 /src/types에 <모듈이름>.d.ts 라는 파일만들고 `declare module "<모듈이름>";` 코드를 추가하면 사용할 수 있다 (적용이 안되면 VS Code를 껐다가 다시 켜보기).

## 아래 샘플 참고해서 만듦.
  + https://facebook.github.io/create-react-app/docs/adding-typescript
    + 수정한 것
      + sass셋팅, react-router, tslint파일 추가, 절대경로 사용 셋팅, editorconfig 추가, 유용한 폴더 추가(styles, types 등)
  + https://github.com/Microsoft/TypeScript-React-Starter
