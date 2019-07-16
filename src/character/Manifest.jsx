import React, { Component } from 'react';
import { getItemFromManifest, tempAPIKey, getIcon } from "../exports/bungie_api_calls";
import {Dimmer, Loader, Segment } from "semantic-ui-react";
const axios = require('axios');

class Manifest extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:props.id,
      loading: true,
      item: {}
    }
  }

  static defaultProps = {
    queryItem: true,
    // Add more defaults here to render as many props as needed
  };

  componentDidMount() {
    axios.get(`${getItemFromManifest(this.state.id)}`, {
      headers: {
        "Connection": "keep-alive",
        "Content-Type": "application/json"
      }
    })
      .then( res => {
        this.setState({ item: res.data, loading: false } );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // { this.state.chartData }
  // { this.props.displayTitle }
  render(){
    if (!this.state.loading) {
      return (
          <div>
            <img src={getIcon(this.state.chartData.displayProperties.icon)} alt=""/>
          </div>
      )
    }
    else {
      return (
        <Segment className="loaderWrapper" centered >
          <Dimmer active>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default Manifest