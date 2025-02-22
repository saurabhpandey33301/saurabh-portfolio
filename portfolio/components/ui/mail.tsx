import React from "react";

 const MailtoButton = () => {
  const email = "spandey3301@gmail.com";
  const subject = "Subject Here";
  const body = "Hello, I wanted to reach out to you regarding...";

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-blue-400">
      spandey3301@gmail.com
    </a>
  );
};

export default MailtoButton;
