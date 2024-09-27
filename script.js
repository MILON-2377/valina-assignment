// make the popup menu dynamic
const enrollBtn = document.querySelector(".enroll-btn");
const popupMenu = document.querySelector(".popup-menu");

enrollBtn.addEventListener("mouseenter", () => {
    popupMenu.style.display = "block";
    popupMenu.style.top = "14%";
    console.log("hello");
});

enrollBtn.addEventListener("mouseleave", () =>{
    popupMenu.style.display = "none";
});

popupMenu.addEventListener("mouseleave", () => {
    popupMenu.style.display = "none";
});


