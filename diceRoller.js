var diceroll = {
    dicetype: 6,

    rollthem: function() {
        var randy = Math.floor(Math.random() * this.dicetype) + 1;
        return randy;
    }
}
function getroll(randy) {
    var temproll = document.getElementById('temproll');
    temproll.innerHTML = randy;
}
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.rollthem();
    getroll(result);
  };