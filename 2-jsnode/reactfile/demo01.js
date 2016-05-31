/**
 * styleObj 定义样式  调用{styleObj}
 */
// 定义组件
var Hello = React.createClass({
    render: function() {
        var styleObj = {
            color: 'red',
            fontSize: '44px'
        };
        return <div className="alert"  style = { styleObj } > Hello { this.props.name } < /div>;
    }
});
// 渲染组件
ReactDOM.render(
	< Hello name = "World" / > ,
    document.getElementById('container')
);
