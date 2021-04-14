// Iteration 1: Names and Input
let hacker1= "Stephane"
let hacker2= "Emna"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
// Iteration 3: Loops
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let compounded="";
for(index = 0; index < hacker1.length; index++ ) {
    compounded = compounded + hacker1[index].toUpperCase()+ " "  ;
}
console.log(compounded)
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navCompound="";
for(index = hacker2.length-1; index >= 0; index-- ) {
    navCompound = navCompound + hacker2[index] + " "  ;
}
console.log(navCompound)
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
// if same name ?=> cl( waw same name)
// then for
if(hacker1===hacker2){
    console.log("What?! You both have the same name?")
}
        for(index = 0; index < hacker1.length-1 ; index++ ){
            if (hacker1[index] > hacker2[index]){
                console.log(`Yo, the navigator goes first definitely.`);
                break
            } else if (hacker1[index] < hacker2[index]){
                console.log(`The driver's name goes first.`);
                break
            }else {
                continue;
            }
        };
// Bonus 1

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus ipsum sed convallis elementum. Donec odio ex, luctus ut laoreet accumsan, vestibulum non enim. Ut in tortor urna. Nam eu metus in ipsum sodales gravida sit amet sed quam. Donec non mauris a tellus gravida ultrices vel et urna. Curabitur placerat mauris a tristique viverra. Nullam eu eros purus. In at lacus vitae velit lobortis mollis. \
Aenean justo elit, volutpat at hendrerit vitae, elementum vitae est. Pellentesque dictum enim nec sem egestas placerat. Pellentesque molestie placerat neque, a rutrum ligula. Mauris vulputate nec mauris vitae iaculis. Cras vitae diam mattis, facilisis augue non, fringilla mi. Nunc ex lectus, scelerisque nec elit quis, posuere posuere libero. Sed et diam ornare, egestas ligula ac, pulvinar sapien. Suspendisse faucibus mollis nunc, id ultrices lacus pellentesque sit amet. Nunc suscipit arcu et lorem gravida, in congue tellus sollicitudin. Nulla fermentum cursus tellus et laoreet. Pellentesque sed egestas dui, ut scelerisque tortor. \
In id feugiat lorem, dictum lectus. Mauris mattis quam eget metus sodales aliquam. Fusce condimentum metus ut bibendum dignissim. Maecenas scelerisque sit amet erat vel accumsan. Fusce tristique purus augue, id volutpat purus porttitor ut. Integer vestibulum, sem dignissim vehicula pellentesque, augue eros accumsan leo, at pharetra mi ipsum ut ligula. Phasellus ultrices elit sit amet egestas pharetra. Vestibulum felis magna, facilisis a velit at, lacinia pretium neque. Duis non neque eleifend, varius ligula sit amet, aliquam ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras finibus, est nec dapibus luctus, sapien dolor consequat tellus, id ullamcorper nibh diam a eros. Aliquam nec consequat odio."


console.log(text.split(" ").length)


let occurence = 0

text.split(" ").forEach(element => {
    if(element === "et") {
        occurence +=1
    } 
    
});
console.log(occurence)