import {
  Input,
  Textarea,
  Button,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";

const Forms = {
  Profile: ({ formData, handleChange, handleFileChange }) => {
    return (
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <Input
          label="Fullname"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter your fullname"
          fullWidth
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          fullWidth
        />
        <Input
          label="Profession"
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder="Enter your profession"
          fullWidth
        />
        <Input
          label="Year of Experience"
          type="number"
          name="year_experience"
          value={formData.year_experience}
          onChange={handleChange}
          placeholder="Enter years of experience"
          fullWidth
        />
        <Textarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a short description about yourself"
          fullWidth
        />
        <Textarea
          label="About Description"
          name="about_desc"
          value={formData.about_desc}
          onChange={handleChange}
          placeholder="Provide additional details about yourself"
          fullWidth
        />
        <Input
          label="Phone Number"
          type="tel"
          name="no_handphone"
          value={formData.no_handphone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          fullWidth
        />
        <Textarea
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          fullWidth
        />
        <div className="col-span-2">
          <Input
            label="Profile Image"
            type="file"
            name="profile"
            onChange={handleFileChange}
            fullWidth
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <Button color="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    );
  },
  Project: ({
    handleSubmit,
    projectData,
    handleChange,
    handleFileChange,
    setProjectData,
  }) => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Project Title"
          type="text"
          name="title"
          value={projectData.title}
          onChange={handleChange}
          placeholder="Enter project title"
          fullWidth
        />
        <Textarea
          label="Description"
          name="description"
          value={projectData.description}
          onChange={handleChange}
          placeholder="Enter project description"
          fullWidth
        />
        <Input
          label="Project Link"
          type="url"
          name="link"
          value={projectData.link}
          onChange={handleChange}
          placeholder="Enter project link"
          fullWidth
        />
        <Input type="file" name="image" onChange={handleFileChange} fullWidth />
        <div>
          <label className="block text-sm font-semibold mb-2">Tech Stack</label>
          <CheckboxGroup
            value={projectData.techStack}
            onChange={(values) =>
              setProjectData({ ...projectData, techStack: values })
            }
          >
            <div className="flex flex-wrap gap-2">
              <Checkbox value="React">React</Checkbox>
              <Checkbox value="Node.js">Node.js</Checkbox>
              <Checkbox value="Python">Python</Checkbox>
              <Checkbox value="JavaScript">JavaScript</Checkbox>
              <Checkbox value="MongoDB">MongoDB</Checkbox>
              <Checkbox value="SQL">SQL</Checkbox>
            </div>
          </CheckboxGroup>
        </div>
        <Button type="submit" color="primary">
          Add Project
        </Button>
      </form>
    );
  },
  Skill: ({ skill, handleChange, handleSubmit, handleFileChange }) => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Project Title"
          type="text"
          name="title"
          value={skill}
          onChange={handleChange}
          placeholder="Enter project title"
          fullWidth
        />
        <Input type="file" name="image" onChange={handleFileChange} fullWidth />
        <Button type="submit" color="primary">
          Add Skill
        </Button>
      </form>
    );
  },
};

export { Forms };
