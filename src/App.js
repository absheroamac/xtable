import { useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [filteredData, setFilteredData] = useState(data);

  const SortByDate = () => {
    const filtered = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilteredData(filtered);
  };

  const SortByViews = () => {
    const filtered = [...data].sort((a, b) => b.views - a.views);
    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={SortByDate}>Sort by Date</button>
      <button onClick={SortByViews}>Sort by Views</button>

      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {filteredData.map((item) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
