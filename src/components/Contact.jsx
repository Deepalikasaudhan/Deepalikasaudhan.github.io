import React from 'react';
import './Contact.css'; // Ensure this path is correct

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h1>Get in touch</h1>
      {/* Added a new person icon next to the name */}
      <h2 className="contact-name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="name-icon"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
        </svg>
        Deepali Kasaudhan
      </h2>
      <p>"Connect with us via whichever option suits you best."</p>
      <div className="all-buttons">
        {/* Email Button */}
        <a className="btn email-btn" href="mailto:your.kasaudhandeepali7@gmail.com" title="Email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>

       {/* LinkedIn Button */}
<a
  className="btn linkedin-btn"
  href="https://www.linkedin.com/in/deepali-kasaudhan-86786327a/"
  target="_blank"
  rel="noopener noreferrer"
  title="LinkedIn"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338.5A53.64 53.64 0 1 1 107.48 56 53.64 53.64 0 0 1 53.84 109.5zm394.22 338.5h-92.68V302.4c0-34.7-12.44-58.4-43.52-58.4-23.74 0-37.86 16-44.1 31.4-2.27 5.5-2.85 13.2-2.85 20.9V448h-92.68s1.24-243.5 0-269.1h92.68v38.1c12.34-19 34.42-46.1 83.72-46.1 61.16 0 107.12 40 107.12 125.9V448z" />
  </svg>
</a>


        {/* GitHub Button */}
        <a
          className="btn github-btn"
          href="https://github.com/Deepalikasaudhan"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12,2C6.477,2,2,6.477,2,12c0,4.418,2.865,8.166,6.839,9.489c0.5,0.092,0.682-0.217,0.682-0.482c0-0.237-0.009-0.868-0.014-1.703c-2.782,0.604-3.369-1.343-3.369-1.343c-0.454-1.154-1.11-1.461-1.11-1.461c-0.908-0.621,0.069-0.608,0.069-0.608c1.003,0.07,1.531,1.031,1.531,1.031c0.892,1.53,2.341,1.088,2.91,0.832c0.092-0.647,0.35-1.088,0.636-1.339c-2.222-0.252-4.555-1.111-4.555-4.945c0-1.092,0.39-1.987,1.029-2.687C7.14,8.282,6.82,7.22,7.5,5.72c0,0,0.84-0.269,2.75,1.026c0.798-0.222,1.65-0.333,2.5-0.337c0.85,0.004,1.702,0.115,2.5,0.337c1.91-1.295,2.75-1.026,2.75-1.026c0.68,1.5,0.36,2.562,0.18,2.828c0.64,0.7,1.03,1.595,1.03,2.687c0,3.842-2.337,4.69-4.565,4.938c0.36,0.31,0.68,0.922,0.68,1.861c0,1.341-0.012,2.422-0.012,2.75c0,0.267,0.18,0.578,0.688,0.48C19.135,20.163,22,16.418,22,12C22,6.477,17.523,2,12,2z"/>
          </svg>
        </a>

        {/* Twitter Button */}
        <a
          className="btn twitter-btn"
          href="https://x.com/DeepaliKas12364"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.34 8.42 8.42 0 0 1-2.69 1.03A4.23 4.23 0 0 0 16.11 4c-2.33 0-4.21 1.9-4.21 4.25 0 .33.04.65.11.96C7.69 8.91 4.07 7.13 1.64 4.15a4.19 4.19 0 0 0-.57 2.14c0 1.47.75 2.77 1.88 3.54a4.18 4.18 0 0 1-1.91-.53v.05c0 2.06 1.46 3.78 3.39 4.17a4.26 4.26 0 0 1-1.9.07 4.25 4.25 0 0 0 3.97 2.96A8.49 8.49 0 0 1 2 18.57a11.99 11.99 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.38 8.38 0 0 0 24 4.56a8.35 8.35 0 0 1-2.54.7z"/>
          </svg>
        </a>

        {/* Instagram Button (Updated SVG for a square look) */}
        <a
          className="btn instagram-btn"
          href="https://www.instagram.com/deepali23_10/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
