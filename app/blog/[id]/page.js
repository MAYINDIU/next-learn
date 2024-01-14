import { notFound } from "next/navigation";

export default function BlogPage({ params }) {
  const { id } = params;

  if (id === "5") {
    notFound();
  }

  return (
    <main className="flex min-h-screen">
      <div class="mt-10">
        <li>The blog id is {id}</li>
      </div>
    </main>
  );
}
