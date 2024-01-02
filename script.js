$(document).ready(function(){
    const audioClips=document.querySelectorAll('.clip');

    const pads=document.querySelectorAll('.drum-pad');

    const display= $('#display');



    const audioClipsArray = Array.from(audioClips);
    console.log(audioClipsArray) 

    pads.forEach((pad)=>{
        pad.addEventListener('click',()=>{
            const audioClip= audioClipsArray.find((clip)=> clip.id===pad.id);
            audioClip.play();
            $('#display').text(audioClip.getAttribute('name'));
            })
        })
    pads.forEach((pad)=>{
        pad.addEventListener('click',()=>{
            const audioClip= audioClipsArray.find((clip)=> clip.id===pad.id);
            $('button').on('keydown',(event)=>{
                if(event.key === audioClip.id ){
                    audioClip.play();
                    $('#display').text(audioClip.getAttribute('name'));	 
                }
            })
        })
    })
});