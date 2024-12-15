import express from "express";
import path from "path";
import notesRoute from "./routes/notesRoute";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files - single configuration
app.use(express.static(path.join(__dirname, "public")));

app.use("/notes", notesRoute);

