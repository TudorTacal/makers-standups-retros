var updateScroll = function(elementClass) {
  console.log(elementClass);
  var objDiv = document.getElementsByClassName(elementClass)[0];
  objDiv.scrollTop = objDiv.scrollHeight;
  console.log('this gets called')
};

export default updateScroll;
