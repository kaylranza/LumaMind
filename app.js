const slider = document.getElementById('moodSlider');
const moodValue = document.getElementById('moodValue');
const note = document.getElementById('note');

if (slider && moodValue) {
  slider.value = 5;
  moodValue.textContent = slider.value;
  slider.oninput = () => {
    moodValue.textContent = slider.value;
  };
}

function submitData() {
  const data = JSON.parse(localStorage.getItem('lumamindData') || '[]');
  const newEntry = {
    mood: slider.value,
    note: note.value,
    time: new Date().toISOString()
  };
  data.push(newEntry);
  localStorage.setItem('lumamindData', JSON.stringify(data));
  alert("Thank you for sharing!");
  note.value = '';
}
