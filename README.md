# Vue_study

개발 환경
- Visual Studio Code
(아래 패키지 설치, ctrl+ shift + x)
- vetur
- html css support
- vue 3 snippets
<br/>
<br/>


1. Vue_prac
- node_modules 파일 제외
- 사진 업로드, export/import 문법, script/template 키워드 실습
- select box 생성 및 select box에서 값 선택 시 문자열 출력
2. vue_todo, vue_bstp
- 인스턴스/ 컴포넌트 기본 기본 개념(인스턴스 lifecycle: created/mounted
- 이벤트 버스/props(props 인자 전달 방식이 더 유용하다 생각됨, 부모/자식 컴포넌트 개념에서 사용, 이벤트 버스의 경우 동일한 레벨의 자식 컴포넌트 사이 통신에 유용)
- 뷰 라우터(nested router/named view, nested 보다는 named view 방식이 재사용성이나 구현 측면에서 유리하다 생각됨, 페이지 간 이동시 라우터 사용)
- HTTP 통신(뷰 리소스/axios, cdn/npm 방식 존재, axios 방식이 JSON 추가 파싱이 필요없어서 유리하다 생각됨)
- 뷰 템플릿(데이터 바인딩/js 표현식/디렉티브/이벤트 처리/고급 템플릿 기법, v-bind(databinding), v접두사 표현식(디렉티브 <중요>), 이벤트 처리 부분이 핵심 + computed/methods 속성의 차이(캐싱측면))
- SFC(싱글 파일 컴포넌트) 이해 ( .vue 확장자 파일 1개 = 뷰 app 구성 컴포넌트 1개 )
- 뷰 로더
- 반응형 웹 디자인
- 정리: named view/props 방식으로 "할일관리앱(웹앱)" 구현
- 0904: view router, eslintrc 패키지 추가 설치 및 리팩토링(일부 오류 존재, modal button 수정 예정)
3. vue-til-server, vue-til-3
- 0910 업데이트
- server: nodeJs swagger API(gitbash에서 npm run dev), front: vueJS3(terminal에서 npm run serve)
- Mongocloud DB cluster 생성 후 API 서버에 연결하여 테스트 진행
- swagger: API 자동화 문서, 서버에 직접적인 데이터 전송/응답을 할 수 있음
- vue.config.js 파일에 webpack에서 제공하는 overlay 속성을 false 로 설정시 오류(eslint에러) overlay 무시가능, 생산성 증대 (eslint 에러는 콘솔/터미널만 찍히고 화면에는 연관이 없게됨)
- ESlint와 prettier 이해, eslint: js코드에서 에러가 날 수 있는 것들에 대한 가능성을 제거, js문법 보조 검사, prettier(코드 정리 도구): eslint에서 설정(eslint의 rule과 충돌됨, 다른 개발 환경에서도 prettier로 같은 문법 적용가능)
- 절대경로를 이용하는 이유: 상대 경로로 사용할 시 폴더 레벨이 달라지면 번거로워짐(@/ 방식의 절대경로가 유리, jsconfig.json 파일 이용)
- 뷰 스타일 가이드 필독 (https://v2.vuejs.org/v2/style-guide/#Priority-A-Rules-Essential-Error-Prevention)
- 코드 스플리팅(성능최적화, 필요한 페이지만 먼저 가져오고 다른 페이지는 url 호출할 때만 가져옴, 적용방법: index.js에 js 화살표 문법 사용)
- SPA에서 어떤 페이지에 코드 스플리팅 적용할지 고민할 것
- 라우터 리다이렉트(view router는 내부에 functional component로 구현되어 있음, '/' path에 redirect 값 설정)
- 라우터 콜백 기능 (라우터 속성에 정해지지 않은 url에 반응하는 법, path: '/:pathMatch(.*)*' 해당 경로에 대한 컴포넌트 선언)
- v-on은 @로 대체가능
- @submit.prevent: prevent의 경우 제출 후 페이지 이동하는 기본동작, 새로고침을 막을 수 있음
- 0912: 동작 form을 비동기 처리, async await
- chrome vue에서 console, network -> payload(데이터 전송이 정상적인지와 response number 확인, response 확인
- 대부분의 백엔드 api는 하나의 endpoint를 바라보게 되어있음
- 공통 / 환경변수 파일, axios.create() 요청할 때 공통 설정들을 넣을 수 있음, baseURL: 옵션, .env 파일 생성, /api/index.js 의 axios 코드 확인
- env 파일 설정시 VUE_APP_ 접두사가 붙은 변수는 자동 로드, process.env.VUE_APP_API_URL 방식으로 index.js에서는 사용
- env 파일 규칙, env.development 로컬, env.production 배포, env dev/prod 공통



<br/>
향후 보완 계획:
<br/>
- select box에서 특정 값 선택 시 사진 출력 구현
<br/>
- select box 이외의 버튼 실습
<br/>
<br/>


[참고]
Git_Bash 활용(sourcetree 활용 시 100MB 이상 파일과 private project에 대해 추가 작업필요)
1. Git_bash 실행 후 push할 폴더/파일 경로로 이동
2. git init (로컬 저장소 만들기)
3. git status (현재 폴더에 있는 파일들 확인)
4. git add [폴더명 or 파일명] (로컬 저장소에 파일 올려줌)
5. push 및 commit
   - git commit -m "push 메시지명"
6. 올리려는 깃 주소를 복사하여 아래 명령어 실행(저장소 연결)
   - git remote add origin [repository 주소]
   - token 이용시 'token'@ 을 깃 주소 앞에 포함
7. git remote -v (로컬저장소 원격저장소로 연결)
8. git push orgin [branch] (commit 해놨던 파일들을 원격저장소로 push)
<오류 케이스>
- 공통된 commit 지점이 없다면 push 불가(강제 push 시 git push origin +[branch] 명령어 실행)
- permission 관련 에러와 requested URL returned error: 403 ~~ 이런 에러메시지 발생 시 window 제어판 -> 사용자 계정 -> 자격 증명 관리 -> github 계정(일반 자격 증명) 삭제 후 위 1~8 과정 재시도

[git 규칙]
- feat 		: 새로운 기능 추가
- fix 		: 버그 수정
- docs 		: 문서 수정
- style 	: 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
- refactor 	: 코드 리팩토링
- test 		: 테스트 코드, 리팽토링 테스트 코드 추가
- chore 	: 빌드 업무 수정, 패키지 매니저 수정
