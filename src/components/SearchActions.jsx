function SearchActions() {
  return (
    <div className="d-flex bg-white border rounded p-2 mb-3">
      <div className="hstack gap-2 w-25 me-auto">
        <div className="input-group">
          <span className="input-group-text">Buscar</span>
          <input type="search" className="form-control" />
        </div>
        <button className="btn btn-secondary">
          <i className="fas fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="hstack gap-2">
        <button className="btn btn-primary">
          <i className="fas fa-plus" />
        </button>
        <button className="btn btn-danger">
          <i className="fas fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default SearchActions;
