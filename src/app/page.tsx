import Card from '../components/Card'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Welcome to My App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="Feature 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card 
          title="Feature 2" 
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card 
          title="Feature 3" 
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        />
      </div>
    </div>
  )
}
