# 원티드 프리온보딩 코스

React 프론트엔드 프리온보딩 선발과제

<!-- PROJECT SHIELDS -->
<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
</div>

<br />


배포 링크: https://seoysauce-wanted-pre-onbording.netlify.app

## 1. 결과물

- 반응형 웹

![responsive](https://user-images.githubusercontent.com/65898861/150792055-6f37dead-441a-479a-853e-20de8b832a78.gif)


- 슬라이드(캐러셀)동작

![carousel](https://user-images.githubusercontent.com/65898861/150778721-f57e4c68-27f4-4bb1-a440-16c2d5f38369.gif)


## 2. 구현한 기능

1. 상단 GNB(Global Navigation Bar)

   - 마크업 작업(HTML, CSS)
   - 메뉴클릭, hover 등의 이벤트는 구현하지 않음

2. 슬라이드(캐러셀)

   - 왼쪽/오른쪽 버튼 클릭 이벤트 → 카드 이동
   - 접속 시마다 랜덤으로 카드 보여주는 기능
   - 5초마다 자동으로 다음 카드 이동

3. 반응형(Responsive Web) 구현

   - GNB, 슬라이드 모두 반응형으로 구현

## 3. 설치 및 실행

### Prerequisites
1. npm
```
npm install npm@latest -g
```
### Installation
1. Repository clone
```
git clone https://github.com/gml9812/wanted-frontend-pre-on-boarding-mission.git
```
2. NPM package 설치
```
npm install
```
3. localhost에서 프로젝트 실행
```
npm start
```
## 4. 디렉토리 구조

```
.
├── public
└── src
    ├── SCSS
    ├── components
    |   └── icons
    ├── data
    └── utils
```
