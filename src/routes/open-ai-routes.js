const express = require('express');
const router = express.Router();
const openApiController = require('../controllers/open-ai-controller');

router.post('/ask', openApiController.createOpenApiData);

module.exports = router;
