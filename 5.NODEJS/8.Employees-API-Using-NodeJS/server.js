const http = require("http");
//mimic (database)
const employees = [
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Agnes" },
];
//2. Define the handler
const requestHandler = (req, res) => {
  const { method, url } = req;
  const parts = url.split("/");
  const id = parts[2];
  //!Get all employees
  if (method === "GET" && url === "/employees") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  }
  //!Get single employee
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employee));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Employee not found" }));
    }
  }

  //! Create new employee
  else if (method === "POST" && url === "/employees") {
    let body = "";
    //Listen to the event of making post reques
    req.on("data", (chunk) => {
      body += chunk;
    });
    //Send the response
    req.on("end", () => {
      const newEmployee = JSON.parse(body);
      employees.push(newEmployee);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          newEmployee,
          employees,
        })
      );
    });
  }
};

//3. Create the server
const server = http.createServer(requestHandler);

//4. Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
