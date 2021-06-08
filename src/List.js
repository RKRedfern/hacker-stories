import React from 'react';

const List = props => 
props.list.map(function(item){
    return(
    <div key={item.objectId}>
        <br></br>
        <span>{item.title}</span>
        <br></br>
        <span>{item.author}</span>

    </div>
    );
});

export default List;
