// profile-[id]-page.tsx
export default function UserProfile({ params }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-4xl font-bold text-center text-purple-500 bg-gray-700 py-4">
          Profile Page
        </h1>
        <p className="text-4xl">Profile Page{params.id}</p>
      </div>
    </div>
  );
}
