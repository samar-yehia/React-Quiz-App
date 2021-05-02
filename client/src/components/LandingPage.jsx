import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage-WelcomeHeader">
      <h1>Welcome To The Quiz</h1>
      <button className="CTA-LandingPage-button">
        <Link to="/quiz">Start Now </Link>
      </button>
    </div>
  );
}

export default LandingPage;
