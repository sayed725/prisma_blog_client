// import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";

import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";
import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";




export default async function CreateBlogPage() {

  const { data } = await blogService.getBlogPosts({},{cache: "no-store"})


  return (
    <div className="h-[calc(100vh-100px)">
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient />
      {data.data.map((item: BlogPost)=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}