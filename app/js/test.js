//How can I make a redirect page using jQuery?


// window.location
window.location.replace('http://www.example.com')
window.location.assign('http://www.example.com')
window.location.href = 'http://www.example.com'
document.location.href = '/path'

// window.history
window.history.back()
window.history.go(-1)

// window.navigate; ONLY for old versions of IE
window.navigate('top.jsp')


// probably no bueno
self.location = 'http://www.example.com';
top.location = 'http://www.example.com';

// jQuery
$(location).attr('href','http://www.example.com')
$(window).attr('location','http://www.example.com')
$(location).prop('href', 'http://www.example.com')


//window.location.href is not a method, it's a property 
//that will tell you the current URL location of the browser. 
//Changing the value of the property will redirect the page.
//
//