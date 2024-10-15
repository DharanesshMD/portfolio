import { personalData } from "@/utils/data/personal-data";

// Fetch blog data based on the slug
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Generate static params for each blog post
export async function generateStaticParams() {
  // Fetch all articles to get their slugs
  const response = await fetch(`https://dev.to/api/articles/${personalData.devUsername}`);
  const articles = await response.json();

  // Check if articles is an array
  if (!Array.isArray(articles)) {
    console.error('Failed to fetch articles');
    return [];
  }

  // Generate static paths based on article slugs
  return articles.map((article) => ({
    slug: article.slug,
  }));
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

// Force static generation
export const dynamic = 'force-static';