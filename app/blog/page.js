import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      id: "1",
      title: "blog 1",
      description: "blog 1 description",
    },
    {
      id: "2",
      title: "blog 2",
      description: "blog 1 description",
    },
    {
      id: "3",
      title: "blog 3",
      description: "blog 1 description",
    },
    {
      id: "4",
      title: "blog 4",
      description: "blog 1 description",
    },
  ];

  return (
    <main className="flex min-h-screen">
      <div class="mt-10">
        <h1>Blogs</h1>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title} </Link>
          </li>
        ))}
      </div>
    </main>
  );
}
