export default function CheckFilter({ id, title, items, onCheck }) {
  const accordionId = "accordion" + id;

  return (
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
          {items.map((i) => (
            <div key={i.id} className="form-check">
              <input
                id={"checkbox-" + id + "-" + i.id}
                className="form-check-input"
                type="checkbox"
                checked={i.checked}
                onChange={() => onCheck(i.id)}
              />
              <label
                htmlFor={"checkbox-" + id + "-" + i.id}
                className="form-check-label"
              >
                {i.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
