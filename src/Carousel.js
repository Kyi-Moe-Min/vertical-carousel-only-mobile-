import React from "react";
import { Photo } from "./Photo";

export class Carousel extends React.Component {
  oldTime = Date.now();
  oldPosition = 0;
  oldPageY = 0;
  startPageY = [0, Date.now()];
  timeOut = 0;
  release;

  // isScrollStart() {
  //   //return false if start scroll
  //   let bool;
  //   let now = Date.now();
  //   bool = now - this.oldTime < 50;
  //   this.oldTime = now;
  //   return !bool;
  // }

  // onScroll = event => {
  //   const { target } = event;
  //   if (this.isScrollStart()) this.oldPosition = target.scrollTop;
  //   // console.log(this.release);
  //   // this.scrollStop(target);
  //   // clearTimeout(this.timeOut);
  //   // this.timeOut = setTimeout(() => this.scrollStop(target), 50);
  //   // console.log(target.clientHeight, target.scrollTop);
  // };

  // isScrollDown = scrollTop => {
  //   return scrollTop - this.oldPosition > 0;
  // };

  scrollStop = target => {
    this.isScrollDown(target.scrollTop);
    const multiply = Math.round(target.scrollTop / target.clientHeight);
    target.scrollTop = multiply * target.clientHeight;
  };

  componentDidMount() {
    this.oldPosition = this.getCarousel().scrollTop;
  }

  onTouchStart = event => {
    const { pageY } = event.changedTouches[0];
    this.oldPageY = pageY;
    this.startPageY = [pageY, Date.now()];
    this.release = false;
    clearInterval(this.timeOut);
    this.getCarousel().style.transition = "";
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

  /**
   * @return 1 for up, -1 for down, 0 for none
   */
  getPullDirection = pageY => {
    const [oldY] = this.startPageY;
    return oldY - pageY;
  };

  isPullFast = () => {
    const oldTime = this.startPageY[1];
    return Date.now() - oldTime < 150;
  };

  onTouchEnd = event => {
    const { pageY } = event.changedTouches[0];
    const carousel = this.getCarousel();
    carousel.style.transition = "all .3s";
    const clientHeight = carousel.parentElement.clientHeight;
    let multiply = Math.round(this.oldPosition / clientHeight);
    if (this.getPullDirection(pageY) > 0) multiply--;
    else if (this.getPullDirection(pageY) < 0) multiply++;
    let final = multiply * clientHeight;
    if (final > 0) final = 0;
    if (Math.abs(carousel.scrollHeight - Math.abs(final)) < 10)
      final = -carousel.scrollHeight + clientHeight;
    console.log(carousel.scrollHeight, final, clientHeight);
    carousel.style.transform = this.getTranslate(final);
    this.oldPosition = final;
    this.release = true;
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
