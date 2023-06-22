# S3 Bucket and CloudFront Distribution Assignment

This repository contains the code for a Node.js Express server that interacts with an S3 bucket via CloudFront distribution. The server allows you to obtain a signed URL with a 5-minute expiry time for an image file uploaded to the S3 bucket via the CloudFront distribution.

## Prerequisites

Before running this application, ensure that you have the following:

- Node.js installed on your machine


## **Environment Variables

This application requires the following environment variables to be set:

- `CLOUDFRONT_PRIVATE_KEY`: The private key for your CloudFront key pair.
- `CLOUDFRONT_KEY_PAIR_ID`: The key pair ID associated with your CloudFront key pair.

- `OBJECT_NAME`: The name of the object which is stored in the bucket.

- `PORT`: PORT number where the application should run.

Please set these environment variables before running the application.

## Installation

1. Clone the repository:

```
git clone <repository_url>

```
2. Install dependencies:

```
cd server
npm install

```
## Usage

1. Start the server:

```npm start```


2. Access the server at `http://localhost:3000`.

3. Make a GET request to `/image` : ```http://localhost:3000/image```


This will make an API call to the CloudFront distribution and retrieve a signed URL for the image file uploaded to the S3 bucket.

## Additional Information

- The server code can be found in `index.js`.
- The `getSignedUrl` function from the `@aws-sdk/cloudfront-signer` library is used to generate the signed URL.
- Simple error handling has been implemented using middleware and try-catch blocks to prevent crashes.

*Environment Variables : The `.env` file containing sensitive information is included in this repository for testing purposes. In a production environment, make sure to keep this file secure and never commit it to a public repository.
