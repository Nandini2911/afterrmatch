"use client";

import { useState, type FormEvent } from "react";
import styles from "./AfterrmatchCorporate.module.css";

/** Standalone landing page. Includes its own header and footer. */
export default function AfterrmatchCorporate() {
  const [eventFormat, setEventFormat] = useState("Corporate Sports Day");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi Afterrmatch, I’d like to plan an event.

Name: ${data.get("name")}
Company / brand: ${data.get("company")}
Event: ${data.get("format")}
Estimated guests: ${data.get("guests")}
Details: ${data.get("details") || "To be discussed"}

Please share availability and a custom quote.`;
    window.location.href = `https://wa.me/919311821282?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className={styles.page}>
<header>
<a className="logo" href="#home" aria-label="Afterrmatch home">
<img src="/afterrmatch/afterrlogo.webp" alt="Afterrmatch" />
</a>
<nav aria-label="Main navigation">
<a href="#venue">The venue</a>
<a href="#experiences">Experiences</a>
<a href="#brands">For brands</a>
<a href="#packages">Packages</a>
</nav>
<a className="button small" href="#enquire">Plan your event <span>↗</span>
</a>
</header>
<main>
<section id="home" className="hero">
<div className="hero-copy">
<p className="eyebrow">CORPORATE EVENTS. A DIFFERENT BALL GAME.</p>
<h1>Out of office.<br />Into the <em>game.</em>
</h1>
<p className="intro">A sports & lifestyle event destination.<br />Bring your people together. Give them<br className="desktop" /> something to talk about.</p>
<a className="button" href="#enquire">Let’s make it happen <span>↗</span>
</a>
<a className="text-link" href="#venue">Explore the venue <span>↓</span>
</a>
<div className="hero-note">
<span>SPORTS / CULTURE / CONNECTION</span>
<span>AFTERRMATCH</span>
</div>
</div>
<div className="hero-photo">
<img src="/afterrmatch/venue.webp" alt="Afterrmatch semi-covered courts and event area" />
<div className="photo-label">YOUR NEXT EVENT.<br />
<i>A whole new setting.</i>
</div>
<span className="photo-tag">THE AFTERRMATCH EXPERIENCE</span>
</div>
</section>
<div className="ticker">
<span>PLAY TOGETHER</span>
<b>✳</b>
<span>CONNECT DIFFERENTLY</span>
<b>✳</b>
<span>STAY FOR THE AFTERS</span>
<b>✳</b>
<span>MAKE YOUR MARK</span>
</div>
<section id="venue" className="section">
<div className="section-head">
<p className="eyebrow">THE VENUE</p>
<h2>Room for play.<br />
<em>Space for possibility.</em>
</h2>
<p>From the first serve to the last track, everything your event needs comes together in one place.</p>
</div>
<div className="stats">
<div>
<strong>13,500</strong>
<span>SQ FT OF POSSIBILITIES</span>
</div>
<div>
<strong>05</strong>
<span>PICKLEBALL COURTS</span>
</div>
<div>
<strong>24/7</strong>
<span>VENUE OPERATIONS</span>
</div>
</div>
<div className="venue-bottom">
<p>A semi-covered, outdoor setting.<br />A very different kind of workday.</p>
<div className="amenities">
<span>Gaming zone</span>
<span>Pool table</span>
<span>Café & lounge</span>
<span>DJ & music setup</span>
<span>Parking</span>
<span>Day-to-night events</span>
</div>
</div>
</section>
<section id="experiences" className="section blue">
<div className="section-head">
<p className="eyebrow">FIND YOUR OCCASION</p>
<h2>Less boardroom.<br />
<em>More shared moments.</em>
</h2>
<p>A team that plays together. A launch people feel part of. A night that goes beyond networking.</p>
</div>
<div className="offer-grid">
<article>
<span className="number">FOR YOUR PEOPLE</span>
<h3>Corporate<br />Sports Day</h3>
<p>A little friendly competition.<br />A lot of team spirit.</p>
<ul>
<li>Pickleball & team games</li>
<li>Food & refreshments</li>
<li>Music & shared moments</li>
</ul>
<a href="#enquire" onClick={() => setEventFormat("Corporate Sports Day")} >Bring your team <span>↗</span>
</a>
</article>
<article>
<span className="number">FOR YOUR BRAND</span>
<h3>Brand<br />Activation</h3>
<p>Put your brand in the middle<br />of the experience.</p>
<ul>
<li>Branding & product integration</li>
<li>Games & content creation</li>
<li>Food & beverages</li>
</ul>
<a href="#enquire" onClick={() => setEventFormat("Brand Activation")} >Make an impression <span>↗</span>
</a>
</article>
<article>
<span className="number">FOR YOUR EVENING</span>
<h3>Private<br />Corporate Event</h3>
<p>Your people. Your atmosphere.<br />The venue, all yours.</p>
<ul>
<li>Venue buyout</li>
<li>Sports, gaming & pool</li>
<li>Food & DJ</li>
</ul>
<a href="#enquire" onClick={() => setEventFormat("Private Corporate Event")} >Own the evening <span>↗</span>
</a>
</article>
</div>
<div className="occasions">
<span>ALSO MADE FOR</span>
<p>Product launches / Automotive experiences / Influencer events / Tournaments / Community events / Private parties</p>
</div>
</section>
<section className="section experience">
<div className="section-head">
<p className="eyebrow">FEEL THE ENERGY</p>
<h2>Come for the game.<br />
<em>Stay for everything else.</em>
</h2>
<p>On the court, around the table or next to the DJ. There’s more than one way to connect.</p>
</div>
<div className="gallery">
<figure className="tall">
<img loading="lazy" src="/afterrmatch/play.webp" alt="Pickleball in action under the venue lights" />
<figcaption>THE GAME</figcaption>
</figure>
<figure>
<img loading="lazy" src="/afterrmatch/food.webp" alt="Food prepared at an Afterrmatch event" />
<figcaption>THE FLAVOUR</figcaption>
</figure>
<figure>
<img loading="lazy" src="/afterrmatch/dj.webp" alt="DJ and music at Afterrmatch" />
<figcaption>THE SOUND</figcaption>
</figure>
<figure className="wide">
<img loading="lazy" src="/afterrmatch/community.webp" alt="Guests gathering at an Afterrmatch evening event" />
<figcaption>THE PEOPLE. THE AFTERS.</figcaption>
</figure>
</div>
</section>
<section id="brands" className="section brand-section">
<div className="section-head">
<p className="eyebrow">YOUR BRAND, IN PLAY</p>
<h2>Don’t just show up.<br />
<em>Take over.</em>
</h2>
<p>For agencies and brand teams: turn the courts, the content and the conversation into one connected experience.</p>
</div>
<div className="brand-feature">
<div className="concept-image">
<img loading="lazy" src="/afterrmatch/brand-concept.webp" alt="Illustrative concept for a BMW automotive and pickleball activation" />
<span>ILLUSTRATIVE CONCEPT / NOT A PAST EVENT</span>
</div>
<div className="concept-copy">
<p className="eyebrow">IMAGINE THE POSSIBILITIES</p>
<h3>BMW ×<br />Afterrmatch</h3>
<p>An automotive showcase meets a social sports evening. Cars on display, branded courts and a photo zone built around the experience.</p>
<div className="tags">
<span>Product display</span>
<span>Court branding</span>
<span>Photo moments</span>
<span>Creator content</span>
</div>
<a className="text-link" href="#enquire" onClick={() => setEventFormat("Brand Activation")} >Build your brand experience ↗</a>
</div>
</div>
<p className="disclaimer">Concept visual only. BMW is an example of a potential activation, not a confirmed partner or previous client. Layout and vehicle access are subject to venue approval.</p>
</section>
<section className="section capacity">
<div>
<p className="eyebrow">BUILT AROUND YOUR GUEST LIST</p>
<h2>The right space.<br />
<em>The right scale.</em>
</h2>
<p>Tell us who’s coming. We’ll shape the layout around the occasion.</p>
</div>
<div className="capacity-list">
<div>
<h3>Intimate activation</h3>
<p>Focused product experiences & invited guests.</p>
</div>
<div>
<h3>Corporate & social</h3>
<p>Team connection, shared play & hosted evenings.</p>
</div>
<div>
<h3>Tournament & takeover</h3>
<p>Multi-court action & a larger brand presence.</p>
</div>
<small>Guest capacity is confirmed individually based on event format, layout and safe occupancy.</small>
</div>
</section>
<section className="section blue past">
<div>
<p className="eyebrow">ALREADY IN THE GAME</p>
<h2>Real people.<br />
<em>Real energy.</em>
</h2>
<p>A glimpse of Afterrmatch in action — on-court play, community moments and evenings that carry on after the final point.</p>
<p className="muted">Planning a tournament or community event? Ask our team for relevant event details and format recommendations.</p>
<a className="button light" href="#enquire">Talk to the events team ↗</a>
</div>
<div className="past-images">
<img loading="lazy" src="/afterrmatch/branding.webp" alt="Afterrmatch event photo wall" />
<img loading="lazy" src="/afterrmatch/community.webp" alt="Community gathering at Afterrmatch" />
<span>FROM THE AFTERRMATCH EVENT FILM</span>
</div>
</section>
<section id="packages" className="section">
<div className="section-head">
<p className="eyebrow">MAKE IT YOURS</p>
<h2>Your event.<br />
<em>Your way.</em>
</h2>
<p>Start with the space or bring the whole experience together. Custom quote based on requirements.</p>
</div>
<div className="package-list">
<a href="#enquire" onClick={() => setEventFormat("Venue Only")} >
<h3>Venue Only</h3>
<p>The setting for your own event plan.</p>
<b>↗</b>
</a>
<a href="#enquire" onClick={() => setEventFormat("Sports Experience")} >
<h3>Sports Experience</h3>
<p>Build the day around play & friendly competition.</p>
<b>↗</b>
</a>
<a href="#enquire" onClick={() => setEventFormat("Corporate Event")} >
<h3>Corporate Event</h3>
<p>Bring your people together beyond the office.</p>
<b>↗</b>
</a>
<a href="#enquire" onClick={() => setEventFormat("Brand Activation")} >
<h3>Brand Activation</h3>
<p>Product, people & content in one experience.</p>
<b>↗</b>
</a>
<a href="#enquire" onClick={() => setEventFormat("Full-Service Event")} >
<h3>Full-Service Event</h3>
<p>Coordinate the venue, activities, food & music.</p>
<b>↗</b>
</a>
</div>
</section>
<section id="enquire" className="section enquiry">
<div>
<p className="eyebrow">LET’S GET THE BALL ROLLING</p>
<h2>Make your next<br />event <em>an Afterrmatch.</em>
</h2>
<p>A team day, a brand moment or a private evening.<br />Tell us what you have in mind.</p>
<a className="contact" href="tel:+919311821282">+91 93118 21282 ↗</a>
<a className="contact" href="mailto:afterrmatch.pr@gmail.com">afterrmatch.pr@gmail.com ↗</a>
</div>
<form id="enquiry-form" onSubmit={handleSubmit}>
<label>Your name<input name="name" autoComplete="name" placeholder="Name" required />
</label>
<label>Company / brand<input name="company" autoComplete="organization" placeholder="Company name" required />
</label>
<div className="form-row">
<label>Event format<select name="format" id="event-format" value={eventFormat} onChange={(event) => setEventFormat(event.target.value)}>
<option>Corporate Sports Day</option>
<option>Brand Activation</option>
<option>Private Corporate Event</option>
<option>Venue Only</option>
<option>Sports Experience</option>
<option>Corporate Event</option>
<option>Full-Service Event</option>
<option>Tournament</option>
<option>Community Event</option>
<option>Private Party</option>
<option>Product Launch</option>
<option>Automotive Experience</option>
<option>Influencer Event</option>
</select>
</label>
<label>Estimated guests<input name="guests" type="number" min="1" placeholder="Guest count" required />
</label>
</div>
<label>What do you have in mind?<textarea name="details" rows={2} placeholder="Preferred date, event idea, anything we should know…">
</textarea>
</label>
<button className="button" type="submit">Discuss on WhatsApp <span>↗</span>
</button>
<small>Your brief opens in WhatsApp. Send it when you’re ready.</small>
</form>
</section>
</main>
<footer>
<a className="logo" href="#home">
<img src="/afterrmatch/afterrlogo.webp" alt="Afterrmatch" />
</a>
<p>SPORTS. LIFESTYLE. TOGETHER.</p>
<a href="https://www.afterrmatch.com" target="_blank" rel="noopener">Explore Afterrmatch ↗</a>
<span>© 2026 AFTERRMATCH</span>
</footer>
    </div>
  );
}
