function InstantHearthrate(props) {
    const { data } = props;
  let classBpm = 'bpmNormal';

  if (data > 40 && data <= 70) {
    classBpm = 'bpmBas';
  }
  if (data > 140 && data <= 200) {
    classBpm = 'bpmHaut';
  }

  return <p class={classBpm}> Rythme cardiaque : {data}</p>;
}

export default InstantHearthrate;
