# Glossary of installations + notetaking

`npm install express mongoose dotenv helmet morgan nodemon`

### **Express**

- A well-known framework that is used for Node.js, link to be found [here](https://expressjs.com/).

### **Mongoose**

- A MongoDB library used for creating data models and schemas, link to be found [here](https://mongoosejs.com/docs/guide.html).

- To test whether you are connected to MongoDB, the following way is the updated way to check:

`const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
};`

### **dotenv**

- A module that is used to store secret keys using a process.env file, link to be found [here](https://www.npmjs.com/package/dotenv).

### **helmet**

- A package that helps secure a HTTP request by securing vulnerable data during this process, link to be found [here](https://www.npmjs.com/package/helmet)

### **morgan**

- A request logger middleware which returns relevant properties, link to be found [here](https://www.npmjs.com/package/morgan).

### **nodemon**

- A package that listens to the modifications of a node.js file and prevents constant need to reset, link to be found [here](https://www.npmjs.com/package/nodemon).
