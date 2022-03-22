const Badge = (props) => {
  return <div className={`badge ${props.className}`}>{props.children}</div>;
};

export default Badge;
