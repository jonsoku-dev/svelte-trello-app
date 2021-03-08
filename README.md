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

# alias

```shell
npm i -D @rollup/plugin-alias
```

# 추가 패키지

rollup 을 사용하면서 어려운 내용은 노드기본모듈을 지원하지 않는다는 점이다. 노드 기본모듈을 rollup에서 사용하고싶다면,
`rollup-plugin-node-builtins` 과 `rollup-plugin-node-globals`을 추가해야한다.

* `@rollup/plugin-alias`: 경로 별칭을 사용해 더 편리하게 모듈을 가져올 수 있습니다.
* `@rollup/plugin-strip`: 배포용 제품은(개발 모드가 아닐 때) console.log 같은 Console 명령을 제거하는 것이 좋습니다.
* `rollup-plugin-node-builtins`: Node 내장 API를 사용할 수 있습니다.
* `rollup-plugin-node-globals`: 일부 Node 모듈이 필요로 하는 전역 API를 사용할 수 있습니다.
* `rollup-plugin-replace`: 번들 파일의 문자를 대체합니다. 문제가 발생하는 코드를 다른 코드(코드)로 대체 실행하기 위해 사용합니다.
* `svelte-preprocess`: PostCSS(Autoprefixer), SCSS, TypeScript 등을 지원하는 Svelte 전 처리기입니다.
* `autoprefixer`: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.(9버전을 사용하면 내부에서 postcss를 설치합니다, 10버전 이상은 postcss를 별도 설치해야
  합니다)
* `node-sass`: SCSS를 CSS로 컴파일합니다.
* `crypto-random-string`: ID로 사용할 고유한 랜덤 문자열을 생성합니다.
* `sortablejs`: Drag and Drop으로 목록을 쉽게 정렬할 수 있습니다.
* `lodash`: 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.

```shell
npm i -D @rollup/plugin-alias @rollup/plugin-strip rollup-plugin-node-builtins rollup-plugin-node-globals rollup-plugin-replace svelte-preprocess autoprefixer node-sass crypto-random-string sortablejs lodash
```