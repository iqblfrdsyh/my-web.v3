"use client";

import AdminLayout from "@/components/layouts/adminLayout/admin.layout";
import { Forms } from "@/components/ui/admin/forms/forms";
import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    profession: "",
    year_experience: "",
    description: "",
    about_desc: "",
    no_handphone: "",
    address: "",
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profile: e.target.files[0] });
  };

  return (
    <AdminLayout title={"Manage Profile"}>
      <Forms.Profile
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
      />
      <div className="mt-10">
        <h2 className="text-lg font-semibold">Current Data:</h2>
        <pre className="mt-2 p-4 bg-gray-100 rounded-md shadow-sm overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </AdminLayout>
  );
};

export default Profile;
