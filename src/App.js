import React from 'react';
import axios from 'axios';

export default class APP extends React.Component
{


  constructor(props)
  {
    super(props)
    this.state = {reports:[]}
  }

  componentDidMount(){
     axios.get(`https://corona.lmao.ninja/v2/countries/gh`)
          .then(res => {
            this.setState({
              reports:res.data
            })
          })
  }

  render()
  {
    return (
      <div>

          <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <nav>
                        <a href="navbar-brand">
                            <img src="images/logo_final.jpg" width="100px" />
                        </a>
                      </nav>
                    
                  </div>
                </div>
                </div>

                <div className="container mb-5">
                      <div className="row">
                      <div className="col-sm-3">
                          <div className="card">
                          <div className="card-body">
                              <h5 className="card-title dropdown-toggle">Cases Cases</h5>
                              <p className="card-text">
                                {this.state.reports.cases}
                              </p>
                            
                          </div>
                          </div>
                      </div>
                      <div className="col-sm-3">
                          <div className="card">
                          <div className="card-body">
                              <h5 className="card-title dropdown-toggle">Death Cases</h5>
                              <p className="card-text">
                              {this.state.reports.deaths}
                              </p>
                            
                          </div>
                          </div>
                      </div>
                      <div className="col-sm-3">
                          <div className="card">
                          <div className="card-body">
                              <h5 className="card-title dropdown-toggle">Active Cases</h5>
                              <p className="card-text">
                              {this.state.reports.active}
                              </p>
                            
                          </div>
                          </div>
                      </div>  
                      <div className="col-sm-3">
                          <div className="card">
                          <div className="card-body">
                              <h5 className="card-title dropdown-toggle">Recovered Cases</h5>
                              <p className="card-text">
                              {this.state.reports.recovered}
                              </p>
                            
                          </div>
                          </div>
                      </div>                      
                  </div>       
                </div>

                <div className="container">
                
                <div className="row">
                  <div className="col-9">
                      <table className="table">
                      <thead>
                          <tr>
                          
                          <th scope="col">Total Case</th>
                          <th scope="col">Death Case</th>
                          <th scope="col">Active</th>
                          <th scope="col">Recovered Death</th>
                          </tr>
                      </thead>
                      <tbody id="reports">
                      <tr>
                      <td>{ this.state.reports.cases }</td>  
                      <td>{ this.state.reports.deaths }</td>
                      <td>{ this.state.reports.active }</td>  
                      <td>{ this.state.reports.recovered }</td>                 
                      </tr>       
                      </tbody>
                      </table>        
                  </div>

                  <div className="col-3">
                  
                      <div className="col-sm-12 mb-5">
                          <div className="card">
                          <div className="card-body">
                              <h5 className="card-title text-white bg-danger">Active Cases</h5>
                              <p className="card-text">{this.state.reports.active}</p>
                            
                          </div>
                          </div>
                      </div>

                      <div className="col-sm-12 mb-5">
                          <div className="card">
                          <div className="card-body">
                              <h5 className="card-title text-white bg-danger">Death Cases</h5>
                              <p className="card-text">{this.state.reports.deaths}</p>
                            
                          </div>
                          </div>
                      </div>                        

                  </div>

                </div>

                </div>

      </div>
    );
  }
}
