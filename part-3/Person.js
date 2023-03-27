const Person = (props) =>{

    let text = "";

    if (props.age >=18){

        text = "please go vote!"

    }else{

        text = "you must be 18"
    }

    return <div>
        <p>Learn some information about this person</p>

        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>

        <h3>{text}</h3>


        <ul>
            {props.hobbies.map(h => <li>{h}</li>)}


        </ul>


    </div>



}