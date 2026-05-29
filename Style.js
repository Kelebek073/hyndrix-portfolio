<script>
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("seeMoreBtn");
  const more = document.getElementById("moreProjects");

  if (!btn || !more) {
    console.log("Missing button or hidden section");
    return;
  }

  let open = false;

  btn.addEventListener("click", function () {
    open = !open;

    if (open) {
      more.classList.add("show");
      btn.textContent = "Show Less Projects";
    } else {
      more.classList.remove("show");
      btn.textContent = "See More Projects";
    }
  });
});
</script>
