import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      setMessage("Please select a date and time.");
      return;
    }

    if (Number(formData.guests) < 1 || Number(formData.guests) > 10) {
      setMessage("Guests must be between 1 and 10.");
      return;
    }

    setMessage(
      `Table reserved for ${formData.guests} guest(s) on ${formData.date} at ${formData.time}.`
    );
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span>🍋</span>
          <div>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#booking">Reservations</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">WELCOME TO</p>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>

            <p>
              We are a family-owned Mediterranean restaurant focused on
              traditional recipes, fresh ingredients, and a modern dining
              experience.
            </p>

            <a className="hero-button" href="#booking">
              Reserve a Table
            </a>
          </div>

          <div className="hero-card">
            <div className="lemon-circle">🍋</div>
            <h3>Fresh. Simple. Delicious.</h3>
            <p>Authentic Mediterranean flavors made with love.</p>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <p className="section-label">OUR SPECIALS</p>
          <h2>Popular Dishes</h2>

          <div className="cards">
            <article className="card">
              <div className="food-image">🥗</div>
              <h3>Greek Salad</h3>
              <p>
                Fresh vegetables, feta cheese and Mediterranean herbs.
              </p>
              <strong>$12.99</strong>
            </article>

            <article className="card">
              <div className="food-image">🍋</div>
              <h3>Bruschetta</h3>
              <p>
                Crispy bread topped with tomatoes, herbs and olive oil.
              </p>
              <strong>$8.99</strong>
            </article>

            <article className="card">
              <div className="food-image">🍝</div>
              <h3>Lemon Pasta</h3>
              <p>
                Creamy pasta with fresh lemon, herbs and parmesan.
              </p>
              <strong>$14.99</strong>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div>
            <p className="section-label">ABOUT US</p>
            <h2>Little Lemon</h2>
            <p>
              Little Lemon is a cozy Mediterranean restaurant where classic
              family recipes meet contemporary cooking. Our goal is to make
              every visit memorable.
            </p>
          </div>

          <div className="about-box">
            <span>🍋</span>
            <h3>Made Fresh Every Day</h3>
            <p>Quality ingredients. Great food. Happy guests.</p>
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-heading">
            <p className="section-label">BOOK YOUR TABLE</p>
            <h2>Reserve a Table</h2>
            <p>
              Choose your preferred date, time and number of guests.
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Choose date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </div>

            <button type="submit" className="reserve-button">
              Make Your Reservation
            </button>

            {message && (
              <p className="form-message" role="alert">
                {message}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer>
        <div>
          <h3>🍋 Little Lemon</h3>
          <p>Chicago's favorite Mediterranean restaurant.</p>
        </div>

        <div>
          <p>© 2026 Little Lemon</p>
          <p>Fresh food. Great moments.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

