// import React, { useEffect, useState } from 'react';
// import Cors from 'cors';


// export default function BandsInTownWidget() {

//     const [data, setData] = useState();   

    
//     return(
//         useEffect(() => {
//             const url = 'https://waltandjackie.com/https://rest.bandsintown.com/artists/id_{{56f957a46add67b78dc45c75cd5baa1a}}/events';
            
//             fetch(url)
//             .then(res => res.json())
//             .then((json) => {
//                 console.log(json)
//                 setData(json)
//             })
//         })
        
//     );
// }