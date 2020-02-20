Post = React.createClass({
    render(){
        let {post} = this.props;
        return(
            <div className="card">
                <h3>{post.user}</h3>
                <p>{post.content}</p>
            </div>
        )
    }
})