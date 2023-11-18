import SearchBar from "./search";

export default function Home() {
  return (
    <main className="p-10">
      {/* header */}
      <div className=" font-bold text-3xl flex justify-center">
        LOG SHOW
      </div>
      <SearchBar />
    </main>
  )
}
