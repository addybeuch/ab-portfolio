import "./App.css";

function App() {
  return (
    <div>
      <header>
        <p className="lefthead">Adam</p>
        <p className="lefthead">Beuchert</p>
        <div className="righthead">
          <p className="right">About Me</p>
          <p className="right">Skills</p>
          <p className="right">Projects</p>
        </div>
      </header>
      <h1 className="title">Full Stack Web Developer</h1>

      <div className="bio">
        <p className="bioText">
          Hello! My name is Adam Beuchert. I enjoy working on cars, playing
          video games, and coding! I am studying at Bloomtech Institute of
          Technology, formally known as Lambda School. Before I learned how to
          code I was unsure of what I wanted to do with my life. Once I started
          learning I was surprised by how much I enjoy it. Now I have a clear
          vision of what I want my career to look like and I am excited to learn
          everything I can moving forward.
        </p>
      </div>

      <h2>Skills</h2>
      <div className="skills">
        <p className="skill">HTML</p>
        <p className="skill">CSS</p>
        <p className="skill">Javascript</p>
        <p className="skill">React.js</p>
        <p className="skill">Redux</p>
        <p className="skill">Node</p>
        <p className="skill">Postgress</p>
        <p className="skill">Express</p>
        <p className="skill">SQL</p>
        <p className="skill">Jest</p>
        <p className="skill">Python</p>
        <p className="skill">Github</p>
        <p className="skill">SQLite3</p>
        <p className="skill">Postman</p>
        <p className="skill">GIT</p>
      </div>
      <h1 className="projecth1">Projects</h1>
      <div className="projects">
        <div className="project">
          <h3>
            <a href="https://github.com/Build-Week-African-Marketplace-7/marketplace-backend">
              African Marketplace
            </a>
          </h3>
          <p className="ptext">
            A group project where I created the entire backend using CRUD
            operations with multiple endpoints
          </p>
        </div>
        <div className="project">
          <h3>
            <a href="https://github.com/addybeuch/yorick_guide">Yorick Guide</a>
          </h3>
          <p className="ptext">
            A personal project using React including useState and useEffect to
            render content
          </p>
        </div>
      </div>
      <footer>Thank you for your consideration!</footer>
    </div>
  );
}

export default App;
