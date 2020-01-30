import React from 'react';
import {
  Button,
  Jumbotron } from 'reactstrap';

function WelcomeContent(props) {
  // If authenticated, greet the user

  if (props.isAuthenticated) {
    return (
      <div>
        <h4>Welcome {props.user.displayName}!</h4>
        {props.presence !== null &&
        <div>
        <p><b>Presence: </b>{props.presence.availability}</p>
        <p><b>Activity: </b>{props.presence.activity}</p>
        </div>
      }
      </div>
    );
  }

  // Not authenticated, present a sign in button
  return <Button color="primary" onClick={props.authButtonMethod}>Click here to sign in</Button>;
}

export default class Welcome extends React.Component {
  render() {
    
    return (
      <Jumbotron>
        <h1>React Graph Tutorial</h1>
        <p className="lead">This sample app shows how to use the Microsoft Graph API to access Outlook and OneDrive data from React</p>
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
          presence={this.props.presence}
          authButtonMethod={this.props.authButtonMethod} />
      </Jumbotron>
    );
  }
}