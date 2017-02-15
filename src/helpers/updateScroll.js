var updateScroll = function(elementClass) {
  var objDiv = document.getElementsByClassName(elementClass)[0];
  objDiv.scrollTop = objDiv.scrollHeight;
};

export default updateScroll;
