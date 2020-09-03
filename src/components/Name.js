import React from 'react';

// normal function in reactjs
// function Name() {
//     return <h1>welcome vipul!</h1>
// }

//arrow function in reactjs 
// const Name = () => <h1>hello vipul</h1>


// export default Name;

export const Name = ({name ,nickname}) =>{
return (
    <div>
<h1>welcome {name} a.k.a {nickname}</h1>
</div>
)}