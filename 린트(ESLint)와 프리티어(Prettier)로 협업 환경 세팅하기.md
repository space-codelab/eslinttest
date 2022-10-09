# 린트(ESLint)와 프리티어(Prettier)로 협업 환경 세팅하기

## ESLint 설치 및 사용법
```
npm install eslint
```

### .eslintrc.js 만들기

```
touch .eslintrc.js
```

### 빈 객체를 만들어서 노드 형식의 모듈을 생성합니다.
_.eslintrc.js_
```
module.exports = {

}

```


### npm 스크립트의 “lint” 라고 명령어를 등록합니다.
::"lint": "eslint src”,::
_package.json_
```
{
  "name": "test3",
  "version": "1.0.0",
  "description": "test3",
  "main": "index.js",
  "scripts": {
    "start": "node src/app.js",
    "lint": "eslint src",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "sikim",
  "license": "ISC",
  "dependencies": {
    "eslint": "^8.25.0",
    "express": "^4.18.2"
  }
}
```

### 오류 발생 : TEST#1
#### 1. 오류 작성
::console.log()::
::(function() {})()::
_app.js_
```
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
console.log()
(function() {})()

app.get('/', function(req, res){
    res.send('root page');
});

app.get('/start', function(req, res){
    res.send('start page');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on port ' + server.address().port);
})

```



#### 2. 규칙 추가
[no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
```
module.exports = {
    rules: {
        "no-unexpected-multiline": "error"
    }
}

```


#### 3.ESLint 검사
![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.04.07.png)
#### 4.오류 수정 후 재 lint 검사
::console.log();::
::(function() {})();::

![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.05.27.png)

### 오류발생 : TEST#2
#### 1. 오류 작성
::console.log();;;;;;;::
_app.js_
```
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
console.log();;;;;;
(function() {})();

app.get('/', function(req, res){
    res.send('root page');
});

app.get('/start', function(req, res){
    res.send('start page');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on port ' + server.address().port);
})

```

#### 2. 규칙 추가
[no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
_.eslintrc.js_
```
module.exports = {
    rules: {
        "no-unexpected-multiline": "error",
        "no-extra-semi": "error"
    }
}
```

#### 3. ESLint 검사
![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.15.23.png)

#### 4. fix 옵션
::  5 errors and 0 warnings potentially fixable with the `--fix` option.::

**fix옵션을 추가하고 실행**
_package.json_
```
{
  "name": "test3",
  "version": "1.0.0",
  "description": "test3",
  "main": "index.js",
  "scripts": {
    "start": "node src/app.js",
    "lint": "eslint src --fix",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "sikim",
  "license": "ISC",
  "dependencies": {
    "eslint": "^8.25.0",
    "express": "^4.18.2"
  }
}
```

![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.23.05.png)


### 자동으로 수정할 수 있는 규칙
> Rules   

![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.25.42.png)

> extends: recommended  
_.eslintrc.js_
```
module.exports = {
    env: {
        node: true
    },
    extends: [
        "eslint:recommended"
    ]
}
```


## Prettier 설치 및 사용법
[prettier](https://prettier.io/)

```
npm install prettier
```
![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.49.40.png)

### prettier 를 사용한 코드 검사
> 결과를 터미널에 출력  

```
 npx prettier src/**/*
```

> 코드 변경  
```
npx prettier src/**/* --write
```

![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.54.15.png)

### 포매팅
코드의 일관성을 유지해줌

### 통합방법
프리티어는 eslint와 통합하는 방법을 제공

**eslint-config-prettier**
**eslint-plugin-prettier**

```
npm install eslint-config-prettier eslint-plugin-prettier
```

![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.00.11.png)
**.eslintrc.js에 추가**
```
module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ]
}
```

### 오류발생:
1. 오류 작성
::const foo = '사용하지 않는 변수’::

::console.log();;;;;;;::
_app.js_
```
var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);


const foo = '사용하지 않는 변수'

console.log();;;;;;;

app.get("/", function (req, res) {
  res.send("root page");
});

app.get("/start", function (req, res) {
  res.send("start page");
});

server.listen(3000, "127.0.0.1", function () {
  console.log("Server listen on port " + server.address().port);
});


```

2. ESLint 검사
![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.08.31.png)

### 자동화
**깃 훅을 사용하는 방법**
**에디터 확장 도구를 사용하는 방법**

#### 깃 훅(Git hook)을 사용하는 방법
1. Husky 설치
```
npm install husky
```
2. Package.json 에 설정을 추가
```
"husky": {
	"hooks": {
		"pre-commit": "echo \"이것은 커밋전에 출력됨\""
	}
}
```
3. 훅이 정상 동작하는 지 확인
```
git commit --allow-empty -m "빈 커밋"
```
4. Pre-commit 수정
```
"husky": {
	"hooks": {
		"pre-commit": "npm run lint"
	}
}
```
5. 커밋할때 “변경된 파일만 린트로 검사”
**lint-staged**

패키지 설치
```
npm install lint-staged
```

Package-json 수정
```
"husky": {
	"hooks": {
		"pre-commit": "lint-staged"
	}
}
"lint-staged": {
	"*.js": "npm run line"
}
```

#### 디터 확장 도구를 사용하는 방법
1. eslint 익스텐션 설치
![](%E1%84%85%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3(ESLint)%E1%84%8B%E1%85%AA%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%84%8B%E1%85%A5(Prettier)%E1%84%85%E1%85%A9%20%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.19.34.png)
2. Vscode 설정파일 수정 
::"eslint.enable":true::
_setting.json_ 또는 [cmd + ,]
```
{
    "terminal.integrated.fontFamily": "Source Code Pro for Powerline",
    "editor.formatOnSave": true,
    "javascript.preferences.quoteStyle": "single",
    "eslint.enable":true
}

```

저장할때 코드를 다 고쳐버리는 옵션
    ::"editor.codeActionsOnSave":{::
        ::"source.fixAll.eslint": true::
    ::}::
_setting.json_
```
{
    "terminal.integrated.fontFamily": "Source Code Pro for Powerline",
    "editor.formatOnSave": true,
    "javascript.preferences.quoteStyle": "single",
    "eslint.enable": true,
    "editor.codeActionsOnSave":{
        "source.fixAll.eslint": true
    }
}

```

#codelab/eslint