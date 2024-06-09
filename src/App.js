import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png";
import AnamImage from "./img/anum.png";
import AliImage from "./img/ali.png";

function App() {
  return (
    <div >

     <section className="hero is-primary">
       <div className="hero-body">
         <p className="title">
           Personal Digital Assistent
         </p>
       </div>
     </section>

      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              color="red"
              textAlign="center"
              title="Alaxa"
              handle="@alaxa"
              image={AlexaImage}
              desceiption="Alexa ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              color="red"
              textAlign="center"
              title="Anam"
              handle="@anam"
              image={AnamImage}
              desceiption="Anum ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."

            />
          </div>
          <div className="column is-4">
            {" "}
            <ProfileCard
              color="red"
              textAlign="center"
              title="Ali"
              handle="@ali"
              image={AliImage}
              desceiption="Ali ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
