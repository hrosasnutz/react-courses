export default function RangeTextFilter({
  id,
  title,
  min,
  max,
  range,
  onRangeChange,
}) {
  const accordionId = "accordion-" + id;

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
        <div id={accordionId} className="accordion-collapse collapse show">
          <div className="accordion-body">
            <div className="row">
              <div className="col">
                <input
                  id={"input-range-min-" + id}
                  type="number"
                  className="form-control"
                  value={range[0]}
                  step={0.01}
                  min={min}
                  max={range[1]}
                  placeholder="min"
                  onChange={(e) => onRangeChange(0, e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  id={"input-range-max-" + id}
                  type="number"
                  className="form-control"
                  value={range[1]}
                  step={0.01}
                  min={range[0]}
                  max={max}
                  placeholder="max"
                  onChange={(e) => onRangeChange(1, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
