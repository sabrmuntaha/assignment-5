function showSectionById(id){
 document.getElementById('add-money-section').classList.add('hidden');
 document.getElementById('donation-history-layout').classList.add('hidden');

 // show the section

 document.getElementById(id).classList.remove('hidden');
}