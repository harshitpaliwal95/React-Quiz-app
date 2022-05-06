import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryCard } from "../../components";
import { CategoryType } from "../../modal/modal";

export const Home = () => {
  const [data, setdata] = useState<CategoryType[]>();
  const fetch = async () => {
    try {
      const response = await axios.get("/api/categories");
      setdata(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  console.log(data);
  return (
    <main>
      <div className="grid-two">
        {data?.map((dataOne) => (
          <CategoryCard
            key={dataOne._id}
            categoryName={dataOne.categoryName}
            img={dataOne.img}
          />
        ))}
      </div>
    </main>
  );
};
