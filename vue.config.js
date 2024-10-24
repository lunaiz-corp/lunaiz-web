module.exports = {
    // 개발 서버 설정
    devServer: {
        // 프록시 설정
        proxy: {
            // 프록시 요청을 보낼 api의 시작 부분
            '/cdn': {
                // 프록시 요청을 보낼 서버의 주소
                target: 'https://cdn.lunaiz.com',
                changeOrigin: true, // 호스트 헤더를 타겟 URL로 변경
                pathRewrite: { '^/cdn': '' }, // '/cdn' 경로를 제거
            }
        }
    }
};
