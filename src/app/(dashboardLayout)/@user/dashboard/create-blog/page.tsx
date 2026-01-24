// import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";

import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";

export default async function CreateBlogPage() {
  return (
    <div className="h-[calc(100vh-100px)">
      <CreateBlogFormServer />
    </div>
  );
}