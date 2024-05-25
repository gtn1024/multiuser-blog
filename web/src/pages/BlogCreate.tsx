import React from "react";
import {BlogEditForm} from "@/pages/blog-create/BlogEditForm.tsx";

export const BlogCreate: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl">Blog Create</h1>
      <BlogEditForm />
    </div>
  )
}