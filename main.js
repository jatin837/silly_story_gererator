const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']




randomize.onclick = () => {
    let xItem = randomValueFromArray(insertX)
    console.log(xItem)
    let yItem = randomValueFromArray(insertY)
    console.log(yItem)
    let zItem = randomValueFromArray(insertZ)
    console.log(zItem)
    let name = customName.value
    let storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`
    
    if(name !==''){
      story.style.visibility = 'visible'
      console.log(xItem)
      story.textContent = storyText
    }
    else{
      story.style.visibility = 'hidden'
    }
    
  
}

