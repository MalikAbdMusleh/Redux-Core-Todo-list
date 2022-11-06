import "./App.css";
import { connect } from "react-redux";
import React ,{useState} from "react";

function App({ stateProp1, dispatch, list,CREATE }) {

  const [title, setTitle] = useState('No Title');
  const [descreption, setDescreption] = useState('No Descreption');

  return (
    <div className=" flex-column d-flex justify-content-center m-5">
      <div className="d-flex justify-content-start m-5 mb-5">
        <button type="button" className="btn btn-primary"   onClick={() => {dispatch({ type: "CREATE",payload:{id:0,title:title,description:descreption} });setDescreption("");setTitle("")} } >New </button>
      </div>
      <div className=" d-flex justify-content-center mb-5">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Title
            </span>
          </div>
          <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Descreption
            </span>
          </div>
          <input type="text" className="form-control" value={descreption}  onChange={(e)=>setDescreption(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Discreption</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e, i) => (
            <tr key={i}>
              <th scope="row">{i}</th>
              <td>{e.title}</td>
              <td>{e.description}</td>
              <td
              className="d-flex justify-content-space-evenly"
              style={{justifyContent:'space-evenly'}}
              >    <button type="button" className="btn btn-outline-success"   onClick={() =>{ dispatch({type:'UPDATE',payload:{id:i,title:title,description:descreption}});setDescreption("");setTitle("")}}>Edit</button>
      <button type="button" className="btn btn-outline-danger"  onClick={()=>dispatch({type:'DELETE',payload:e.id})} >Delete</button>
      </td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return { stateProp1: state.stateProp1, list: state.list };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     SUCCESS: dispatch({ type: "SUCCESS" }),
//     FAILED: dispatch({ type: "FAILED" }),
//     CREATE: dispatch({ type: "CREATE" }),
//   };
// }
export default connect(mapStateToProps)(App);
