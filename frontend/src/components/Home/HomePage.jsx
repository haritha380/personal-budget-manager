import React from "react";
import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HeroSection = () => {
  return (
    <>
      <div  id="ho1">
        <div id="ho2">
          {/* Heading */}
          <h1 id="ho3">
            Empower Your Wallet, Simplify Your Life
          </h1>

          {/* Subheading */}
          <p id="ho4">
            Let’s make your financial dreams a reality withBudget Manager!
          </p>

          {/* Feature Icons */}
          <div id="ho5">
            <div id="ho6">
              <FaMoneyBillWave id="FaMoneyBillWave" />
              <p id="ho7">Efficient Tracking</p>
            </div>
            <div id="ho8">
              <FaFilter id="FaFilter" />
              <p id="ho9">Transactions Filtering</p>
            </div>
            <div id="ho10">
              <IoIosStats id="ho11" />
              <p id="ho12">Insightful Reports</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <Link to="/register">
            <button id="ho13">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* How it works */}
      <div id="ho14">
        <h2 id="ho15">
          How It Works
        </h2>
        <div id="ho16">
          {/* Step 1 */}
          <div id="ho17">
            <div id="ho18">
              <FaSignInAlt  id="FaSignInAlt"/>
            </div>
            <h3 id="ho19">Sign Up</h3>
            <p>Register and start managing your expenses in a minute.</p>
          </div>
          {/* Step 2 */}
          <div id="ho20">
            <div id="ho21">
              <FaList  id="FaList"/>
            </div>
            <h3 id="ho22">Add Transactions</h3>
            <p>Quickly add income and expenses to your account.</p>
          </div>
          {/* Step 3 */}
          <div id="ho23">
            <div id="ho24">
              <FaChartPie id="FaChartPie" />
            </div>
            <h3 id="ho25">View Reports</h3>
            <p>See insightful reports & graphs of your finances.</p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div id="ho26">
        <h2 id="ho27">
          Feedback From Our Users
        </h2>
        <div id="ho28">
          <div id="ho29">
            <FaQuoteLeft id="FaQuoteLeft" />
            <p id="ho30">
              "This app has revolutionized the way I track my expenses. Highly
              intuitive and user-friendly."
            </p>
            <p id="ho31">- Keshika Dulanjith</p>
          </div>
          <div id="ho32">
            <FaQuoteLeft id="FaQuoteLeft" />
            <p id="ho33">
              "Finally, a hassle-free way to manage my finances. The insights
              feature is a game changer!"
            </p>
            <p id="ho34">- Thilan Weerasinghe</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div id="ho35">
        <div id="ho36">
          <h2 id="ho37">
            Ready to Take Control of Your Finances?
          </h2>
          <p id="ho38">
            Join us now and start managing your expenses like a pro!
          </p>
          <Link to="/register">
            <button id="ho39">
              Sign Up For Free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
