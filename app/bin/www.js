const app = require('../app');
const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log("서버가 가동되었습니다.");
});
