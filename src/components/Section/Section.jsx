import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <p>{title}</p>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
