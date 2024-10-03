const openApiService = require("../services/open-ai-service");

const getOpenApiData = async (req, res) => {
  try {
    const data = await openApiService.fetchData();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createOpenApiData = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);

    const result = await openApiService.askGPT(data);
    res.status(200).json({ success: true, message: "Answer", result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getOpenApiData,
  createOpenApiData,
};
