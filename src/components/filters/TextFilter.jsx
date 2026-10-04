export default function TextFilter({ id, title, text, onTextChange }) {
  const accordionId = "accordion" + id;

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + accordionId}
            aria-expanded="true"
            aria-controls={accordionId}
          >
            {title}
          </button>
        </h2>
        <div
          id={accordionId}
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => onTextChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
