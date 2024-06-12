function Calculator() {
    return (
        <div className="calculator">
            <CalcButton value="1" />
            <CalcButton value="2" />
            <CalcButton  value="3" />
        </div>
    );
}

function CalcButton(props){
    return (
        <button>{props.value}</button>
    );
}
ReactDom.render(<div className="app-container"><Calculator/></div>, document.getElementById("root"));