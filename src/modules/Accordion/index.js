import './styles';

const Accordion = ({ panels, ...props }) => {
  const [activeIndex, toggle] = useState(0);

  return (
    <Module name='Accordion' { ...props }>
      {panels.map(({ heading, content }, index) => (
        <Component name='panel' open={index === activeIndex}>
          <Component name='heading' onClick={() => toggle(index === activeIndex ? -1 : index)}>
            {heading}
          </Component>
          <Component name='content' content={content} />
        </Component>
      ))}
    </Module>
  );
}

export default Accordion;