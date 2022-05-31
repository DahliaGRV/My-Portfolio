import React from 'react';
import '../../styles/About.css';
import dahliaAvatar from '../../assets/dahliaAvatar.jpg';

export default function About() {
  return (
    <div className="about">
      <h1 className= "text-light aboutHeading">About Me</h1>
      <div className="container">
          <div className="container-sm">
      <img src={dahliaAvatar}className=" img-fluid mx-auto d-block " alt="..."/>
      </div>
      <br />
      <br />
      <p className="text-light fs-5 text aboutText">
      Dahlia Lola Graves here. An Aspiring Full-Stack Web Developer. Recently emerged from the University of Washington’s full-stack flex coding bootcamp with a certificate of completion. Endlessly determined to gain new knowledge, surpass expectations of myself, and deliver both excellent & timely projects. Through my coding journey I have prided myself on creating apps that feel engaging and easily manageable by a user.
      <br />
      <br />
        Fond of florals, indie video games, and drinking more
        coffee than is necessary. Respector of pronouns, preferred names, and
        all things leading us towards diversity.
        <br />
        <br />
        Eventually seeking a company that respects & encourages individuality,
        as well as, strives to cultivate a working environment that is both
        creative and diserve in my beloved city- Tacoma. Or Ta(home)a as I
        like to call it.
      </p>
      </div>
    </div>
  );
}