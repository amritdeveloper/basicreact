// import React from 'react';
// import axios from 'axios';


// const UserTable = (props) => {

//     personDelete (event){
//         console.log(event.target.getAttribute('id'));
//         const id = event.target.getAttribute('id');
//         this.setState({uid : id});
//         axios.delete(`http://localhost:9000/posts/${id}`)
//         .then(res=>{
//             console.log(res);
//             console.log(res.data);
//             document.location.reload();
//         })
//       }

//   const renderList = props.persons.map(person => {
//       return (
//         <tr key={person._id}>
//           <td>
//             <h4 className="ui image header">
//               <img
//                 src="https://semantic-ui.com/images/avatar2/small/lena.png"
//                 className="ui mini rounded image"
//                 alt=""
//               />
//               <div className="content">
//                 {person.name}
//                 <div className="sub header">{person.profile}</div>
//               </div>
//             </h4>
//           </td>
//           <td>{person.address}</td>
//           <th>
//             <div className="ui tiny fluid buttons">
//               <button className="ui teal button" id={person._id}>
//                 View
//               </button>
//               <div className="or"></div>
//               <button className="ui red button" id={person._id} onClick={this.personDelete}>
//                 Delete
//               </button>
//             </div>
//           </th>
//         </tr>
//       );
//     });

//     return (
//     <div>{renderList}</div>   
//     )
// }

// export default UserTable;