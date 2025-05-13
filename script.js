  function sendEmail() {
    const name = document.getElementById("name").value;
    const senderEmail = document.getElementById("email").value;
    const message = document.getElementById("msg").value;

    const subject = encodeURIComponent("New message from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:kumanan637@gmail.com?subject=${subject}&body=${body}`;
  }

