import "./App.css";

// export default function ToDo({task,isDone}){
//     return(
//         <div className='student'>
//             <li>Taask: {task}</li>
//         </div>
//     )
// }

// export default function ToDo({task,isDone}){
//     if (isDone){
//         return(
//             <div className='student'>
//                 <li>Done: {task}</li>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div className='student'>
//                 <li>Pending: {task}</li>
//             </div>
//         )
//     }
// }

export default function ToDo({ task, isDone,time=0 }) {
  if (isDone) {
    return (
      <div className="student">
        <li>Done: {task}</li>
        <p>Time: {time}</p>
      </div>
    );
  }
  return (
    <div className="student">
      <li>Pending: {task}</li>
        <p>Time: {time}</p>
    </div>
  );
}
