import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Axios from 'axios'
import  { FaSearch } from 'react-icons/fa'
import { FcSpeaker } from 'react-icons/fc'
export default function DictionaryApp() {
    // destructured of data
    const[data, setData]=useState("");
    const[searchWord,setSearchWord]=useState("");
    // create a eventHandeling function for fetch api data of dictionary app

   function getMeaning()
   {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then((response)=>{
        setData(response.data[0]);
    });

}


// create a eventHandeling function for play and listen each wordof meaning with audio play

    function playAudio()
    {
      let audio=new Audio(data.phonetics[0].audio);
      audio.play();  
    }  

  return (


    <>
        <Container className='p-5 w-50 mx-auto mt-5 dictionary-app'>
            <h1 className='text-center'>Live Dictionary App</h1>
            <hr className='w-50 mx-auto' />

            <div className='input-group'>
                <input type='text' placeholder='Search a Word.........' className='form-control' onChange={(e)=>{setSearchWord(e.target.value)}} />

                <button type='button' className='btn btn-md btn-danger text-white' onClick={getMeaning}><FaSearch /></button>
            </div>


            {/* display the meaning of word or fetch from api */}

            <div className='form-group mt-5'>
             {data && (
                <div>
                    <h2>{data.word} {" "} <button type='button' className='btn btn-md btn-dark text-white ms-3' onClick={playAudio}><FcSpeaker /></button></h2>
                      
                    <h3>Part of speech : </h3>
                    <p>{data.meanings[0].partOfSpeech}</p>

                    <h4>Definitions :</h4>
                    <p>{data.meanings[0].definitions[0].definition}</p>

                    <h5>Examples :</h5>  

                    <p>{data.meanings[0].definitions[0].example}</p>

                
                </div>


             ) }

            </div>

        </Container>
    </>

)
}
