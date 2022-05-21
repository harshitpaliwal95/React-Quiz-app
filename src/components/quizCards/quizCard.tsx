export const QuizCard = (data: any) => {
  const { title, img, categoryName } = data.data;

  return (
    <div>
      <a href="../rules-page/rules.html">
        <div className="card-component luffy-card">
          <div className="card-comp-img">
            <img
              className="card-top-img"
              src={`https://i.ytimg.com/vi/${img}/hqdefault.jpg`}
              alt="category img"
            />
          </div>
          <div className="card-badge">{categoryName}</div>
          <div className="card-comp-contant">
            <h2 className="card-h2">{title}</h2>
            <h3 className="card-h3">Take this quizz to test yourself!</h3>
            <h3 className="card-h3">5 Question</h3>
          </div>
        </div>
      </a>
    </div>
  );
};
