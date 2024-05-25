import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
  return (
    <div className="flex flex-col m-2 px-4 py-2 border border-solid border-gray-200">
      <div>
        <Button variant="link" asChild>
          <Link to={`/blog/${blog.id}`} className="text-xl px-0">{blog.title}</Link>
        </Button>

        <p className="flex items-center">
          <Button variant="link" asChild>
            <Link to={`/user/${blog.author.id}`} className="text-blue-500 px-0 text-xm">{blog.author.username}</Link>
          </Button>

          <span className="text-gray-500 ml-2 text-sm">
            <ReactTimeAgo date={blog.createdAt * 1000}/>
          </span>
        </p>

        <p className="text-gray-500 text-sm">{blog.description}</p>
      </div>
    </div>
  )
}