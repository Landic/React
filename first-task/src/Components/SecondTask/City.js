// import React, { Component } from 'react'
// import './City.css'

// export default class City extends Component {
//   render() {
//     return (
//       <div class="info-city">
//         <label class = "info">Город:</label>
//         <p>Одесса</p>
//         <label class = "info">Страна:</label>
//         <p>Украина</p>
//         <label class = "info">Год основания:</label>
//         <p>1794 г.</p>
//         <label class = "info">Фотографии:</label>
//         <div class="img">
//             <img src="img/1.jpg" alt="1" />
//             <img src="img/2.jpg" alt="2" />
//         </div>
//       </div>
//     )
//   }
// }

import React from 'react'
import './City.css'

export default function City() {
  return (
    <div class="info-city">
        <label class = "info">Город:</label>
        <p>Одесса</p>
        <label class = "info">Страна:</label>
        <p>Украина</p>
        <label class = "info">Год основания:</label>
        <p>1794 г.</p>
        <label class = "info">Фотографии:</label>
        <div class="img">
            <img src="img/1.jpg" alt="1" />
            <img src="img/2.jpg" alt="2" />
        </div>
    </div>
  )
}

