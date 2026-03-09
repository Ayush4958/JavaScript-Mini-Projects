am = document.getElementById('amount')
dur = document.getElementById('duration')
int = document.getElementById('interest')
sub = document.getElementById('submit')
im = document.getElementById('IM')
er = document.getElementById('ER')


function calculate() {
  if(am.value <=0){
    alert("Enered amount should be greather than 0.....")
  }
  im.innerHTML = am.value*12*dur.value
  i = int.value/12
  fv = am.value * [(1 + i)^ dur.value - 1] *(1 +i) / i // This formula can vareis different accordingly to the mutual fund or according to investment plan. This is general formula I had used form google 
  er.innerHTML = Math.round(fv) // It will show a round up value of expected return
}

