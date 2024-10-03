const express = require("express");
const dotenv = require("dotenv");
const openApiRoutes = require("./src/routes/open-ai-routes");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

// Open API routes
app.use("/api", openApiRoutes);

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
