import Ws from "../app/Services/Ws";
Ws.boot();

Ws.io.on("connection", (socket) => {
  console.log("eita");
  socket.emit("news", { hello: "world2" });

  socket.on("teste", (data) => {
    console.log(data);
    console.log("eita");
  });
});
