import SearchBar from "./search";

export default function Home() {
  return (
    <main className=" pt-10 lg:p-10">
      {/* header */}
      <div className=" font-bold text-3xl flex font-mono justify-center">
        LOG SHOW
      </div>
      <SearchBar />
    </main>
  )
}
