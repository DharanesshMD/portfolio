// @flow strict
import { personalData } from "@/utils/data/personal-data";

// Fetch blog data based on the slug
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

// Generate static paths for each blog post
export async function generateStaticParams() {
  // Replace this with your actual fetching logic for slugs
  const response = await fetch(`https://dev.to/api/articles/${personalData.devUsername}`);
  const articles = await response.json();

  // Generate static paths based on article slugs
  return articles.map((article) => ({
    slug: article.slug, // Assuming your article object has a `slug` property
  }));
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
      {/* Use blog.body_html to render the post content */}
    </div>
  );
}

export default BlogDetails;
