const Question = ({ id, question, description }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        {id}. {question}
      </h2>
    </div>
  );
};
export default Question;
