// Iteration 1: Names and Input

let hacker1 = 'Julia'
console.log(`The driver's name is ${hacker1}`)
 let hacker2 = 'Cam'
 console.log(`The navigator's name is ${hacker2}`)

//
// Iteration 2: Conditionals
//if (hacker1.length > hacker2.length) {
//    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
//} else if (hacker1.length < hacker2.length) {
//    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
//} else {
//    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
//}

// Iteration 3: Loops

for (let i = 0; i <= hacker1.length; i++) {
    console.log(hacker1.charAt(i).toUpperCase())
}

for (let i = 0; i <= hacker2.length; i++) {
    console.log(hacker2.split( '' ).reverse( ).join( '' )) /* find different way*/
}


// 3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?
if (hacker1.charAt(0) < hacker2.charAt(0)) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}



// extra 

let threePar = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros dictum, tempor urna et, sodales purus. Nunc blandit eros vel ornare convallis. Sed pretium, libero convallis bibendum laoreet, eros turpis mattis purus, id convallis libero enim non orci. Nullam commodo fringilla urna vitae fringilla. Ut in lectus consectetur, vehicula neque quis, posuere mauris. Mauris hendrerit mattis nunc, a sodales ex lacinia ac. Duis vehicula mollis gravida. In purus felis, sagittis eu tincidunt a, consectetur nec elit. Cras ligula neque, commodo sed consequat quis, gravida sed eros. In scelerisque pellentesque aliquam. Nulla vitae tempus velit, non lacinia justo. Donec volutpat eu urna id feugiat. Etiam venenatis diam et tempus posuere.

Morbi mollis molestie mauris non hendrerit. Pellentesque id libero eu leo maximus hendrerit sit amet in justo. Donec gravida, nisl eu venenatis aliquet, ligula neque ultrices massa, non vestibulum arcu neque et arcu. Vivamus auctor nibh a nunc consequat, id aliquet elit gravida. Praesent auctor feugiat ipsum non suscipit. Nunc a sapien sed magna rutrum consequat vulputate ac urna. Curabitur in varius magna. Quisque non viverra elit, vitae hendrerit lacus. Donec consequat at nibh eu fermentum. Etiam quam nisl, sodales ut est eget, imperdiet sodales odio.

Ut malesuada efficitur velit sit amet tincidunt. Vestibulum faucibus scelerisque risus, in tempor ipsum interdum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus semper dolor, sed euismod ipsum mollis vitae. Nulla dapibus imperdiet tempor. Duis ultricies ipsum eu neque tempor, iaculis volutpat mauris tincidunt. Donec interdum ornare massa, eget suscipit arcu tincidunt eget. Etiam venenatis ipsum lacus, at feugiat est vestibulum eget. Duis a fermentum massa. Pellentesque ac molestie turpis.";

