var randomizeId = function(id) {
return id.split('').sort(function(){return 0.5-Math.random()}).join('');
};

export default randomizeId;
