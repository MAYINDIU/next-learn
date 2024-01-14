import getAllPosts from "@/lib/getallpost";
import Image from "next/image";

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <main className="flex">
      <div class="mt-10">
        <h1>All Post</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
