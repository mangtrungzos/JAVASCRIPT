const myCheckBox = document.getElementById("mycheckbox");
const myVisaBtn = document.getElementById("VisaBtn");
const myMasterBtn = document.getElementById("masterBtn");
const result = document.getElementById('results');

mySubmit.onclick = () => {
    if (myCheckBox.checked) {
        result.textContent = "You're Subcribed"
    } else {
        result.textContent = "You're not subcribed"
    }

    if (myMasterBtn.checked) {
        result.textContent = "You're using Master Card"
    } else if (myVisaBtn.checked) {
        result.textContent = "You're not using Master Card";
    }
}