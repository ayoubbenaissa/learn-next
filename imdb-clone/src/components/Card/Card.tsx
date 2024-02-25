import Link from "next/link";
import { CardProps } from "./types";
import Image from "next/image";

export default function Card({ result }: CardProps) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm-border sm-border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <div className="truncate text-lg font-bold">{result.title}</div>
      <Link href={`/movie/${result.id}`}>
        <Image
          alt="image"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          // placeholder="blur"
          // blurDataURL="url"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        ></Image>
        <div className="p-2">
          <p className="truncate text-md">{result.overview}</p>
          <div className="flex items-center justify-between">
            <p>{result.release_date}</p>
            <p>{result.vote_count + " likes"}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
