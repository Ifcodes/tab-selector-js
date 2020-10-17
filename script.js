function render(){
  let tabSelector = document.querySelectorAll('.tabs span');

  let activeTab;
tabSelector.forEach(tab => {
  tab.addEventListener('click',events => {
    activeTab = events.target.innerText;
    
    tabSelector.forEach(t => {
      if(t.innerText === activeTab){
        t.classList.add('active')
      }
      else{
        t.classList.remove('active')
      }
    })
  })
})

}
render();