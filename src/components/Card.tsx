interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-indigo-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 