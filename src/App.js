import React,{useState} from 'react';
import styled from 'styled-components';
import { tsModuleDeclaration } from '@babel/types';


const AppWrapper = styled.div`
  display: flex;
  // flex-direction: column;
  background: tomato;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
 `;

 const PresentationWrapper = styled.div`
  display:flex;
  flex-direction: row;
  background-color: black;
  flex:1;
  justify-content:center;



 `;
const Presentation = styled.div`
  display:flex;
  flex-direction: row;
  background-color: yellow;
  color:black;
  height: 40vh;
  width: 80vh;
  min-height: 100px;
  justify-content: center;
  align-items: center;

`;

const DirectionButton = styled.button`
  color: teal;

`;


let slides = [
  "1","2","3","4","5"
];




function App() {
  const [currentSlides,SetcurrentSlides] = useState(0);
  function nextSlide(){
    SetcurrentSlides((currentSlides +1) %slides.length);
  }


  return (
    <AppWrapper>
      <PresentationWrapper>
        <DirectionButton>
          Previous
        </DirectionButton>
      <Presentation>
       {slides[currentSlides]}
      </Presentation>
      <DirectionButton onClick={nextSlide}>
          Next
        </DirectionButton>
      </PresentationWrapper>
    </AppWrapper>
  );
}

export default App;
