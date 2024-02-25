import { TOP_RATED_URL, TRENDING_URL, makeFetch } from "@/api/makeFetch";
import Card from "@/components/Card/Card";
import { FetchedData } from "@/types";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: { searchParams: { genre?: string } }) {
  const genre = searchParams.genre || "fetchTrending";
  const targetUrl = genre === "fetchTrending" ? TRENDING_URL : TOP_RATED_URL;
  const fetchedData = await makeFetch(targetUrl);
  return (
    <>
      <h1 className="text-xl">App content</h1>
      {Array.isArray(fetchedData.results) && fetchedData.results.length ? (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {fetchedData.results.map((item: FetchedData) => (
            <Card key={item.id} result={item}></Card>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
