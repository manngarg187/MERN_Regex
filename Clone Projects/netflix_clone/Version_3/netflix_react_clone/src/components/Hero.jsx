import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <div className="cta">
          <input placeholder="Email address" />
          <button>Get Started </button>
        </div>
      </div>

    </div>
  );
}