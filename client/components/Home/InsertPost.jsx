InsertPost = React.createClass({
    insertToCollection(event){
        event.preventDefault();
        var content = $('#post-body').val();
        var user = $('#user').val();
        console.log('content', content);
        Posts.insert({
            content: content,
            user: user,
            dateAdded: new Date()
        });
    },
    render(){
        return(
            <div>
                <form onSubmit={this.insertToCollection}>
                    <input className="form-control" id="user" placeholder="User Name"/><br/>
                    <textarea placeholder="Type a post" className="form-control" id="post-body"></textarea><br/>
                    <button type="submit" className="btn btn-info" >Save Post</button>
                </form>
            </div>
        )
    }
})