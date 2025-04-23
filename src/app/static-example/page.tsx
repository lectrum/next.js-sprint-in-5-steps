import { Post } from '../../types/post';
import { Metadata } from 'next';
import Link from 'next/link';

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!res.ok) {
      throw new Error(`Failed to fetch posts. Status: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching posts');
  }
}

export const metadata: Metadata = {
  title: 'Static Posts',
  description: 'List of statically generated posts',
};

export default async function StaticExamplePage() {
  const posts = await getPosts();
  const staticPosts = posts.slice(0, 10);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-900 mb-8">Static Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {staticPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/static-example/${post.id}`}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-indigo-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 