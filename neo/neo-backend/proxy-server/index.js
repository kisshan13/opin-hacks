import express from "express";
import proxy from "express-http-proxy";
import axios from "axios";

const app = express();

app.use("/", async (req, res, next) => {
  if (req.hostname === "localhost") {
    res.send("Our Website");
  } else {
    try {
      const subdomain = await axios.get(
        `http://localhost:3000/api/app/get/${req.hostname.split(".")[0]}`
      );

      proxy(`http://localhost:${subdomain?.data?.port}`, {
        // You can configure additional options here if needed
        proxyReqPathResolver: (req) => req.url,
      });
    } catch (err) {
      res.send("No Such page exists");
    }
  }
});

app.listen(3999, () => {
  console.log("Hello");
});
