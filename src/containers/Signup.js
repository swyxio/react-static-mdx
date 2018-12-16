import React from 'react';

export default function Signup() {
  return (
    <form
      action="https://tinyletter.com/swyx"
      method="post"
      target="popupwindow"
      className="site-main-content__newsletter-form"
    >
      <p>Get updates on new writing and talks!</p>
      <input
        required=""
        type="email"
        name="email"
        id="tlemail"
        placeholder="email@domain.com"
      />
      <input type="hidden" name="embed" value="1" />
      <input type="submit" value="Subscribe" />
      <small>Powered by TinyLetter</small>
    </form>
  );
}
