import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'
class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return(
    {restaurants: state.restaurants}
  )
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: "ADD_RESTAURANT", text})
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
//dispatch to props so 
//have to pass state 
//dispatch allows you to call your reducer, has to be called with a type