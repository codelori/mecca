import React from 'react'
import Header from '../Header/Header'

class Dashboard extends React.Component{
  renderUser = () =>{
    const { user, shops } = this.props
    return (
      <div>
        <h2>Welcome, {user.first_name}!</h2>
      </div>
    );
  }

  renderShops = () =>{
    const { shops } = this.props
    return shops.map((shop) => {
      return (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <img src={shop.photo_url}/>
          <p>{shop.description}</p>
          <a href={shop.url}>Visit</a>
          {/* <Link to="/main/business">More...</Link> */}
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        <Header />
        {(this.props.user) ? this.renderUser():  <h1>Loading...</h1>}
        {(this.props.shops) ? this.renderShops():  <h1>Loading Your Businesses, Boss...</h1>}
      </div>
    )
  }
}

export default Dashboard