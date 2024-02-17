import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center p-4 bg-amber-100 lg:text-lg dark:bg-gray-600">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
