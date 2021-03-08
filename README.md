# Svelte template(Rollup)으로 프로젝트 생성
```shell
# 원하는 경로에 접근
cd Desktop

# 프로젝트 생성
# npx degit sveltejs/template 프로젝트(폴더)_이름
npx degit sveltejs/template svelte-trello-app
```
## 기본 패키지
* `@rollup/plugin-commonjs`: CommonJS 모듈을 ES6로 변환합니다.(15버전을 사용합니다)
* `@rollup/plugin-node-resolve`: node_modules에서 써드파티 모듈을 사용하기 위해 필요합니다.(9버전을 사용합니다)
* `rollup`: 프로젝트를 번들링하는 핵심 패키지입니다.
* `rollup-plugin-livereload`: 실시간 Reload 서버를 사용합니다.
* `rollup-plugin-svelte`: Svelte 싱글 파일 컴포넌트(SFC)를 컴파일합니다.
* `rollup-plugin-terser`: 컴파일 결과를 압축해 더 작은 번들 결과를 만들 수 있습니다.
* `svelte`: SvelteJS 핵심 패키지입니다.
* `sirv-cli`: SPA 서버를 실행합니다.

## 주요 패키지 업데이트
```shell
npm i -D svelte@^3 @rollup/plugin-commonjs@^15 @rollup/plugin-node-resolve@^9
```

# CSS
## reset css
[reset css](https://www.jsdelivr.com/package/npm/reset-css)
## node-sass
```shell
npm i -D svelte-preprocess node-sass
```
## 공급업체 접두사 후처리 
```shell
npm i -D autoprefixer postcss
```
### package.json에 browserList 추가
`> 1%` : 브라우저 점유율이 1%이상인 모든 브라우저

`last 2 versions` : 지원하는 브라우저 버전 
```json
{
  ...
  "browserslist": [
    "> 1%", 
    "last 2 versions"
  ]   
}
```

# Fonts
[google fonts](https://fonts.google.com/)