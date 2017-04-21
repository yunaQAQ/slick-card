import React, { Component, PropTypes }  from 'react';
import Slider from 'react-slick';

export default class CenterCard extends Component {
  state = {
    opacity: '0',
    top: '110vh',
  }

  constructor(props) {
    super(props)
    this.handleCardNavOnClick = this.handleCardNavOnClick.bind(this)
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this)
  }

  handleCardNavOnClick(e) {
    this.refs.slider.slickGoTo(parseInt(e.currentTarget.getAttribute('data-key')));
    document.getElementsByTagName("body")[0].setAttribute("style","overflow:hidden;");
    this.setState({
      opacity: '1',
      top: '0',
    });
  }

  handleBtnOnClick(){
    document.getElementsByTagName("body")[0].setAttribute("style","overflow:scroll;");
    this.setState({
      opacity: '0',
      top: '110vh',
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      accessibility: true,
      focusOnSelect: true,
    };

    var style = {
      opacity: this.state.opacity,
      top: this.state.top,
    }

    return (
      <div className="home-center-card">
        <div className="slide" style={style}>
          <Slider ref='slider' {...settings} className="slider-for">
            <div key={1} className="slider-nav"><h3>1</h3></div>
            <div key={2} className="slider-nav"><h3>2</h3></div>
            <div key={3} className="slider-nav"><h3>3</h3></div>
            <div key={4} className="slider-nav"><h3>4</h3></div>
            <div key={5} className="slider-nav"><h3>5</h3></div>
            <div key={6} className="slider-nav"><h3>6</h3></div>
          </Slider>
          <button className="btn" onClick={this.handleBtnOnClick}>X</button>
        </div>
        <div className="card">
          <div ref='card' className="card-for">
            <div data-key={0} className="card-nav" onClick={this.handleCardNavOnClick}><h3>1</h3></div>
            <div data-key={1} className="card-nav" onClick={this.handleCardNavOnClick}><h3>2</h3></div>
            <div data-key={2} className="card-nav" onClick={this.handleCardNavOnClick}><h3>3</h3></div>
            <div data-key={3} className="card-nav" onClick={this.handleCardNavOnClick}><h3>4</h3></div>
            <div data-key={4} className="card-nav" onClick={this.handleCardNavOnClick}><h3>5</h3></div>
            <div data-key={5} className="card-nav" onClick={this.handleCardNavOnClick}><h3>6</h3></div>
          </div>
        </div>
      </div>
    );
  }
}
