function Tags(props) {
  const objectRef = props.id;
  const tags = objectRef.tags.map((tag, index) => {
    return (
      <h5 className="tag" key={index}>
        {tag}
      </h5>
    );
  });

  return tags;
}

export default Tags;
