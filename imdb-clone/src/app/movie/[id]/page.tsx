import { makeFetch } from "@/api/makeFetch";
import { NextPageProps } from "@/types";
import Image from "next/image";

export default async function MoviePage({ params }: NextPageProps) {
  const movieId = params.id;
  const movieURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const fetchedData = await makeFetch(movieURL);
  console.log(" ** TEST fetchedData ** ", fetchedData);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          alt="image"
          width={500}
          height={300}
          className="rounded-lg"
          // placeholder="blur"
          // blurDataURL="url"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          src={`https://image.tmdb.org/t/p/original/${fetchedData.backdrop_path || fetchedData.poster_path}`}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{fetchedData.title || fetchedData.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">overview:</span>
            {fetchedData.overview}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">date released:</span>
            {fetchedData.release_date}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">rating:</span>
            {fetchedData.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
