const Tweet = (props) => (

    <div>
        <div><span><b>{props.name}</b><i>@{props.username}</i></span></div>
        <div><span>{props.date}</span></div>
        <div><span>{props.message}</span></div>
    </div>


)