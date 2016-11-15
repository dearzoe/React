var FormApp = React.createClass({
    getinitialState: function () {
        return {
            inp:"input value",
            sel:"B",
            rad:"B"
        }
    },
    render: function () {
        return <form onsubmit="">
                    <input type="text"/>
                    <select name="" id="" defaultValue="B">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                    </select>
                    <input name="haha" type="radio" value="A"/>
                    <input name="haha" type="radio" defaultChecked value="B"/>
                    <input name="haha" type="radio" value="C"/>

               </form>
    }
});

ReactDOM.render(
    <FormApp/>,
    document.getElementById("app")
);