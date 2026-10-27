type UserProps = {
  name: string;
  age: number | string;
  address: string;
  isStudent?: boolean;
};

const User = ({ name, age, address, isStudent }: UserProps) => {
  return (
    <div>
      Hello I'm {name}, {age} years old My address is: {address}
      {isStudent && <p>I am a student</p>}
    </div>
  );
};

export default User;
