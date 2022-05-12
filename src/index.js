import faker from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom/client";
import Approval from "./Approval";
import CommenDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <Approval>
        <div>
          <h2> Warning !</h2>
          <div>Are you sure ?</div>
        </div>
      </Approval>
      <Approval>
        <CommenDetails
          author="SAM"
          ageAgo="Today at 6:00PM"
          blog="Holo nah keno"
          avatar={faker.image.avatar()}
        />
      </Approval>

      <Approval>
        <CommenDetails
          author="Pathan"
          ageAgo="Today at 2:00PM"
          blog="There are always something wrong"
          avatar={faker.image.avatar()}
        />
      </Approval>
      <Approval>
        <CommenDetails
          author="RamuJI"
          ageAgo="Today at 3:50PM"
          blog="never no more sorrow"
          avatar={faker.image.avatar()}
        />
      </Approval>
      <Approval>
        <CommenDetails
          author="ALlu Arjun"
          ageAgo="Today at 12:10PM"
          blog="greetings is for you"
          avatar={faker.image.avatar()}
        />
      </Approval>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
