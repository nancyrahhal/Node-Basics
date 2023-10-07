
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text=text.trim();
  if (text === 'quit'|| text=== 'exit') {
    quit();
  }
  else if(text.startsWith('hello')){
    hello(text);
  }
  else if(text==='help'){
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(helloCommand){
  helloCommandArray=helloCommand.split(" ");//split input into array of words
  if(helloCommandArray[0]==="hello"){//check if the first word is "hello", for example not "hellooo"
  if(helloCommandArray[1]){//if second word after "hello" is defined, then print hello with this word!
    if(helloCommandArray.length>=2){//for multiple words after hello
      helloCommandString=helloCommandArray.slice(1).join(" ");//join these words into 1 string
      console.log(`hello ${helloCommandString}!`)
    }
    else{//for single word after hello
      console.log(`hello ${helloCommandArray[1]}!`)
    }
  }
  else{//if the second word doesn't exist, then will handle an emty state
    console.log(`hello!`)
  }
}else{//if the first word is not strictly equal to "hello", it will call the unknown function
  unknownCommand(helloCommand);
}
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Lists all the possible commands
 * hello to say hello
 * quit/exit to exit the application
 *
 * @returns {void}
 */
function help(){
  console.log(`Possible commands:\n1.hello\n2.quit\n3.exit\n4.help`)
}


// The following line starts the application
startApp("Nancy Rahhal")
