var Message = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        console.log("submit");
    },
    render:function(){
        return <form onSubmit={this.handleSubmit}>
                <label className="bg-primary">input标签</label>
                <br/>
                <input type="text" className="form-control input-sm"/>
                <br/>
                <label className="bg-success">combox下拉</label>
                <br/>
                <select name="" id="">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br/>
                <label className="bg-info">radio单选</label>
                <br/>
                    <input type="radio" value="A"/>
                    <input type="radio" value="B" defaultChecked />
                    <input type="radio" value="C"/>
                <br/>
                <label className="bg-warning">checkbox多选</label>
                <br/>
                    <input type="checkbox" value="A"/>
                    <input type="checkbox" value="B"/>
                    <input type="checkbox" value="C"/>
               <br/>
               <label className="bg-danger">textarea</label>
               <br/>
               <textarea cols="60"/>
               <br/>
               <button type="submit" className="btn btn-danger">提交</button>
               </form>
    }
});
ReactDOM.render(
    <Message/>,
    document.getElementById("app")
)