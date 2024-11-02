const { Skill, UserSkills, User } = require("../helper/relation");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { formatText, trimmedValue } = require("../helper/functions");

exports.getDataSkill = async (req, res) => {
  try {
    const response = await Skill.findAll();

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

exports.createSkill = async (req, res) => {
  try {
    const { title } = req.body;
    const { userId } = req.params;

    let icon_url = "";

    if (req.files && req.files.icon_image) {
      const imageFile = req.files.icon_image;
      const imageExt = path.extname(imageFile.name).toLowerCase();
      const allowedTypes = [".png", ".jpg", ".jpeg"];
      const maxSize = 5000000;

      if (!allowedTypes.includes(imageExt)) {
        return res.status(422).json({
          msg: "Jenis file tidak valid. Hanya .png, .jpg, .jpeg yang diperbolehkan.",
        });
      }

      if (imageFile.size > maxSize) {
        return res
          .status(422)
          .json({ msg: "Ukuran file tidak boleh melebihi 5MB." });
      }

      const imageTimestamp = Date.now();
      const imageRandomString = crypto.randomBytes(8).toString("hex");
      const newImageName = `${imageTimestamp}-${imageRandomString}${imageExt}`;
      const uploadPath = `./public/images/skills/${newImageName}`;

      icon_url = `${req.protocol}://${req.get(
        "host"
      )}/images/skills/${newImageName}`;

      imageFile.mv(uploadPath, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ msg: "Error upload file", error: err.message });
        }
      });
    } else {
      icon_url = `${req.protocol}://${req.get(
        "host"
      )}/images/skills/default-skill.png`;
    }

    if (trimmedValue(title))
      return res
        .status(400)
        .json({ status: 400, success: false, msg: "Can't be just whitespace" });

    const existSkill = (await Skill.findAll()).map((data) =>
      data.title.toLowerCase()
    );

    if (existSkill.includes(title.toLowerCase())) {
      return res
        .status(409)
        .json({ status: 409, success: false, msg: `${title} already exist` });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        msg: `User with the id ${userId} not found`,
      });
    }

    const newDataSkill = await Skill.create({
      title: formatText(title),
      icon_url,
    });

    await UserSkills.create({
      userId,
      skill_id: newDataSkill.id,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      msg: "Data Created",
      data: newDataSkill,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const { id } = req.query;

    const skill = await Skill.findByPk(id);

    if (!skill) {
      return res.status(404).json({
        status: 404,
        success: false,
        msg: `Skill with id ${id} not found`,
      });
    }

    const userSkill = await UserSkills.findOne({
      where: { skill_id: id },
    });

    if (!userSkill) {
      return res.status(403).json({
        status: 403,
        success: false,
        msg: "You don't have permission to delete this skill",
      });
    }

    if (skill.icon_url) {
      const filePath = path.join(
        __dirname,
        "../public/images/skills/",
        path.basename(project.icon_url)
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await UserSkills.destroy({
      where: { skill_id: id },
    });

    await Skill.destroy({
      where: { id },
    });

    return res.status(200).json({
      status: 200,
      success: true,
      msg: `Skill ${skill.title} has been deleted`,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
    });
  }
};
