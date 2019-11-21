import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Link} from 'react-router-dom';
import './Style.scss';
import HeaderToolbar from './HeaderToolbar.js'


const SideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if(props.show){
    drawerClasses = ['side-drawer open'];
  }
  return (
    <nav className={drawerClasses.join('')}>
         <Router>
          <ul>
            <li><Link to={'/otherview'}>Talleres Cerca de Mí</Link></li>
          </ul>
         </Router>
     </nav>
    );
};


const Backdrop = props => (
  <div className="backdrop" onClick = {props.click}/>
);


class toolbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return{sideDrawerOpen: !prevState.sideDrawerOpen}
     });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
    render() {
      let backdrop;
      if(this.state.sideDrawerOpen){
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
      return (
        <div style={{height: '100%'}}>
        <HeaderToolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        </div>  
      )
    }
  }


export default toolbar;




