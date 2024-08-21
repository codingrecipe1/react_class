import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list_db = axios.get("http://localhost:8000/board/list").then((res) => {
      console.log("res", res.data);
      setList(res.data);
    });
  }, []); // [] 두번째 매개변수를 통해 최초 한번만 가져오도록 함
  return (
    <>
      <h2>List.jsx</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
        {list.map((board) => (
            <tr key={board.id}>
              <td>
                {board.id}
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/board/${board.id}`,
                  }}
                >
                  {board.boardTitle}
                </Link>
              </td>
              <td>
                {board.boardWriter}
              </td>
              <td>
                {board.createdAt}
              </td>
              <td>
                {board.boardHits}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default List;
