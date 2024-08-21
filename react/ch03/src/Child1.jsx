// function Child1({ p1 }) {
//   return (
//     <>
//       <h2>Child.jsx</h2>
//       <h3>{p1}</h3>
//     </>
//   );
// }
// export default Child1;

function Child1(props) {
  const p1 = props.p1;
  return (
    <>
      <h2>Child1.jsx</h2>
      <h3>{p1}</h3>
    </>
  );
}
export default Child1;
