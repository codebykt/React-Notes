export default function NotesLogs(props) {
  //   const [notes] = props;

  return (
    <>
      <div key={props.index}>
        <hr />
        <p>
          <strong>
            Title :
            <br />
          </strong>
          {props.title}
        </p>

        <p>
          <strong>
            Description:
            <br />
          </strong>
          {props.description}
        </p>
      </div>
    </>
  );
}
