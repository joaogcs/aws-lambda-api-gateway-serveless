# Introduction

Run serverless application with AWS Lambda and AWS API Gate

---

### **How to install**

To install serverless command on console you need to install it globally (-g is not needed in linux)

```bash
yarn install -g serverless
```

Install all dependecies

```bash
yarn install
```

---

### Run locally

**With hot-reload using Nodemon**

```bash
yarn run dev
```

---

### This repository endpoints

If you try to access some endpoint that doesn't exist the app will return an error with a list of the available endpoints and methods.

---

### Upload to AWS Lambda

Run command to keep only production depencies

```
yarn run build
```

ZIP all files and you can now upload to AWS Lambda
