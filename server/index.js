const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // 本番環境では適切なオリジンを設定
  },
});

app.use(cors());

// サーバー側でメッセージを保存する配列
const messages = [];

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.emit("Your id", socket.id);
  // 新しいクライアントに過去のメッセージを送信
  socket.emit("previous messages", messages);
  console.log("previous messages: ", messages);
  socket.on("chat message", (messageObj) => {
    // メッセージをサーバー側の配列に保存
    messages.push(messageObj);

    // すべてのクライアントにメッセージをブロードキャスト
    io.emit("chat message", messageObj);
    console.log("chat message: ", messageObj);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
