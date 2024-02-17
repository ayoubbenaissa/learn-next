import { TOP_RATED_URL, TRENDING_URL, makeFetch } from "@/api/makeFetch";
import { FetchedData } from "@/types";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: { searchParams: { genre?: string } }) {
  console.log(" ** TEST searchParams ** ", searchParams);
  const genre = searchParams.genre || "fetchTrending";
  const targetUrl = genre === "fetchTrending" ? TRENDING_URL : TOP_RATED_URL;
  const fetchedData = await makeFetch(targetUrl);
  // console.log(" ** TEST fetchedData ** ", fetchedData);
  return (
    <>
      <h1 className="text-xl">App content</h1>
      {Array.isArray(fetchedData.results) && fetchedData.results.length ? (
        <div className="flex flex-wrap">
          {fetchedData.results.map((item: FetchedData) => (
            <div className="p-2 mx-4 my-2 border-2 rounded-md" key={item.id}>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
