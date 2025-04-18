import { emojiList } from "./emojiList.js";
// console.log("Jai Jagannath");

const allEmojis=document.querySelector(".allEmojis");
const input=document.querySelector("input");
const btn=document.querySelectorAll("button");

window.addEventListener("load", () => displayEmojis(emojiList));
input.addEventListener("keyup",searchEmojis);

btn.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        
        const button=e.target.innerText.toLowerCase();
        // console.log(button)
        filteredEmojis(button);
    });
});
// WHEN I CLICK ON BUTTON I WILL GET FILTERED EMOJIS
function filteredEmojis(button){
    if(button=="all"){
        return displayEmojis(emojiList);
    }
    const filterBtn=emojiList.filter((obj)=>
        obj.description.toString().includes(button)
    );
    console.log(displayEmojis(filterBtn));
    displayEmojis(filterBtn);
}

function searchEmojis(){
    // SEARCH KIYA HUA EMOJIS MILEGA
    const inputValue=input.value.toLowerCase();
    const filteredArr=emojiList.filter((arr)=>{
        return (arr.aliases.toString().includes(inputValue) ||
        arr.description.includes(inputValue) ||
        arr.tags.toString().includes(inputValue));
    });
    displayEmojis(filteredArr);
}

// TO DISPLAY EMOJIS ON SCREEN
displayEmojis(emojiList);
function displayEmojis(arr){
    allEmojis.innerHTML="";
    const fragment=document.createDocumentFragment();
    arr.forEach((obj)=>{
        const parent=document.createElement("div");
        parent.classList.add("parent");

        const emojiIcon=document.createElement("p");
        emojiIcon.classList.add("icon");
        emojiIcon.innerText=obj.emoji;

        parent.append(emojiIcon);
        fragment.append(emojiIcon);

    });
    allEmojis.append(fragment);
}
