import React from "react";
import { Carousel } from "./Carousel";

export default class extends React.Component {
  photos = [
    {
      img:
        "https://images.unsplash.com/photo-1579370912611-0005771dfb8b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      img:
        "https://images.unsplash.com/photo-1579370912611-0005771dfb8b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      img:
        "https://images.unsplash.com/photo-1579370912611-0005771dfb8b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      img:
        "https://images.unsplash.com/photo-1579370912611-0005771dfb8b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      img:
        "https://images.unsplash.com/photo-1579370912611-0005771dfb8b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      img:
        "https://images.unsplash.com/photo-1579370912611-0005771dfb8b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];
  render() {
    return <Carousel photos={this.photos} />;
  }
}
