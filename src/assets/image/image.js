import React, { Component } from "react";
import img from "../images/no-img.jpg";

export default class image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: img,
      width: "25%",
    };
  }
  async componentDidMount() {
    const { imageId, width } = this.props;
    let url = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;
    let headers = {
      // "X-RapidAPI-Key": "368af94cf6msh643b0a2deb7379dp1c9b02jsn34e51b16fb12", //my
      // "X-RapidAPI-Key": "5e49f223b1msh47d713ec8467bcfp186a96jsn1a7b4b20677f",
      "X-RapidAPI-Key": "87be1248f9msh187428a9aedb8ecp1673a9jsn3b0b1387b645",
      // "X-RapidAPI-Key": "dd76d23715msh3ae2c9a68068085p1e4b89jsnb016433712a0",

      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    };

    try {
      const response = await fetch(url, { headers });
      if (response.ok) {
        this.setState({ src: url, width: width });
      } else {
        // console.error("Failed to load image");
        this.setState({width: width });
      }
    } catch (error) {
      // console.error("Error fetching image:", error);
    }
  }
  render() {
    const { src, width } = this.state;
    return <img src={src} width={width} />;
  }
}
