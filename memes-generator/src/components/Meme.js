import React from 'react';


function Meme(){
    const [meme , setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:"https://i.imgflip.com/1bij.jpg",
    });
    const url = 'https://api.imgflip.com/get_memes';

    const [allMemeImages , setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllMemeImages(data));
    },[])

//Using async
    // React.useEffect(()=>{
    //     async function fetchData(){
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setAllMemeImages(data);
    //     }
    //     fetchData();
    // },[]);
    function getRandomImage(){
        let memesArray = allMemeImages.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({...prevMeme,randomImage:url}));
    }

    const handleChange = (event) => {
        const {name , value} = event.target;
        setMeme(currentMemeState => ({...currentMemeState , [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getRandomImage();
    }

    return (
        <section className='meme'>
                <form className="form"onSubmit={handleSubmit}>
                    <input className='form--input input-setting' name='topText' value={meme.topText} onChange={handleChange}  type='text' placeholder='Top text'/>
                    <input className='form--input input-punchline' name='bottomText' value={meme.bottomText} onChange={handleChange}   type='text' placeholder='Bottom text'/>
                    <button className='form--button'>Get a new meme image  🖼</button>
                </form>
                <div className='image--container'>
                    <img src={meme.randomImage} className='form--image' alt='meme'/>
                    <h2 className='meme-text top'>{meme.topText}</h2>
                    <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                </div>
                
        </section>
    );
}

export default Meme;