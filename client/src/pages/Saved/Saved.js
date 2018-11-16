import React, { Component, Fragment } from "react";
import API from '../../utils/API';
import SavedResult from '../../components/SavedResult';
import Nav from '../../components/NavBar';

class Saved extends Component {

  constructor(props){
    super(props)
    this.state={
      savedArticles : null,
      articles : null
    }
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id){
    API.deleteSavedArticle(id).then((resArticles) =>{
      console.log("article delete");
      console.log(JSON.stringify(resArticles));
      this.setState({
        articles:  resArticles.data.map(eachArticle => {
                  return(
                  <SavedResult date={eachArticle.date} key={eachArticle.articleId} articleId={eachArticle.articleId}
                    url={eachArticle.url} title={eachArticle.title} image={eachArticle.image} onDelete={this.onDelete}/>
                  );
                })
      })

    }); // End of then
  }


  componentDidMount(){

    API.getSavedArticles().then((savedArticles) => {

      let articles = savedArticles.data; // Array

      this.setState({
        articles:  articles.map(eachArticle => {
                  return(
                  <SavedResult date={eachArticle.date} key={eachArticle.articleId} articleId={eachArticle.articleId}
                    url={eachArticle.url} title={eachArticle.title} image={eachArticle.image} onDelete={this.onDelete}/>
                  );
                })
      });

    }).then(this.setState({savedArticles: true}));

  }


  render() {

    return (
      <div>
      <Nav/>
      <div className = "container">
        {this.state.savedArticles? (
          <div style={{"margin-top": "20px"}}>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i> Results </strong></h3>
              </div>
              <div className="panel-body" id="well-section">
                <ol className="collection with-header">
                    {this.state.articles}
                </ol>
              </div>
            </div>
          </div>
          )
           :
          (<div className="preloader-wrapper big active right" style={{
              background: "none"
            }}>
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
    );
  } // End of Render
} // End of Class

export default Saved;
