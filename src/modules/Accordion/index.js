import './styles';

const Accordion = ({ panels, ...props }) => {
  const [current, toggle] = useState(0);

  return (
    <Module name='Accordion' { ...props }>
      {panels.map(({ heading, content }, i) => (
        <Component name='panel' open={i === current}>
          <Component name='heading' onClick={() => toggle(i === current ? -1 : i)}>
            {heading}
          </Component>
          <Component name='content' content={content} />
        </Component>
      ))}
    </Module>
  );
}

export default Accordion;