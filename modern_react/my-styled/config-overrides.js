// 프로젝트 경로에 설정 파일 생성하기
const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
    ...addBabelPlugins(
        "styled-jsx/babel"
    )
);