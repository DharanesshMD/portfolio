import { personalData } from "@/utils/data/personal-data";

// Fetch blog data based on the slug
async function getBlog(slug) {
  try {
    const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch data for slug: ${slug}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching blog post: ${slug}`, error);
    return null;
  }
}

// Generate static params for each blog post
export async function generateStaticParams() {
  try {
    const response = await fetch(`https://dev.to/api/articles/${personalData.devUsername}`, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles = await response.json();

    if (!Array.isArray(articles)) {
      console.error('Fetched data is not an array');
      return [];
    }

    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export default async function BlogDetails({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Error loading blog post. Please try again later.</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

// Use ISR instead of force-static
export const revalidate = 3600; // Revalidate every hour