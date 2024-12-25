const { User, Skill, Certificate, Project, Sosmed } = require("../helper/relation");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { trimmedValue, formatText } = require("../helper/functions");

exports.getData = async (req, res) => {
  try {
    const response = await User.findAll({
      include: [
        {
          model: Skill,
          as: "skills",
          through: { attributes: [] },
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Certificate,
          as: "certificates",
          through: { attributes: [] },
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Project,
          as: "projects",
          through: { attributes: [] },
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Sosmed,
          as: "sosmeds",
          through: { attributes: [] },
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });

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

exports.createData = async (req, res) => {
  try {
    const {
      fullname,
      email,
      profession,
      year_experience,
      description,
      about_desc,
      no_handphone,
      address,
    } = req.body;

    let profile_url = "";

    if (req.files && req.files.profile_image) {
      const imageFile = req.files.profile_image;
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
      const uploadPath = `./public/images/profile/${newImageName}`;

      profile_url = `${req.protocol}://${req.get(
        "host"
      )}/images/profile/${newImageName}`;

      imageFile.mv(uploadPath, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ msg: "Error upload file", error: err.message });
        }
      });
    } else {
      profile_url = `${req.protocol}://${req.get(
        "host"
      )}/images/profile/default-profile.png`;
    }

    if (
      trimmedValue(fullname) ||
      trimmedValue(profession) ||
      trimmedValue(email) ||
      trimmedValue(year_experience) ||
      trimmedValue(description) ||
      trimmedValue(about_desc) ||
      trimmedValue(no_handphone) ||
      trimmedValue(address)
    ) {
      return res
        .status(400)
        .json({ status: 400, success: false, msg: "Can't be just whitespace" });
    }

    const newData = await User.create({
      fullname: formatText(fullname),
      email,
      profession: formatText(profession),
      year_experience,
      description,
      about_desc,
      no_handphone,
      address: formatText(address),
      profile_url,
    });

    return res
      .status(201)
      .json({ status: 201, success: true, msg: "Data Created", data: newData });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    const { id } = req.query;
    const {
      fullname,
      email,
      profession,
      year_experience,
      description,
      about_desc,
      no_handphone,
      address,
    } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: 404, success: false, msg: "User tidak ditemukan" });
    }

    let profile_url = user.profile_url;

    if (req.files && req.files.profile_image) {
      const imageFile = req.files.profile_image;
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

      if (profile_url && !profile_url.includes("default-profile.png")) {
        const oldImagePath = path.join(
          __dirname,
          "../public/images/profile/",
          path.basename(profile_url)
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      const imageTimestamp = Date.now();
      const imageRandomString = crypto.randomBytes(8).toString("hex");
      const newImageName = `${imageTimestamp}-${imageRandomString}${imageExt}`;
      const uploadPath = `./public/images/profile/${newImageName}`;

      profile_url = `${req.protocol}://${req.get(
        "host"
      )}/images/profile/${newImageName}`;

      imageFile.mv(uploadPath, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ msg: "Error upload file", error: err.message });
        }
      });
    }

    user.fullname = fullname || user.fullname;
    user.email = email || user.email;
    user.profession = profession || user.profession;
    user.year_experience = year_experience || user.year_experience;
    user.description = description || user.description;
    user.about_desc = about_desc || user.about_desc;
    user.no_handphone = no_handphone || user.no_handphone;
    user.address = address || user.address;
    user.profile_url = profile_url;

    await user.save();

    return res
      .status(200)
      .json({ status: 200, success: true, msg: "Data Updated", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const { id } = req.query;

    const user = await User.findByPk(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: 404, success: false, msg: "User tidak ditemukan" });
    }

    if (user.profile_url && !user.profile_url.includes("default-profile.png")) {
      const imagePath = path.join(
        __dirname,
        "../public/images/profile/",
        path.basename(user.profile_url)
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await user.destroy();

    return res
      .status(200)
      .json({ status: 200, success: true, msg: "Data Deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};
