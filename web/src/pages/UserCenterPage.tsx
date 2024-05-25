import React from "react";
import {Link, useParams} from "react-router-dom";
import {blogs, users} from "@/lib/mock.ts";
import {Button} from "@/components/ui/button.tsx";
import ReactTimeAgo from "react-time-ago";

export const UserCenterPage: React.FC = () => {
  const {id} = useParams()
  const user = users.find(user => user.id === +id!)
  const userBlogs = blogs.filter(blog => blog.author.id === +id!)

  return (
    <div className="flex flex-col">
      <div className="border-b border-b-solid border-b-gray-200 pb-4">
        <h1 className="text-2xl">
          {user?.username}
        </h1>
      </div>
      <div>
        {userBlogs.map(blog => (
          <div key={blog.id}>
            <Button variant="link" asChild>
              <Link to={`/blog/${blog.id}`} className="text-xl px-0">{blog.title}</Link>
            </Button>
            <p className="text-gray-500 text-sm">{blog.description}</p>
            <p className="flex items-center text-sm text-gray-500">
              <ReactTimeAgo date={blog.createdAt * 1000} />
            </p>

            <p>
              <Button variant="link" asChild>
                <Link to={`/edit/${blog.id}`} className="px-0 text-sm">Edit</Link>
              </Button>

              <Button variant="link">
                Delete
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}