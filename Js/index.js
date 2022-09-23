var likeCount = 15;
var likerCount = 8;
var likedCount = 18;
function likeButton() {
    likeCount++;
    var buttonLike = document.querySelector(".likes2");
    buttonLike.innerText = (likeCount + " likes");
}
function likeButton2() {
    likerCount++;
    var buttonLike2 = document.querySelector(".likes3");
    buttonLike2.innerText = (likerCount + " likes");
}
function likeButton3() {
    likedCount++;
    var buttonLike3 = document.querySelector(".likes4");
    buttonLike3.innerText = (likedCount + " likes ")
}