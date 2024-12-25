const { trimmedValue, formatText } = require("../helper/functions");
const { Sosmed, UserSosmed, User } = require("../helper/relation");

exports.getAllSosmed = async (req, res) => {
  try {
    const response = await Sosmed.findAll();
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

exports.createSosmed = async (req, res) => {
  try {
    const { title, link } = req.body;
    const { userId } = req.params;

    let icon_url = "";

    if (req.files && req.files.icon) {
      const imageFile = req.files.icon;
      const imageExt = path.extname(imageFile.name).toLowerCase();
      const allowedTypes = [".png", ".jpg", ".jpeg"];
      const maxSize = 5000000;

      if (!allowedTypes.includes(imageExt)) {
        return res.status(422).json({
          msg: "Jenis file tidak valid. Hanya .png, .jpg, .jpeg yang diperbolehkan.",
        });
      }

      if (imageFile.size > maxSize) {
        return res.status(422).json({
          msg: "Ukuran file tidak boleh melebihi 5MB.",
        });
      }

      const imageTimestamp = Date.now();
      const imageRandomString = crypto.randomBytes(8).toString("hex");
      const newImageName = `${imageTimestamp}-${imageRandomString}${imageExt}`;
      const uploadPath = `./public/images/sosmed/${newImageName}`;

      icon_url = `${req.protocol}://${req.get(
        "host"
      )}/images/sosmed/${newImageName}`;

      await imageFile.mv(uploadPath);
    } else {
      icon_url = `${req.protocol}://${req.get(
        "host"
      )}/images/sosmed/default-sosmed.png`;
    }

    if (!title.trim() || !link.trim()) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Title and link can't be just whitespace",
      });
    }

    const sosmedExist = (await Sosmed.findAll()).map((x) =>
      x.title.toLowerCase()
    );

    if (sosmedExist.includes(title.toLowerCase())) {
      return res.status(409).json({
        status: 409,
        success: false,
        msg: `${title} already exists.`,
      });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        msg: `User with the id ${userId} not found`,
      });
    }

    const newData = await Sosmed.create({
      title: title.trim(),
      link,
      icon_url: icon_url || "",
    });

    await UserSosmed.create({
      userId,
      sosmedId: newData.id,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      msg: "Data created",
      data: newData,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
    });
  }
};
