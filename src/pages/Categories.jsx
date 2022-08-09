// import React from 'react';
// import {Query, gql} from '@apollo/client'


// const USE_CATEGORIES = gql`
// query{
//     categories{
//     products{
//       id,
//       name,
//       gallery,
//       description,
//       inStock,
//       prices {
//         currency{
//           label
//         }
//         amount
//       }
//     }
//   }
// }
// `;

// class Categories extends React.Component {




//     state = {  } 
//     render() { 
//         return (
//             <div>
// <div className="title">
//     <h1>Category Name</h1>
// </div>
// <Query query={USE_CATEGORIES}>
// {({loading, data}) => {
// if(loading) return <h1>Loading...</h1>
// console.log(data)
// }}
// </Query>
//             </div>
//         );
//     }
// }
 
// export default Categories;