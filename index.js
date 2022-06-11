
let firstAnswer = window.prompt('Do you head LEFT or RIGHT?')
if (firstAnswer === 'LEFT') {
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you FOLLOW it, or CONTINUE on your path?`)
    if (secondAnswer === 'FOLLOW') {
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in font of warm blankets and subsisting off of inexplicably warm soup.  They are content with you staying, but you wonder if you should alert the world to this magical safe haven.  Do you STAY or SPREAD THE WORD?')
    }
        
    else if (secondAnswer === 'CONTINUE') {

        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above.  There is  a long, winding STAIRCASE, and a much quicker, but rickety-looking LADDER that leads up toward the light.  Which do you take?')
    }

}
else if (firstAnswer === 'RIGHT') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Do you go to the CHEST or take the PATH away?`)
    if (secondAnswer === "CHEST") {
        let thirdAnswer = window.prompt("The dragon wakes up!  You only have a moment to respont, to STAY or RUN")
    }

}
