const express = require("express");
const { getSignedUrl } = require("@aws-sdk/cloudfront-signer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.get("/image", async (req, res, next) => {
  try {
    const signedUrl = getSignedUrl({
      url: "https://d3f34k5qua1ny3.cloudfront.net/" + process.env.OBJECT_NAME,
      // expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      dateLessThan: new Date(Date.now() + 1000 * 60 * 5),
      privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
      keyPairId: process.env.CLOUDFRONT_KEY_PAIR_ID,
    });
    console.log(`The Signed URL for Image is ${signedUrl}`);
    res.send(`The Signed URL for Image is ${signedUrl}`);
  } catch (err) {
    next(err);
  }
});

// app.get("/image", async (req, res) => {
//   const signedUrl = getSignedUrl({
//     url: "https://d3f34k5qua1ny3.cloudfront.net/" + process.env.OBJECT_NAME,
//     // expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
//     dateLessThan: new Date(Date.now() + 1000 * 60 * 5),
//     privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
//     keyPairId: process.env.CLOUDFRONT_KEY_PAIR_ID,
//   });
//   console.log(`The Signed URL for Image is ${signedUrl}`);
//   res.send(`The Signed URL for Image is ${signedUrl}`);
// });

app.listen(port, () => {
  console.log(`Xpress server running on port ${port}`);
});
