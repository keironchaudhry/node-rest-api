# Glossary of installations + notetaking

`npm install express mongoose dotenv helmet morgan nodemon`

### **Express**

- A well-known framework that is used for Node.js, link to be found [here](https://expressjs.com/).

- Struggled to get the localhost working - the solution was simple but took time to find; I was missing a () at the end of `app.use(express.json());` and then the localhost debugger warned me that I was also missing the same in `app.use(helmet());`.

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

- An example of what `morgan` does:

![morgan-snippet](/documentation/images/morgan%20snippet.png)

### **nodemon**

- A package that listens to the modifications of a node.js file and prevents constant need to reset, link to be found [here](https://www.npmjs.com/package/nodemon).

### **bcrypt**

- A package used to hash passwords so that they cannot be exposed when shown in the database, link to be found [here](https://www.npmjs.com/package/bcrypt).

- An exmaple of what `bcrypt` does in action:

![bcrypt-snippet](/documentation/images/bcrypt-snippet-1.png)
![bcrypt-snippet-2](/documentation/images/bcrypt-snippet-2.png)

### **Postman**

- A web server used to probe or build APIs (i.e., users can GET, POST, PUT etc. into a database), link to be found [here](https://web.postman.co/)
- Very quick/helpful in probing backend code where actual users aren't available