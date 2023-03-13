import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

import { helloRoutes, apiRoutes } from "./routes";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression()); // compress responses to enable server-sent events
app.use(helmet());

// routes
app.use("/", helloRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(
		`Upload Events service listening at ${process.env.SERVER_URL}${PORT}`
	);
});