import './accordion.scss';

export const styles = ['accordion', `
  font-family: sans-serif,

  panel: (
    'is-open': (
      heading: (
        backgroundColor: #00FFB2,
        color: #FFFFFF
      ),
      content: (
        display: block
      )
    )
  ),

  heading: (
    backgroundColor: #1E90FF,
    color: #005A9C,
    padding: 1em,
    cursor: 'pointer,

    ':hover': (
      backgroundColor: #01BFFF,
      color: #FFFFFF
    )
  ),

  content: (
    padding: 1em,
    color: #444444,
    display: none
  )
`];

const Accordion = ({ panels, ...props }) => (
  <Module name='accordion' { ...props }>
    {panels.map(({ heading, content }) => {
      const [isOpen, toggle] = useState(true);

      return (
        <Component name='panel' open={isOpen}>
          <Component name='heading' content={heading} onClick={() => toggle(!isOpen)} />
          <Component name='content' content={content} />
        </Component>
      )
    })}
  </Module>
);

export default Accordion;