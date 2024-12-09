import React, { Component } from "react";

export default class image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: " ",
    };
  }
  async componentDidMount() {
    const { imageId } = this.props;
    let url = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;
    let headers = {
    //   "X-RapidAPI-Key": "368af94cf6msh643b0a2deb7379dp1c9b02jsn34e51b16fb12", my
    "X-RapidAPI-Key": "5e49f223b1msh47d713ec8467bcfp186a96jsn1a7b4b20677f",

      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    };

    try {
      const response = await fetch(url, { headers });
      if (response.ok) {
        this.setState({ src: url });
      } else {
        console.error("Failed to load image");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  render() {
    const { src } = this.state;
    return <img src={src} width="10%" />;
  }
}
