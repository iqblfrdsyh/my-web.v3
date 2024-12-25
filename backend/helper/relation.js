const { DataTypes } = require("sequelize");
const sequelize = require("../models/index.js").sequelize;

const User = require("../models/user.js")(sequelize, DataTypes);
const Skill = require("../models/skills.js")(sequelize, DataTypes);
const Project = require("../models/projects.js")(sequelize, DataTypes);
const Sosmed = require("../models/sosmed.js")(sequelize, DataTypes);
const TechStack = require("../models/techstack.js")(sequelize, DataTypes);
const Certificate = require("../models/certificates.js")(sequelize, DataTypes);

const UserSkills = require("../models/userskills.js")(sequelize, DataTypes);
const UserProject = require("../models/userprojects.js")(sequelize, DataTypes);
const UserSosmed = require("../models/usersosmeds.js")(sequelize, DataTypes);
const UserCertificate = require("../models/usercertificates.js")(
  sequelize,
  DataTypes
);
const ProjectTechStack = require("../models/projecttechstack.js")(
  sequelize,
  DataTypes
);

User.belongsToMany(Skill, {
  through: UserSkills,
  onDelete: "CASCADE",
  foreignKey: "userId",
  as: "skills",
});

Skill.belongsToMany(User, {
  through: UserSkills,
  onDelete: "CASCADE",
  foreignKey: "skill_id",
  as: "users",
});

User.belongsToMany(Certificate, {
  through: UserCertificate,
  onDelete: "CASCADE",
  foreignKey: "userId",
  as: "certificates",
});

Certificate.belongsToMany(User, {
  through: UserCertificate,
  onDelete: "CASCADE",
  foreignKey: "certificateId",
  as: "users",
});

User.belongsToMany(Project, {
  through: UserProject,
  onDelete: "CASCADE",
  foreignKey: "userId",
  as: "projects",
});

Project.belongsToMany(User, {
  through: UserProject,
  onDelete: "CASCADE",
  foreignKey: "projectId",
  as: "users",
});

Project.belongsToMany(TechStack, {
  through: ProjectTechStack,
  onDelete: "CASCADE",
  foreignKey: "projectId",
  as: "techStacks",
});

TechStack.belongsToMany(Project, {
  through: ProjectTechStack,
  onDelete: "CASCADE",
  foreignKey: "techStackId",
  as: "projects",
});

Sosmed.belongsToMany(User, {
  through: UserSosmed,
  onDelete: "CASCADE",
  foreignKey: "sosmedId",
  as: "users",
});

User.belongsToMany(Sosmed, {
  through: UserSosmed,
  onDelete: "CASCADE",
  foreignKey: "userId",
  as: "sosmeds",
});

module.exports = {
  User,
  Skill,
  UserSkills,
  Project,
  TechStack,
  Certificate,
  UserProject,
  Sosmed,
  UserSosmed,
  ProjectTechStack,
  UserCertificate,
};
