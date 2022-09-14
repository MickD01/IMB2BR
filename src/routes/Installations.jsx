import SearchActions from "../components/SearchActions";

function Installations() {
  return (
    <>
      <div className="fs-4">Instalaciones</div>
      <hr className="mt-0 mb-3" />
      <SearchActions />

      <table className="table table-bordered table-hover bg-white mb-0">
        <colgroup>
          <col />
          <col className="table-left" />
        </colgroup>
        <thead>
          <tr className="table-secondary">
            <th>#</th>
            <th>Col 1</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>1</td>
            <td>Data 1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Installations;
