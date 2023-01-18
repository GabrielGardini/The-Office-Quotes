import './App.css';
import Box from '@mui/material/Box';

import dwight from "../src/assets/dwight.jpg";
import angela from "../src/assets/angela.jpg";
import pam from "../src/assets/pam.jpg";
import jim from "../src/assets/jim.jpg";
import andy from "../src/assets/andy.jpg";
import erin from "../src/assets/erin.jpg";
import kevin from "../src/assets/kevin.jpg";
import michael from "../src/assets/michael.png";
import toby from "../src/assets/toby.webp";
import stanley from "../src/assets/stanley.webp";
import meredith from "../src/assets/meredith.webp";
import creed from "../src/assets/creed.webp";
import darryl from "../src/assets/darryl.webp";
import phyllis from "../src/assets/phyllis.webp";
import holly from "../src/assets/holly.jpg";
import kelly from "../src/assets/kelly.jpg";
import ryan from "../src/assets/ryan.jpg";
import robert from "../src/assets/robert.jpg";
import oscar from "../src/assets/oscar.jpg";

import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';
import axios from 'axios';



function App() {

  const [quote, setQuote] = useState('I declare bankruptcy');
  const [author, setAuthor] = useState('Michael Scott');
  const [imagem, setImagem] = useState(1);

  const foto = [
    {author: "Dwight Schrute", image:dwight, index:0},
    {author: "Michael Scott" , image:michael, index: 1},
    {author: "Jim Halpert", image:jim, index: 2},
    {author: "Pam Beesly", image:pam, index:3},
    {author: "Andy Bernard" , image: andy, index:4},
    {author: "Angela Martin", image:angela, index: 5},
    {author: "Holly Flax", image:holly, index: 6},
    {author: "Kevin Malone" , image: kevin, index:7},
    {author: "Erin Hannon", image:erin, index: 8},
    {author: "Toby Flenderson", image:toby, index: 9},
    {author: "Ryan Howard", image:ryan, index: 10},
    {author: "Kelly Kapoor", image:kelly, index: 11},
    {author: "Stanley Hudson", image:stanley, index: 12},
    {author: "Meredith Palmer", image:meredith, index: 13},
    {author: "Robert California", image:robert, index: 14},
    {author: "Creed Bratton", image:creed, index: 15},
    {author: "Darryl Philbin", image:darryl, index: 16},
    {author: "Oscar Martinez", image:oscar, index: 17},
    {author: "Phyllis Lapin", image:phyllis, index: 18},


  ];

  const getLocation = async ()=>{
    const msg = new SpeechSynthesisUtterance()
    const res = await axios.get('https://www.officeapi.dev/api/quotes/random');
    msg.text=res.data.data.content;

    setQuote(res.data.data.content);
    setAuthor(res.data.data.character.firstname + " " + res.data.data.character.lastname);
    setImagem(foto.filter(obj =>(obj.author === author)))
    window.speechSynthesis.speak(msg)
  }
  return (
    <div className="Appi" style={{backgroundColor:'#727980'}}>
      <Box sx={{p:5, color:'#edefe2', display: 'flex', justifyContent:'center'}}>
        <h1>The Office Quotes</h1>
      </Box>
      <Box sx={{backgroundColor:'#727980',p:5, color:'#edefe2', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:-12}}>
        <h1>{quote}</h1>
        <h1>{author}</h1>
        <img  width={300} height={300}src={imagem=== 1? foto[1]?.image: foto[(foto.filter(obj =>(obj.author === author)))[0]?.index]?.image}/> 
      </Box>
      <Box sx={{p:5, color:'#edefe2',backgroundColor:'#727980', display: 'flex', justifyContent:'center'}}>
        <Button sx={{backgroundColor:'#edefe2', color:'#727980'}} variant='contained' onClick={()=>getLocation()} >Generate</Button>
      </Box>

    </div>
  );
}

export default App;
