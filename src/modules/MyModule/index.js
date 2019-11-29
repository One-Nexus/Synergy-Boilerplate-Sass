import './styles';

const MyModule = ({ title, dismiss, ...props }) => {
  const [isDismissed, setDismiss] = useState(false);

  return (
    <Module name='MyModule' isDismissed={isDismissed} {...props}>
      <Component name='title'>
        {title} {dismiss && <Component name='close' onClick={() => setDismiss(true)}>✖</Component>}
      </Component>

      <Component name='content'>{props.children}</Component>
    </Module>
  );
}

export default MyModule;