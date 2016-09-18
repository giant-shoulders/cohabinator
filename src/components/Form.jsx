import React, { PropTypes } from 'react';

const Form = ({
  children,
  onSubmit, onCancel,
  submitText, cancelText,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
  >
    <fieldset>
      {children}
      <input
        type="submit"
        className="button-primary"
        value={submitText}
      />
      {onCancel && (
        <button type="button" className="button-primary" onClick={onCancel}>
          {cancelText}
        </button>
      )}
    </fieldset>
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
};

Form.defaultProps = {
  submitText: 'Save',
  cancelText: 'Cancel',
};

export default Form;
