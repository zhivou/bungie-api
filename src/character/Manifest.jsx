import React, { Component } from 'react';
import { getItemFromManifest, tempAPIKey, getIcon } from "../exports/bungie_api_calls";
import {Loader, Modal } from "semantic-ui-react";
import ItemInfo from "./ItemInfo"
const axios = require('axios');

class Manifest extends Component {
  constructor(props){
    super(props);
    this.state = {
      item_id:props.item_id,
      loading: true,
      item: {}
    }
  }

  static defaultProps = {
    queryItem: true,
    // Add more defaults here to render as many props as needed
  };

  componentDidMount() {
    axios.get(`${getItemFromManifest(this.state.item_id)}`, {
      headers: {
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
            <ItemInfo
                trigger = { <img src={getIcon(this.state.item.displayProperties.icon)} alt="" className={ this.props.className }/> }
                item = {this.state.item}
            />
      )
    }
    else {
      return (
        <div>
          <Modal open>
            <Loader size='massive'>Loading icons...</Loader>
          </Modal>
        </div>
      )
    }
  }
}

export default Manifest