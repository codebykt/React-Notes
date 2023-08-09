export default function NotesLogs(props) {
  //   const [notes] = props;

  return (
    <>
      <div>
        <hr />
          <h3>
            <strong>
              Title :
              <br />
              {props.title}
            </strong>
          </h3>
          <br />
          <p>
            <strong>
              Description:
              <br />
              {props.description}
            </strong>
          </p>
      </div>
    </>
  );
}
