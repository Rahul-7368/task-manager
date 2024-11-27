require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");


// const taskModel = require("./models/task.model");


// const TaskService = require("./services/task.service");

// const TaskServiceInstance = new TaskService();
// console.log(
//   TaskServiceInstance.find,
//   TaskServiceInstance.create,
//   TaskServiceInstance.update,
//   TaskServiceInstance.delete
// );


// const {
//     getTasks,
//     createTask,
//     updateTask,
//     deleteTask,
//   } = require("./controllers/task.controller");
  
//   console.log(getTasks, createTask, updateTask, deleteTask);
  
const taskRoutes = require("./routes/task.route");

const app = express();
const PORT = 8082;
// const DB_URI = "mongodb://localhost:27017/task-manager";
const DB_URI = "mongodb+srv://kumarrahulgodda:PodXJEEC6xM3AEZf@task-manager.dpzc2.mongodb.net/?retryWrites=true&w=majority&appName=task-manager";

mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());


app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Backend listening on PORT ${PORT}!`);
});