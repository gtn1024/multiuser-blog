import React from "react";
import {BlogCard} from "@/components/BlogCard.tsx";
import {blogs} from "@/lib/mock.ts";

export const HomePage: React.FC = () => {
  return (
    <div>
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  )
}