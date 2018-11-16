/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////////////
import React, {Component} from "react";
import API from '../../utils/API';

/////////////////////////////////////////////// /* Class */ ////////////////////////////////////////////////////////
export default class IndividualResult extends Component {

  constructor(){
    super();
    this.state={
      deleted: null
    }
    this.delete = this.delete.bind(this);
  }; // End of ConstructorS


  delete(){
    this.setState({deleted: true}, () => {
      this.props.onDelete(this.props.articleId);
    })
  }

  render() {
    return (
      <li className="collection-item">
        <img className = "img-fluid img-thumbnail rounded right" style={{height: "100px", width: "100px"}} src={this.props.image}/>
        <br/>
        <strong> Title: </strong>  {this.props.title}
        <br/>
        <strong> URL: </strong> <a href={this.props.url} target="_blank"> {this.props.url} </a>
        {this.props.date? (<strong><br/>{`Date: ${this.props.date}`}</strong>) : ""}
        <br/>
        <strong> ID: </strong> {this.props.articleId}
        <br/>
        {this.state.deleted? (<button style={{"margin-top" : "10px"}} id={this.props.id} className="btn btn-primary right-align"> Article Deleted </button>):
          (<button style={{"margin-top" : "10px"}} id={this.props.id} onClick={this.delete} className="btn btn-success right-align"> Delete </button>)
        }

      </li>

    ); // End of Return
  } // End of Render
} // End of Class
