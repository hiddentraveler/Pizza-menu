import "./profile.css";

export default function Profile() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
        <SkillList skill="javascript" color="Red" />
        <SkillList skill="Git and Github" color="yellow" />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        alt="avatar"
        className="avatar"
        src="https://thispersondoesnotexist.tools/img/faces/m7cdawlzxx2a1.jpg"
      ></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Hrittik Biswas</h1>
      <h3>
        Full-stack web developer and game dev. When not coding or learning cs ,
        I like to write fantasy and sci-fi stories.
      </h3>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <h3 className="skill" style={{ color: "black", background: props.color }}>
        {props.skill}
      </h3>
    </div>
  );
}
