import React from "react";
import { Photo } from "./Photo";

export class Carousel extends React.Component {
  oldTime = Date.now();
  oldPosition = 0;
  oldPageY = 0;
  timeOut = 0;
  release;

  isScrollStart() {
    //return false if start scroll
    let bool;
    let now = Date.now();
    bool = now - this.oldTime < 50;
    this.oldTime = now;
    return !bool;
  }

  onScroll = event => {
    const { target } = event;
    if (this.isScrollStart()) this.oldPosition = target.scrollTop;
    // console.log(this.release);
    // this.scrollStop(target);
    // clearTimeout(this.timeOut);
    // this.timeOut = setTimeout(() => this.scrollStop(target), 50);
    // console.log(target.clientHeight, target.scrollTop);
  };

  isScrollDown = scrollTop => {
    return scrollTop - this.oldPosition > 0;
  };

  scrollStop = target => {
    this.isScrollDown(target.scrollTop);
    const multiply = Math.round(target.scrollTop / target.clientHeight);
    target.scrollTop = multiply * target.clientHeight;
    // console.log("scroll stop");
  };

  componentDidMount() {
    this.oldPosition = this.getCarousel().scrollTop;
  }

  onTouchStart = event => {
    const { pageY } = event.changedTouches[0];
    this.oldPageY = pageY;
  };

  getCarousel = () => {
    return document.getElementsByClassName("carousel")[0];
  };

  onTouchMove = event => {
    const { pageY } = event.changedTouches[0];
    const el = this.getCarousel();
    el.style.transform = this.getTranslate(
      (this.oldPosition += pageY - this.oldPageY)
    );
    this.oldPageY = pageY;
  };

  getTranslate(translate) {
    return "translateY(" + translate + "px)";
  }

  onTouchEnd = event => {
    // const { pageY } = event.changedTouches[0];
    const carousel = document.getElementsByClassName("carousel")[0];
    const clientHeight = carousel.parentElement.clientHeight;
    const multiply = Math.round(this.oldPosition / clientHeight);
    carousel.style.transform = this.getTranslate(multiply * clientHeight);
  };

  render() {
    return (
      <div
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchMove={this.onTouchMove}
        className="carousel"
        onScroll={this.onScroll}
      >
        {this.props.photos.map((photo, index) => (
          <Photo key={index} {...photo} />
        ))}
      </div>
    );
  }
}
