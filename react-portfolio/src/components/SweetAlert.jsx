// import React, {Component} from 'react';

// class SweetAlert extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             alert: null
//             };
//         }
//     }

// sendEmail() {
//     const getAlert = () => (
//         <SweetAlert
//         success
//         title="Email Sent!"
//         onConfirm={() => this.hideAlert()}
//         ></SweetAlert>
//     )

//         this.setState({
//             alert: getAlert()
//         });
//     }

// hideAlert() {
//     console.log('hiding alert...');
//     this.setState({
//                 alert: null
//     });
// }

// render() {
//     return (
//         <div style={{ padding: '20px' }}>
//             <a
//                 onClick={() => this.sendEmail()}
//                 className= 'btn btn-primary'
//                 > Send Email
//                  </a>
//                  {this.state.alert}
//         </div>
//     )
// }

// export default SweetAlert;
