import { useDispatch, useSelector } from "react-redux";
import { CategoryCard } from "../../components";
import { getAllQuiz, getCategory, mcqQuiz } from "../../feature/quizSlice";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";

export const Home = () => {
  const { quiz } = useSelector((store: RootState) => store);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getAllQuiz());
  }, []);

  // dispatch(mcqQuiz("anime"));
  console.log(
    quiz.allQuiz.filter((item: any) => item.categoryName === "anime")
  );

  return (
    <main>
      <div className="grid-two">
        {quiz.categoryQuiz.map((dataOne: any) => (
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
