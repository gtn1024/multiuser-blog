import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {Link, useParams} from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import {blogs} from "@/lib/mock.ts";

export const BlogPage: React.FC = () => {
  const {id} = useParams();
  const blog = blogs.find(blog => blog.id === +id!);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="text-2xl">{blog?.title}</h2>
        <p className="flex items-center">
          <Button variant="link" asChild>
            <Link to={`/user/${blog?.author.id}`} className="text-blue-500 px-0 text-xm">{blog?.author.username}</Link>
          </Button>

          <span className="text-gray-500 ml-2 text-sm">
            <ReactTimeAgo date={(blog?.createdAt || 0) * 1000} />
          </span>
        </p>
      </div>

      <article className="mt-4">
        {blog?.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </article>
    </div>
  )
}
