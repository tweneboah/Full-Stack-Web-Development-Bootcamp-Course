const http = require("http");
const url = require("url");
//2. Define the handler
const requestHandler = (req, res) => {
  const data = {
    id: 123,
    name: "Agnes Appiah",
    email: "agnes@gmail.com",
  };
  //Set the response header to application/json
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

//3. Create the server
const server = http.createServer(requestHandler);

//4. Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
