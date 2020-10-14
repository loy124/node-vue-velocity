const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = 8000;
const io = require("socket.io")(server);
const cors = require("cors");
const {randomChart, randomArray} = require("./util/random");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// DB연동해서 값 가져오기
app.get("api/chart", (req, res) => {});

// DB연동해서 10초 간격으로 데이터 뿌려주기
// function randomChart() {
//   const x = Math.floor(Math.random() * 90) + 1;
//   const y = Math.floor(Math.random() * 90) + 1;
//   console.log(x, y);
//   return { x, y };
// }


io.on("connection", function (socket) {
  console.log(`Connection from Client: ${socket}`);
  // DB 연동해서 10초마다 데이터를 넘겨준다
  setInterval(() => {
    // const arr = Array(9).fill(null).reduce((acc, cur) => {
    //     acc.push(randomChart);
    //     return acc;
    // }, []);
    // console.log(arr);
    socket.emit("chat", {first:randomArray(), second:randomArray()});
    
  }, 1000);
  // setInterval(()=>{
  //     socket.on("chart" , function(){
  //         // DB를 끌어와서 받아서 보낸다 10초간격으로
  //         //
  //     })
  // }, 1000);

  // setInterval(() => {
  //     socket.on('chat', function(data){
  //         console.log(data);
  //         socket.emit("chat", {
  //             message: data.message
  //         })
  //     });

  // }, 1000);
  // setInterval(() => {
  //     socket.emit("chat", {
  //         message:"hello"
  //     });
  // }, 100);

  socket.on("chat", function (data) {
    console.log(`message from Client: ${data.message}`);

    const rtnMessage = {
      message: data.message,
    };
    // socket.broadcast.emit('chat', rtnMessage);
    socket.emit("chat", rtnMessage);
  });
});

server.listen(PORT, () => console.log(`this server listening on ${PORT}`));
