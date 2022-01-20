const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });
  conn.on("connect", () => console.log("Successfully connected to game server"));
  conn.on('connect', () => {
    conn.write('Name: CWR');
    //conn.write("Move: up");
    // setInterval(function() {
    //   conn.write("Move: up");
    // },50);
    
  });


  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  // code that does something

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = {connect};