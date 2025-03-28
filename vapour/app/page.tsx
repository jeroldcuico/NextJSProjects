import Image from "next/image";

const games = [
  { id: 1, title: "Cyber Rush", rating: 4.5, image: "/images/cyberrush.jpg" },
  {
    id: 2,
    title: "Fantasy Quest",
    rating: 4.7,
    image: "/images/fantasyquest.jpg",
  },
  { id: 3, title: "Mecha War", rating: 4.3, image: "/images/mechawar.jpg" },
  {
    id: 4,
    title: "Shadow Strike",
    rating: 4.6,
    image: "/images/shadowstrike.jpg",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Game Catalog</h1>
        <div className="mb-6">
          <p className="text-gray-400">Explore the best games available.</p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Game
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View All Games
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Top Rated
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Popular
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View New Releases
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Upcoming Releases
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Anticipated
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Played
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Discussed
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Shared
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Liked
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Commented
            </button>
          </div>
          <div className="mb-6">
            <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Most Reviewed
            </button>
          </div>
        </div>
      </main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-gray-800 rounded-lg shadow-lg p-4">
            <Image
              src={game.image}
              alt={game.title}
              width={200}
              height={300}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-2">{game.title}</h2>
            <p className="text-gray-400">Rating: {game.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
}
