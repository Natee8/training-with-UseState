import Card from "./components/Card";
import Menu from "./components/MenuExpand";
import Products from "../src/json/Products.json";
import { imageMap } from "./utils/imageMap";

const App: React.FC = () => {
  return (
    <div className="bg-primary w-full h-full">
      <Menu />
      <div className="py-[25%] sm:py-[14%] flex flex-wrap items-center justify-around gap-20">
        {Products.map((product) => (
          <Card
            key={product.name}
            image={imageMap[product.img]}
            price={product.price}
            name={product.name}
            inventory={product.inventory}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
