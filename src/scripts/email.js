document.addEventListener("DOMContentLoaded", function () {
  const user = "aaron";
  const domain = "sizza";
  const tld = "net";
  const subject = "Website Hello";

  const email = `${user}@${domain}.${tld}?subject=${subject}`;

  const emailSpan = document.getElementById("email");
  if (emailSpan) {
    // const emailLink = document.createElement("a");
    const emailLink = emailSpan;
    console.log(emailLink);
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    emailSpan.innerHTML = "Email";
    emailSpan.appendChild(emailLink);
  }
});
