function InstantHearthrate() {
  const bpm = Math.floor(Math.random() * 160) + 40;
  let classBpm = 'bpmNormal';

  if (bpm > 40 && bpm <= 70) {
    classBpm = 'bpmBas';
  }
  if (bpm > 140 && bpm <= 200) {
    classBpm = 'bpmHaut';
  }

  return <p class={classBpm}> Rythme cardiaque : {bpm}</p>;
}

export default InstantHearthrate;
