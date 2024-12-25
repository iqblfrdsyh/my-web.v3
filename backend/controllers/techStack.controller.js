const { trimmedValue } = require("../helper/functions");
const { TechStack } = require("../helper/relation");

exports.getAllTech = async (req, res) => {
  try {
    const response = await TechStack.findAll();

    if (!response.length) {
      return res
        .status(404)
        .json({ status: 404, success: false, msg: "Data not found" });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      total: response.length,
      data: response,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};

exports.createTech = async (req, res) => {
  try {
    const { title } = req.body;

    if (trimmedValue(title)) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Can't be just whitespace",
      });
    }

    const techExist = (await TechStack.findAll()).map((data) =>
      data.title.toLowerCase()
    );

    if (techExist.includes(title.toLowerCase())) {
      return res
        .status(409)
        .json({ status: 409, success: false, msg: `${title} already exist.` });
    }

    const newTech = await TechStack.create({ title });

    return res.status(201).json({
      status: 201,
      success: true,
      data: newTech,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};
