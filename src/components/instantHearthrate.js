function InstantHearthrate(props) {
  const { data } = props;
  let classBpm = 'bpmNormal';

  if (data > 40 && data <= 70) {
    classBpm = 'bpmPasNormal';
  }
  if (data > 140 && data <= 200) {
    classBpm = 'bpmPasNormal';
  }

  return <p class={classBpm}> Rythme cardiaque : {data}</p>;
}

export default InstantHearthrate;
