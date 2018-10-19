window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    $("#topBtn").toggle(true);
  } else {
    $("#topBtn").toggle(false);
  }
};

$("#topBtn").click(() => $("body,html").animate({ scrollTop: 0 }, 500));

$(".navbar-nav>li>a").on("click", () => $(".navbar-collapse").collapse("hide"));

$("#form").submit(() => {
  sendMail();
  return false;
});

const sendMail = () => {
  var url = "https://sendgrid-mailer-api.herokuapp.com/contact";
  var formData = new FormData();
  formData.append("name", "WD Project");
  formData.append("email", $("#email").val());
  formData.append("subject", $("#subject").val());
  formData.append("message", $("#message").val());

  fetch(url, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .catch(error => alert("There's some error submitting the form. Please try again after some time!"))
    .then(response => {
      alert("Hey, I just received your email, and will surely get back to you as soon as possible!");
      $("#email").val("");
      $("#subject").val("");
      $("#message").val("");
    });
};
