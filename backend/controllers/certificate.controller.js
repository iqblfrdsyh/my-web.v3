const { User, Certificate, UserCertificate } = require("../helper/relation");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { formatText, trimmedValue } = require("../helper/functions");

exports.getDataCtf = async (req, res) => {
  try {
    const response = await Certificate.findAll();

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

exports.createCtf = async (req, res) => {
  try {
    const { title, author, code_licence } = req.body;
    const { userId } = req.params;

    let image_url = "";

    if (req.files && req.files.image) {
      const imageFile = req.files.image;
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
      const uploadPath = `./public/images/certificates/${newImageName}`;

      image_url = `${req.protocol}://${req.get(
        "host"
      )}/images/certificates/${newImageName}`;

      imageFile.mv(uploadPath, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ msg: "Error upload file", error: err.message });
        }
      });
    } else {
      image_url = `${req.protocol}://${req.get(
        "host"
      )}/images/certificates/default-ctf.png`;
    }

    if (trimmedValue(title))
      return res
        .status(400)
        .json({ status: 400, success: false, msg: "Can't be just whitespace" });

    const existCertificate = (await Certificate.findAll()).map((data) =>
      data.title.toLowerCase()
    );

    if (existCertificate.includes(title.toLowerCase())) {
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

    const newDataCtf = await Certificate.create({
      title: formatText(title),
      author: formatText(author),
      code_licence,
      image_url,
    });

    await UserCertificate.create({
      userId,
      certificateId: newDataCtf.id,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      msg: "Data Created",
      data: newDataCtf,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};

exports.deleteCtf = async (req, res) => {
  try {
    const { id } = req.query;

    const certificate = await Certificate.findByPk(id);

    if (!certificate) {
      return res.status(404).json({
        status: 404,
        success: false,
        msg: `Certificate with id ${id} not found`,
      });
    }

    const userCertificate = await UserCertificate.findOne({
      where: { certificateId: id },
    });

    if (!userCertificate) {
      return res.status(403).json({
        status: 403,
        success: false,
        msg: "You don't have permission to delete this certificate",
      });
    }

    if (certificate.image_url) {
      const filePath = path.join(
        __dirname,
        "../public/images/certificates/",
        path.basename(certificate.image_url)
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await UserCertificate.destroy({
      where: { certificateId: id },
    });

    await Certificate.destroy({
      where: { id },
    });

    return res.status(200).json({
      status: 200,
      success: true,
      msg: `Certificate ${certificate.title} has been deleted`,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
    });
  }
};
