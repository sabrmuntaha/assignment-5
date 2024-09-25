// show the donated amount 1
document.getElementById('donate-money').addEventListener('click', function(event){
    

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    if(addMoneyInput <= 0){
       alert('Failed to donate')}


    else{
        const visibleAmount = document.getElementById('visible-amount').innerText;
      console.log(visibleAmount)

      const addMoneyNumber = parseFloat(addMoneyInput);
      const visibleNumber = parseFloat(visibleAmount);
      const newBalance = addMoneyNumber + visibleNumber;
      console.log(newBalance);

      document.getElementById('visible-amount').innerText = newBalance;
    }

})


// current balance - 1

document.getElementById('donate-money').addEventListener('click', function(event){
  event.preventDefault();
  
  let addMoneyInput = document.getElementById('input-add-money').value;
  //console.log(addMoneyInput);

  if(addMoneyInput <= 0){
     // alert('Failed to add money! Please try again')

    

  }
  else {
      let currentBalance = document.getElementById('current-balance').innerText;
     // console.log(currentBalance);

   addMoneyInput = parseFloat(addMoneyInput);

  currentBalance = parseFloat(currentBalance);
  //console.log(addMoneyInput);
  const newBalance = currentBalance - addMoneyInput;
  document.getElementById('current-balance').innerText = newBalance.toFixed(2);
}
});



// show the donated amount 2

document.getElementById('donate-money-2').addEventListener('click', function(event){
    
const addMoneyInput = document.getElementById('input-add-money-2').value;
console.log(addMoneyInput);

if(addMoneyInput <= 0){
  alert('Failed to donate')}

  else{
    const visibleAmount = document.getElementById('visible-amount-2').innerText;
    console.log(visibleAmount);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const visibleNumber = parseFloat(visibleAmount);
    const newBalance = addMoneyNumber + visibleNumber;;
   console.log(newBalance)
   document.getElementById('visible-amount-2').innerText = newBalance
  }


})

// current balance-2

document.getElementById('donate-money-2').addEventListener('click', function(event){

  let addMoneyInput = document.getElementById('input-add-money-2').value;

  if(addMoneyInput <= 0){

  }
  else{
    let currentBalance = document.getElementById('current-balance').innerText;
    addMoneyInput = parseFloat(addMoneyInput);
    currentBalance = parseFloat(currentBalance);
    const newBalance = currentBalance - addMoneyInput;
    document.getElementById('current-balance').innerText = newBalance.toFixed(2);
  }

})

// show the donated amount 3

document.getElementById('donate-money-3').addEventListener('click', function(event){
  const addMoneyInput = document.getElementById('input-add-money-3').value;
  console.log(addMoneyInput);

  if(addMoneyInput <= 0){
    alert('Failed to donate')}
    else{
      const visibleAmount = document.getElementById('visible-amount-3').innerText;
      console.log(visibleAmount);

      const addMoneyNumber = parseFloat(addMoneyInput);
      const visibleNumber = parseFloat(visibleAmount);
      const newBalance = addMoneyNumber + visibleNumber;
      console.log(newBalance)
      document.getElementById('visible-amount-3').innerText = newBalance
    }
  
})

// current balance-2

document.getElementById('donate-money-3').addEventListener('click', function(){
  let addMoneyInput = document.getElementById('input-add-money-3').value;

  if(addMoneyInput <= 0){

  }
  else{
    let currentBalance = document.getElementById('current-balance').innerText;
    addMoneyInput = parseFloat(addMoneyInput);
    currentBalance = parseFloat(currentBalance);
    const newBalance = currentBalance - addMoneyInput;
    document.getElementById('current-balance').innerText = newBalance.toFixed(2);
  }
})



