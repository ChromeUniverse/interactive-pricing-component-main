import React, { useState } from 'react'

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

function App() {

  const [slider, setSlider] = useState(Math.floor(Math.random() * 5));
  const [discount, setDiscount] = useState(false);

  const pageviews = ['10k', '50k', '100k', '500k', '1M'];
  const prices = [8, 12, 16, 24, 36];

  function handleSliderChange(event) {
    setSlider(event.target.value);

    // var value = (event.target.value - event.target.min) / (event.target.max - event.target.min) * 100;
    // event.target.style = { background: 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)' };
  }

  function handleToggleChange(event) {
    setDiscount(event.target.checked);
  }

  return (
    <div className="content">
      <header className="header">
        <h1 className="header-title">Simple, traffic-based pricing</h1>
        <h2 className="header-subtitle">
          Sign-up for our 30-day trial. No credit card required.{" "}
        </h2>
      </header>

      <main className="card">
        <div className="card-top">
          <p className="card-top-pageviews">{pageviews[slider]} Pageviews</p>
          <p className="card-top-pricing">
            <span className="card-top-pricing-price">
              ${discount ? prices[slider] * 0.75 : prices[slider]}.00
            </span>
            / month
          </p>
        </div>

        <div className="card-slider-container">
          <input
            className="card-slider"
            type="range"
            value={slider}
            min={0}
            max={4}
            step={1}
            onInput={handleSliderChange}
            style={{
              background: "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " + slider * 25 + "%, hsl(224, 65%, 95%) " + slider * 25 + "%, hsl(224, 65%, 95%) 100%)",
              borderRadius: "10px",
              transition: 'all 0.5s ease-in-out'
            }}
          />
          {/* <div
            className="pseudo-thumb"
            style={{ left: `${slider * 25 + (2 - slider) * (2.35)}%` }}
            tabIndex={-1}
          ></div> */}
        </div>

        <div className="card-toggle">
          <p className="card-toggle-monthly">Monthly Billing</p>
          <label className="switch">
            <input
              type="checkbox"
              className="switch-input"
              checked={discount}
              onChange={handleToggleChange}
            />
            <span className="toggle-slider"></span>
          </label>
          <p className="card-toggle-yearly">
            Yearly Billing
            <span className="card-toggle-yearly-discount">25% discount</span>
          </p>
        </div>

        <hr className="card-divider" />

        <div className="card-footer">
          <ul className="card-footer-list">
            <li className="card-footer-list-item">Unlimited websites</li>
            <li className="card-footer-list-item">100% data ownership</li>
            <li className="card-footer-list-item">Email reports</li>
          </ul>

          <button className="card-footer-btn">Start my trial</button>
        </div>
      </main>
    </div>
  );
}

export default App