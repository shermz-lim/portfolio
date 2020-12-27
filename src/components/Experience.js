const Experience = () => {
  return (
    <div className="section">
      <div className="section-title">Experience</div>
      <hr />
      <div className="section-desc">
        I have done a few software engineering internships where I gained a
        variety of experiences.
      </div>
      <hr />
      <div>
        <div className="subsection">
          <h4 className="subsection-title">
            Rakuten, Software Engineer Intern
            <span className="date">May 2020 - Aug 2020</span>
          </h4>
          <p>
            I was at Rakuten's Asia HQ as a software engineer intern in the
            Performance Advertisement Group, where I worked on 2 frontend
            projects in a team with 2 other interns. I developed a React
            components library which would be used by my department to speed up
            the development of React applications. The library developed also
            improved code reusability and UI/UX consistency across our
            applications. Moreover, I also worked on developing an improved
            frontend solution for Rakuten Promotion Platform, a web app used by
            merchants to manage pay-per-click advertisement campaigns targeting
            members on Rakuten Ichiba, Japan's largest ecommerce site.
          </p>
          <p className="footnotes">
            Technologies I used: JavaScript, React, Redux, HTML, CSS, Git.
          </p>
        </div>
        <div className="subsection">
          <h4 className="subsection-title">
            Cynopsis Solutions, Software Engineer Intern
            <span className="date">Dec 2019 - Jan 2020</span>
          </h4>
          <p>
            Cynopsis Solutions is a regulatory technology company providing
            Software as a Service solutions for adherence to industry
            regulations. At Cynopsis, I developed a bulk uploading feature for
            Cynopsis’ Know Your Customer (KYC) workflow management software that
            is currently being used by many clients in the financial industry.
            The feature allows our clients to perform KYC-compliant customer
            onboarding through the upload of excel or csv files, where
            previously they had to fill in a form for every customer. I worked
            on the Django codebase to create the API and backend logic needed to
            enable this functionality.
          </p>
          <p className="footnotes">
            Technologies used: Python, Django, Celery, SQL, Git.
          </p>
        </div>
        <div className="subsection">
          <h4 className="subsection-title">
            Omni App Solutions, Software Engineer Intern
            <span className="date">Apr 2019 - Jul 2019</span>
          </h4>
          <p>
            Omni App Solutions develops bespoke web app solutions for clients.
            During my time at Omni App, I successfully developed the backend of
            custom web applications for 2 of our enterprise clients,
            digitalizing their businesses. I also fully managed the design of
            the overall architecture of the 2 applications, including the
            database schema and APIs, by understanding the clients' business
            requirements and translating them to software solutions. In
            addition, I implemented an online payments and subscription module
            for an in-house SaaS solution by integrating Stripe.
          </p>
          <p className="footnotes">
            Technologies used: Python, Django, Celery, SQL, Git.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
