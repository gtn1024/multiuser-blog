import React from "react";
import {BlogEditForm} from "@/pages/blog-create/BlogEditForm.tsx";
import {useParams} from "react-router-dom";
import {blogs} from "@/lib/mock.ts";

export const BlogEdit: React.FC = () => {
  const {id} = useParams();
  const blog = blogs.find(blog => blog.id === +id!);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl">Blog Edit</h1>
      <BlogEditForm mode="edit" defaultBlog={blog} />
    </div>
  )
}