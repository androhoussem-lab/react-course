// function CustomTitle(){
//     return (
//         <h1>Hello React !!</h1>
//     );
// }


// function CustomList(){
//     return (
//     <ul>
//         <li>React js</li>
//         <li>Node js</li>
//         <li>Next js</li>
//     </ul>
//          );
// }

// ReactDOM.render(
// <div>
//     <CustomTitle/>
//     <CustomList/>
// </div> ,
//  document.getElementById("root"));


//Imperative programming (javascript)
// const title = document.createElement("h1");
// title.textContent = "Hello Javascript!!";
// title.className="title";
// document.getElementById("root").append(title);
// console.log(title);

//Declarative programming("React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const header = 
// (
// <div>
//     <h1 className="title">Hello React !!</h1>
//     <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
// </div>
// );
// root.render(header);

// const page = (
//     <div>
//         <img src="./react-logo.svg" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walk</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintaned by Facebook</li>
//             <li>Powers thousands of entreprise apps, including mobile apps</li>
//         </ul>
//     </div>
// );

// function TemporaryName(){
//     return (
//         <div>
//         <img src="./react-logo.svg" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walk</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintaned by Facebook</li>
//             <li>Powers thousands of entreprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TemporaryName/>);
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";



function Page(){
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
       
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);
