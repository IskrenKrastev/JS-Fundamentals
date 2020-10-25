function login(input) {
  let username = input.shift();
  let password = input.shift();
  let reverse = "";
  let noLogin = 0
  for (let i = username.length - 1; i >= 0; i--) {
    reverse += username[i] + "";
  }
  while (reverse !== password) {
    
    noLogin ++
    if (noLogin === 4){
        console.log(`User ${username} blocked!`);
        break;
        
    }
    console.log(`Incorrect password. Try again.`);
    password = input.shift();
  }
  if (reverse === password) {
    console.log(`User ${username} logged in.`);
  }
  
}
login(["Mo",'aaaaa','bbbbbb','oM']);
