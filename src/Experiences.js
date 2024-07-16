import Experience from "./Experience";

function Experiences() {
  return (
    <section id="experiences">
      <div class="header-experience">
        <h1>Online Experiences</h1>
        <p>
          Join unique and interrractive activities led <br/> by one-of-a-kind
          hosts-all without leaving home.
        </p>
      </div>
      <div className="flex exp-container">
        <Experience
          image="swimmer.png"
          rating={"5.0"}
          applicants={6}
          title="Life Lessons with Katie"
          country="USA"
          price="136"
        />

        <Experience
          image="bride.png"
          rating={5.0}
          applicants={30}
          title="Learn wedding photography"
          country="USA"
          price="125"
        />
        <Experience
          image="cycle.png"
          rating={4.8}
          applicants={2}
          title="Group mountain bikind"
          country="USA"
          price="50"
        />
      </div>
    </section>
  );
}
export default Experiences;
