import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="section">
      <div className="section-title">
        Sherman Lim &nbsp;&nbsp;
        <FaCode />
      </div>
      <hr />
      <div>
        <p>
          Hi! I am currently a sophomore majoring in Computer Science at the
          National University of Singapore (NUS). I am also in the University
          Scholars Program.
        </p>
        <p>
          I am curious about how technological advances will shape the world in
          the future, and am equally excited to contribute to these advances. I
          have done coursework in areas such as the Design and Analysis of
          Algorithms and Computer Networks, and am currently diving deeper into
          the field of Internet research through an undergraduate research
          program in NUS. I have also done a few software engineering
          internships.
        </p>
        <p>
          I really like problem-solving and it was one of the reasons I chose to
          study computer science! I recently got into competitive programming
          where I get to do a lot of that, and I am also a teaching assistant
          for the Data Structures and Algorithms module in NUS.
        </p>
        <p>
          You can also find me on:&nbsp;
          <a
            target="_blank"
            href="https://github.com/shermz-lim"
            className="github social-icon"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shermzlim/"
            className="linkedin social-icon"
          >
            <FaLinkedin />
          </a>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Home;
