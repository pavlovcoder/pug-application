let unit1 = document.getElementsByClassName('unit-1')[0];
console.log('Console was called!');

//First method accesing data-attributes:
let attrNames = ['type', 'source', 'pages', 'authors'];
attrNames.forEach(attr => {
  console.log(unit1.getAttribute(`data-${attr}`));
});

//Second method accesing data-attributes:
let unitOut1 = '';
unitOut1 += unit1.dataset.type + '<br/>';
unitOut1 += unit1.dataset.source + '<br/>';
unitOut1 += unit1.dataset.pages + '<br/>';
unitOut1 += unit1.dataset.authors + '<br/>';
console.log(unitOut1);