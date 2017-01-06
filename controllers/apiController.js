function index(req, res) {
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

<<<<<<< HEAD


=======
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3
module.exports.index = index;
