# Vue_study

개발 환경
- Visual Studio Code
(아래 패키지 설치, ctrl+ shift + x)
- vetur
- html css support
- vue 3 snippets


1. Vue_prac
- node_modules 파일 제외
- 사진 업로드, export/import 문법, script/template 키워드 실습
- select box 생성 및 select box에서 값 선택 시 문자열 출력
<br/>
향후 보완 계획:
<br/>
- select box에서 특정 값 선택 시 사진 출력 구현
<br/>
- select box 이외의 버튼 실습
<br/>
2. vue_todo
- 글


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
