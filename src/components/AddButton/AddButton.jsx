import './AddButton.scss';

export const AddButton = ({ text, callback, classname }) => (
  <button
    type="button"
    className={classname}
    onClick={callback}
  >
    {text}
  </button>
);
