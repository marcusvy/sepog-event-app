const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000; //proxy.config.json
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    "online": true
  });
});

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});
