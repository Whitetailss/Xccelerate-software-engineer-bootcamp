import * as React from 'react';
import {withRouter} from 'react-router-dom'

class GoBack extends React.Component{
    
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <button id='goBack' className={this.props.goBackClass} onClick={this.goBack}>{this.props.goBack}</button>
      </div>
    );
  }
}

export default GoBack = withRouter(GoBack);