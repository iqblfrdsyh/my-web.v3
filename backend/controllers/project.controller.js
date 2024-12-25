const { trimmedValue, formatText } = require("../helper/functions");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const {
  Project,
  UserProject,
  User,
  TechStack,
  ProjectTechStack,
} = require("../helper/relation");

exports.getDataProject = async (req, res) => {
  try {
    const response = await Project.findAll({
      include: {
        model: TechStack,
        through: { attributes: [] },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        as: "techStacks",
      },
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

exports.createProject = async (req, res) => {
  try {
    const { title, description, link, techStackIds } = req.body;
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
        return res.status(422).json({
          msg: "Ukuran file tidak boleh melebihi 5MB.",
        });
      }

      const imageTimestamp = Date.now();
      const imageRandomString = crypto.randomBytes(8).toString("hex");
      const newImageName = `${imageTimestamp}-${imageRandomString}${imageExt}`;
      const uploadPath = `./public/images/projects/${newImageName}`;

      image_url = `${req.protocol}://${req.get(
        "host"
      )}/images/projects/${newImageName}`;

      await imageFile.mv(uploadPath);
    } else {
      image_url = `${req.protocol}://${req.get(
        "host"
      )}/images/projects/default-skill.png`;
    }

    if (!title.trim() || !description.trim() || !link.trim()) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Title, description, and link can't be just whitespace",
      });
    }

    const projectExist = (await Project.findAll()).map((data) =>
      data.title.toLowerCase()
    );

    if (projectExist.includes(title.toLowerCase())) {
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

    if (
      trimmedValue(title) ||
      trimmedValue(description) ||
      trimmedValue(link)
    ) {
      return res
        .status(400)
        .json({ status: 400, success: false, msg: "Can't be just whitespace" });
    }

    const newData = await Project.create({
      title: formatText(title),
      description,
      link,
      image_url: image_url || "",
    });

    if (Array.isArray(techStackIds) && techStackIds.length > 0) {
      const techStacks = await TechStack.findAll({
        where: {
          id: techStackIds,
        },
      });

      const validTechStackIds = techStacks.map((techStack) => techStack.id);
      const invalidTechStackIds = techStackIds.filter(
        (id) => !validTechStackIds.includes(id)
      );

      if (invalidTechStackIds.length > 0) {
        return res.status(404).json({
          status: 404,
          success: false,
          msg: `Tech Stack with the ids ${invalidTechStackIds.join(
            ", "
          )} not found`,
        });
      }

      const projectTechStackAssociations = techStacks.map((techStack) => {
        return ProjectTechStack.create({
          projectId: newData.id,
          techStackId: techStack.id,
        });
      });

      await Promise.all(projectTechStackAssociations);
    }

    await UserProject.create({
      userId,
      projectId: newData.id,
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

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.query;

    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({
        status: 404,
        success: false,
        msg: `Project with id ${id} not found`,
      });
    }

    const userProject = await UserProject.findOne({
      where: { projectId: id },
    });

    if (!userProject) {
      return res.status(403).json({
        status: 403,
        success: false,
        msg: "You don't have permission to delete this project",
      });
    }

    if (project.image_url) {
      const filePath = path.join(
        __dirname,
        "../public/images/projects/",
        path.basename(project.image_url)
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await UserProject.destroy({
      where: { projectId: id },
    });

    await Project.destroy({
      where: { id },
    });

    return res.status(200).json({
      status: 200,
      success: true,
      msg: `Project with id ${id} has been deleted`,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
    });
  }
};
