import { useState } from "react";

function Table({ rows, columns }) {
  return (
    <table>
      <tbody>
        {Array(rows).fill(0).map(
          (_, row) => (
            <tr key={row}>
              {Array(columns).fill(0).map(
                (_, col) => (
                  <td key={col}>
                  {Array(rows).fill(0)}
                    {col % 2 === 0 ? 
                      (rows * col + (row + 1))
                      : (rows * (col + 1) - row)
                    }
                  </td>
                )
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}


function App() {
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Obtain data from the form.
    const res = new FormData(event.target);
    const data = Object.fromEntries(res.entries());
    const rows = data['rows'];
    setRows(Number(rows));
    
    const columns = data['columns'];
    setColumns(Number(columns));
  }


  return (
    <div className="app">
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="rows">Rows</label>
          <input 
            id="rows"
            name="rows"
            type="number"
            min={1}
            defaultValue={rows}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <input 
            id="columns"
            name="columns"
            type="number"
            min={1}
            defaultValue={columns}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {Boolean(rows) && Boolean(columns) && (
        <Table rows={rows} columns={columns} />
      )}

    </div>
  );
}

export default App;
