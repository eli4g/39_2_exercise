const App = () => (

    <div>
        <Person name="Joe" age={21} hobbies={["1","2","3"]} ></Person>
        <Person name="John" age={1} hobbies={["1","2","3"]} ></Person>
        <Person name="Jane" age={31} hobbies={["1","2","3"]} ></Person>

    </div>
)




ReactDOM.render(<App />, document.getElementById("root"))