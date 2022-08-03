function Msg({name, pic}) {
    // console.log(props);
    // const name = "Aziya";
    // const name2 = "pavitra";
    return (
      <div>
        <h1>Hello {name}</h1>
        <img className="profile-pic" src={pic} alt={name} />
        {/* <h1>Hello {abc.name1}</h1> */}
      </div>
    );
  }
  