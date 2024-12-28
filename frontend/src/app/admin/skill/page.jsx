"use client";

import AdminLayout from "@/components/layouts/adminLayout/admin.layout";
import { Forms } from "@/components/ui/admin/forms/forms";
import { Tables } from "@/components/ui/admin/tables/tables";
import React from "react";

const Skill = () => {
  return (
    <AdminLayout title="Manage Skill">
      <Forms.Skill />
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Uploaded Skills</h2>
        <Tables.Skill skills={[]} />
      </div>
    </AdminLayout>
  );
};

export default Skill;
