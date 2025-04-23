export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-900 mb-6">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-indigo-800 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-purple-200 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-indigo-800 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-purple-200 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-indigo-800 mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border border-purple-200 rounded focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-800 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
} 