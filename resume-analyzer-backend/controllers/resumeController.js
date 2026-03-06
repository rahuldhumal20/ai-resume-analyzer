const parseResume = require("../utils/resumeParser");

const analyzeResume = async (req, res) => {

    const filePath = req.file.path;

    const text = await parseResume(filePath);

    res.json({
        extractedText: text.substring(0, 500)
    });
};

module.exports = { analyzeResume };