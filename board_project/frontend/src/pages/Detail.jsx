import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [showDeletePass, setShowDeletePass] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const list_db = axios.get(`http://localhost:8000/board/${id}`).then((res) => {
      console.log("res", res.data[0]);
      setBoard(res.data[0]);
    });
  }, []);

  const updateReq = () => {
    setShowPass(true);
  };

  const deleteReq = () => {
    setShowDeletePass(true);
  };

  const passInput = (e) => {
    const { name, value } = e.target;
    setPassword(value);
  };

  const passCheck = () => {
    if (password === board.boardPass) {
      navigate(`/update/${board.id}`);
    } else {
      alert("비밀번호가 일치하지 않습니다!");
    }
  };

  const deletePassCheck = () => {
    if (password === board.boardPass) {
      const list_db = axios.delete(`http://localhost:8000/board/${id}`).then((res) => {
        navigate("/list");
      });
    } else {
      alert("비밀번호가 일치하지 않습니다!");
    }
  };

  return (
    <>
      <h2>Detail.jsx</h2>
      <h3>요청 id: {id}</h3>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>{board.id}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>{board.boardTitle}</td>
          </tr>
          <tr>
            <td>writer</td>
            <td>{board.boardWriter}</td>
          </tr>
          <tr>
            <td>contents</td>
            <td>{board.boardContents}</td>
          </tr>
          <tr>
            <td>hits</td>
            <td>{board.boardHits}</td>
          </tr>
          <tr>
            <td>date</td>
            <td>{board.createdAt}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={updateReq}>수정</button>
      <button onClick={deleteReq}>삭제</button>
      {showDeletePass && (
        <div>
          <input type="text" value={password} onChange={passInput} />
          <button onClick={deletePassCheck}>확인</button>
        </div>
      )}

      {showPass && (
        <div>
          <input type="text" value={password} onChange={passInput} />
          <button onClick={passCheck}>확인</button>
        </div>
      )}
    </>
  );
};
export default Detail;
