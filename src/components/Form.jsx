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
      <div className="clearFix">
        <input
          type="submit"
          className="button-primary float-left"
          value={submitText}
        />
        {onCancel && (
          <button type="button" className="button-primary float-right" onClick={onCancel}>
            {cancelText}
          </button>
        )}
      </div>
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
