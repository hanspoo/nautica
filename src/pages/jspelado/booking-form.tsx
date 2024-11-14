// ---------------- Booking section ---------------------//
// ---------------- form Validation ---------------------//
export function bookingform() {

  if (typeof document === "undefined")
	return;
  // ---------------- FAQ Ques ---------------------//
  let questions = document.querySelectorAll(".question");

  questions.forEach((ques) => {
    ques.onclick = function (e) {
      questions.forEach((r) => {
        if (e.currentTarget != r) {
          r.parentElement.classList.remove("show-text");
        }
      });
      ques.parentElement.classList.toggle("show-text");
    };
  });
}
export default bookingform;
