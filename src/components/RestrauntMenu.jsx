import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const params = useParams(); //const {id} = useParams also works
  const { id } = params;

  console.log("params", params);

  return (
    <div>
      <h1>Restaurant id : {id} </h1>
      <h2> Name of restraunt</h2>
    </div>
  );
};

export default RestrauntMenu;
