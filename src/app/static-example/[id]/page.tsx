import { Post } from '../../../types/post';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  
  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  
  return {
    title: post.title,
    description: post.body.substring(0, 160),
  };
}

async function getPost(id: string): Promise<Post> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch post with ID ${id}. Status: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching post: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching the post');
  }
}

export default async function StaticPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">Static Generated Post</h1>
        <div className="text-sm text-indigo-600 mb-6">
          This page was generated at build time
        </div>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">{post.title}</h2>
        <div className="text-sm text-indigo-600 mb-6">
          Post ID: {post.id} | User ID: {post.userId}
        </div>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </article>
    </div>
  );
} 