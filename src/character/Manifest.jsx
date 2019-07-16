import React, { Component } from 'react';
import { getItemFromManifest, tempAPIKey } from "../exports/bungie_api_calls";
const axios = require('axios');

class Manifest extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:props.id
    }
  }

  static defaultProps = {
    queryItem: true,
    // Add more defaults here to render as many props as needed
  };

  componentDidMount() {
    axios.get(`${getItemFromManifest()}`, {
      headers: {
        "X-API-Key": tempAPIKey,
        "Connection": "keep-alive",
        "Content-Type": "application/json"
      },
      params: {
        "components": "205"
      }
    })
        .then( res => {
          this.setState({ allEquippedItems: res.data.Response.equipment.data.items, loading: false } );
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  // { this.state.chartData }
  // { this.props.displayTitle }
  render(){
    return (
        <div>
        </div>
    )
  }
}

export default Manifest