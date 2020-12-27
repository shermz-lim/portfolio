const CP = () => {
  return (
    <div className="section">
      <div className="section-title">Competitive Programming</div>
      <hr />
      <div className="section-desc">
        I got started on competitive programming recently because I really enjoy
        problem-solving! I mainly do online contests on leetcode and codeforces.
        I try to join other contests when they are available as well, such as
        Google Code Jam and Google Kickstart.
      </div>
      <hr />
      <div>
        <div className="subsection">
          <h4 className="subsection-title">Open Kattis</h4>
          <p>
            I do most of my training on open Kattis as it is a great platform
            with many interesting problems. I follow the problem bank listed{' '}
            <a
              href="https://cpbook.net/methodstosolve?oj=kattis&topic=all&quality=all"
              target="_blank"
            >
              here
            </a>
            . My solutions can be found on{' '}
            <a
              href="https://github.com/shermz-lim/kattis-problems"
              target="_blank"
            >
              Github
            </a>{' '}
            , and they are primarily in C++ or Python.
            <br />
            Here's my{' '}
            <a href="https://open.kattis.com/users/shermz-lim" target="_blank">
              profile
            </a>{' '}
            on Kattis as well.
          </p>
        </div>
        <div className="subsection">
          <h4 className="subsection-title">Leetcode Contests</h4>
          <p>
            I do the weekly/biweekly contests on leetcode occassionally. You can
            find my profile and rating{' '}
            <a href="https://leetcode.com/shermz-lim/" target="_blank">
              here
            </a>
            . I also work on the problems here sometimes.
          </p>
        </div>
        <div className="subsection">
          <h4 className="subsection-title">Codeforces</h4>
          <p>Still in progress.</p>
        </div>
      </div>
    </div>
  );
};

export default CP;
