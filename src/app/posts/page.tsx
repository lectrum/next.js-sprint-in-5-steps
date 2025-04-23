import PostCard from '../../components/PostCard';
import { Post } from '../../types/post';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const DynamicPostCard = dynamic(() => import('../../components/PostCard'), {
  loading: () => <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">Loading...</div>,
  ssr: false
});

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'Browse through our collection of blog posts about Next.js, React, and web development',
  openGraph: {
    title: 'Blog Posts | Next.js Blog',
    description: 'Browse through our collection of blog posts about Next.js, React, and web development',
  },
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <DynamicPostCard 
            key={post.id} 
            post={post}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  );
} 