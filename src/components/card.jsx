export const ProfileCard = ({ name, gender, age }) => {
  if (gender === "Cewe") {
    return (
      <div className="bg-rose-100 text-rose-600 border-2 border-rose-200 rounded-lg p-4 w-[300px]">
        <div>Name : {name}</div>
        <div>Jenis Kelamin : {gender}</div>
        <div>Usua : {age}</div>
      </div>
    );
  }
  return (
    <>
      <div className="bg-blue-100 text-blue-600 border-2 border-blue-200 rounded-lg p-4 w-[300px]">
        <div>Name : {name}</div>
        <div>Jenis Kelamin : {gender}</div>
        <div>Usua : {age}</div>
      </div>
    </>
  );
};
