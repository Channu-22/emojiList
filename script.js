import { emojiList } from "./emojiList.js";
// console.log("channu");
const input=document.querySelector("input");
const result=document.querySelector("#allEmojis");
const btns=document.querySelectorAll(".filterBtn");

window.addEventListener("load",()=>displayEmojiList(emojiList));
input.addEventListener("keyup", searchEmojis);
/*
btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", () => {
        const btnValue = btn.value.toLowerCase();

        if (btnValue === 'all') {
            return displayEmojiList(emojiList);
        
        }
        const filteredList = emojiList.filter((obj) => {
            // if (obj.description.includes(btnValue)) return true;
            // if (obj.aliases.toString().includes(btnValue)) return true;
            // if (obj.tags.join("").includes(btnValue)) return true;
            // if (obj.category.includes(btnValue)) return true;
            if(obj.description.includes(btnValue) || obj.aliases.toString().includes(btnValue) || obj.tags.join("").includes(btnValue) || obj.category.includes(btnValue)){
                return true;
            }
        });
        console.log(filteredList);
        displayEmojiList(filteredList)
    });
}); */



function searchEmojis(e){
    e.preventDefault();
    const inputValue = input.value.toLowerCase();
    const filteredList = emojiList.filter((obj) => {
        if(obj.description.includes(inputValue) || obj.aliases.toString().includes(inputValue) || obj.tags.join("").includes(inputValue) ){
            return true;
        }
    });
    displayEmojiList(filteredList);
}

function displayEmojiList(arr){
    result.innerHTML="";
    const fragment=document.createDocumentFragment();
    arr.forEach((object)=>{
        let icon=document.createElement("span");
        icon.classList.add("icon");
        icon.innerText=object.emoji;
        fragment.append(icon);
    }) 
    result.append(fragment);
}

