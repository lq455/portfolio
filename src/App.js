import React from 'react';
import './App.css';
import wicked from './bg.jpg'
import research from './research.png'
import demo from './demo.gif'
import demo2 from './record.gif'
import paper from './paper.jpeg'

function App() {
  return (
    <div>
    <p id='aa'>Portfolio</p>
    <div className="App">
    <p>Hey.</p>
    <img src='https://thumbs.gfycat.com/GrimyBetterAdder-small.gif' weight='200' height='200'></img>
    
      <p>I'm Lishan Qin, a freshman at NYU Shanghai majoring in IMA. </p>
      <p>I love using computing skills to create arts and design practical applications to make our life easier. </p>
       <p> I believe that the technology today has made it possible for us to use more ways to express ourselves, </p>
       <p>tell stories and find solutions to the problems we have in our lives to make the world a better place. </p>
       <p>Here are the projects I've been working on.</p>
      
    </div>

    <div>
<br></br><br></br><br></br>

  <p id='eee'>Project One: W.I.C.K.E.D</p>
  <img src={wicked} alt="Logo" weight='350' height='450' />
  <p id='eee'>Summary:</p>
  <p>The “W.I.C.K.E.D” project is a series of educational interactive narratives designed to raise people’s awareness</p>
  <p>of the global warming issue and spread practical everyday knowledge about ways to improve the environmental issue. </p>
  <p>We designed it with game-like features that allow players to make decisions that push the story into different scenarios</p>
  <p>and mixed the knowledge about the global warming in the text and story. The first episode we made includes a short story that</p>
  <p> educates people about the impact of their everyday action on the environment, such as the temperature they set for the AC.  </p>
  <p id='eee'>Research:</p>
  <p>During research process, we conducted several interviews to ask for people’s feelings towards current education about </p>
  <p>global-warming and how they wish it is. We also played those educational games like “The Oregon Trail” and “Self-Reliance”</p>
  <p>o understand how to combine knowledge and entertainment together. We also carried out user-test with out paper prototype to</p>
  <p>hear feedbacks from the audience.</p>
  <img src={research} weight='800'height='1000' />
  <br></br>
  <br></br>
  <p>In order to better comprehend the issue regarding the current education about global warming, we conducted interviews with our </p>
  <p>classmates to hear their thoughts on this matter. From that we learnt that the current education methods failed to provides </p>
  <p>students with incentives to learn about environmental issue. Then, we did some research about those educational games used by </p>
  <p>educator to use entertainment to attract students to learn. After playing games like “The Oregon Trail” and “Self-Reliance”, we </p>
  <p>identify the feasibility of using interactive narratives to raise people’s interest in learning the environmental issue. We then</p>
  <p>searched for the technical support that can make this happen. We found the AVG.js on GitHub that provides an adventure game  </p>
  <p>framework that can make our process of building the game framework easier. </p>
 <p>our paper prototype:</p>
 <img src={paper} weight='100' height='100'></img>
  <p id='web'>https://drive.google.com/file/d/15wTAbUhlh1k9-5-g1SW6GuXALtzxoaqM/view?usp=sharing</p>
  <br></br>
  <br></br>
  <p id='eee'>Prototype</p>
  <img src={demo} weight='280' height='380'></img>
  <img src={demo2} weight='280' height='380'></img>
  <p id='web'>https://global-warming-4a549.firebaseapp.com</p>
  <p>This prototype here is a demo for the first episode for our project. Users are able to make their own choice to push the</p>
  <p>interactive narratives into different scenarios by clicking different choices. Both the text and the choices are closely </p>
  <p>related to our daily behaviors that have impact on the environment.We used AVG.JS to build the structure, which made it</p>
  <p> easier for us to write scripts and design different routers. However, it also had its disadvantages. For example,it’s very </p>
  <p>difficult to use AVG.js to add different medias such as gif or video, which makes the user experience less engaging. Also, the</p>
  <p>library is a little old.</p>
  <br></br>
  <p id='eee'>My contribution</p>
  <p>I'm responsible for the coding part of this project. I used the AVG.js and Storyscript.js library to create the framework for our</p>
  <p>interactive narratives. I designed the structure of the game and wrote different routers for users to choose their own path of this </p>
  <p>narrative. I than added the images and texts in to our project to create the complete narratives.</p>
  <p id='eee'>Future Work</p>
  <p>In the future, before we work on releasing new episodes, we're going to revise our current script and storyline, to make the story</p>
  <p>more complete and engaging. We will also update all the medias we used now. We will include more images, videos and sounds to present</p>
  <p>a better story for users to improve their experience and attract more people to come play it and learn more about the impact of their daily</p>
  <p>lifestyle has on the environment. After that, we'll release more episodes each with a unique theme and story. We're also thinking about </p>
  <p>working with eduactors and take their requests to design interactive narratives for them to use as class materials.</p>
    </div>
    </div>
  )
}

export default App;
