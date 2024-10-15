import { personalData } from "@/utils/data/personal-data";

// Fetch blog data based on the slug
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function BlogDetails({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

// This ensures Next.js knows this is a dynamic route
export const dynamicParams = true;