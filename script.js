const titlebtn = document.getElementById('title');
const wrapper = document.querySelector('div.wrapper');
const buttons = document.getElementsByTagName('button');

titlebtn.addEventListener('click',function(){
    if(wrapper.style.display == 'none'){
        wrapper.style.display = 'block';
    }
    else {
        wrapper.style.display = 'none';
    }
})

        console.log(buttons);

setInterval(charChange, 5);
/*function charChange(){
    let string;
    let rand;
    let chars = ['#', '!', '@', '$', '%', '&', '+', '?'];
    for(i = 0; i < buttons.length; i++){
        string = buttons[i].textContent;
        rand = Math.floor(Math.random() * 7)
        let char = chars[rand];
        string = char + string.slice(1,-1) + char;
        buttons[i].textContent = string;
    }
}*/
let y = 0;
let x = 0;
function charChange(){
    let chars = ['#', '!', '@', '$', '%', '&', '+', '?'];

    if (y == chars.length){
        y = 0;
    }
    if (x == buttons.length){
        x = 0;
    }
    let string = buttons[x].textContent;
    buttons[x].textContent = chars[y] + string.slice(1,-1) + chars[y];
    y++;
    x++;
    }