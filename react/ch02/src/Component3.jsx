function Component3() {
  const name = "alice";
  const student = {
    name: "bob",
    age: 20,
    mobile: "010-1111-1111",
  };
  return (
    <>
      <h2>hello</h2>
      <h2>hello {name}</h2>

      <h2>학생이름: {student.name}</h2>
      <h2>학생나이: {student.age}</h2>
      <h2>학생전화번호: {student.mobile}</h2>
    </>
  );
}

export default Component3;
