import ProductCards from "./components/ProductCards";
import Slider from "./components/Slider";
import data from "./categorey.json";
import Search from "./components/Search";

export default function Home() {
  // console.log(data)
  return (
    <>
      <Slider />
      <Search />
      {data.map((i, k) => {
        return <ProductCards key={k} title={i.category} />;
      })}
    </>
  );
}
