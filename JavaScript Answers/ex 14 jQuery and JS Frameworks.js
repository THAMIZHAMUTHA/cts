<!-- Include jQuery first -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>


$("#registerBtn").click(() => {
  alert("Registered using jQuery!");
});

$(".eventCard").fadeIn();

setTimeout(() => $(".eventCard").fadeOut(), 3000);

// Benefit of moving to React or Vue:
// Components and state management make large apps more maintainable.
