const PWD_INPUT = document.getElementById("password");
const HIDE_PWD_ICON = document.getElementById("hidePwd");
const SHOW_PWD_ICON = document.getElementById("showPwd");

const showIcon = () => {
    if (PWD_INPUT.type === "password") {
        SHOW_PWD_ICON.style.display = "block";
        HIDE_PWD_ICON.style.display = "none";
    } else {
        HIDE_PWD_ICON.style.display = "block";
        SHOW_PWD_ICON.style.display = "none";
    }
}
const togglePwd = () => {
    if (PWD_INPUT.type === "password") {
        PWD_INPUT.type = "text";
    } else {
        PWD_INPUT.type = "password";
    }
    showIcon();

}
const reset = () => {
    HIDE_PWD_ICON.style.display = "none";
    SHOW_PWD_ICON.style.display = "none";
} 

PWD_INPUT.addEventListener("input", () => {
    if (PWD_INPUT.value) {
        showIcon();
    } else {
        reset();
    }
});
PWD_INPUT.addEventListener("blur", () => {
    if (!PWD_INPUT.value) {
        reset();
    }
});

SHOW_PWD_ICON.addEventListener("click", togglePwd);
HIDE_PWD_ICON.addEventListener("click", togglePwd);
