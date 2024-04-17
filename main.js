// main.js
// Capstone 2: Express
"use strict";

const express = require("express");
// 앱 설정
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");


/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);

/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);

/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */
app.use(errorController.pageNotFoundError);
// app.use(errorController.internalServerError);

// 3000번 포트로 리스닝 설정
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
