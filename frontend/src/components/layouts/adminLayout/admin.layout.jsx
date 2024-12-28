import React from "react";

const AdminLayout = ({ title, children }) => {
  return (
    <section className="mt-10 sm:mx-10">
      <h1 className="absolute top-2 sm:top-4 left-14 sm:left-64 text-[23px] font-semibold">
        {title}
      </h1>
      <div className="py-7">{children}</div>
    </section>
  );
};

export default AdminLayout;
