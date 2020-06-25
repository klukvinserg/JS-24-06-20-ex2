function getData() {
  let req = new XMLHttpRequest();

  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else {
    req = new ActiveXObject('MicrosoftXMLHTTP');
  }

  req.onreadystatechange = function () {
    if (this.readyState === 4 && req.status === 200) {
      reqFun(this.responseText);
    } else if (this.readyState === 4) {
      reqError();
    }
  };

  req.open('GET', `https://api.github.com/users/${search.value}`, true);

  req.send();

  search.value = '';
  let delActive = document.getElementsByTagName('label');
  delActive[0].className = '';
}

function reqFun(data) {
  document.getElementById('result').innerHTML = '';

  let userData = JSON.parse(data);

  let createDivColumnOne = document.createElement('div');
  createDivColumnOne.setAttribute('class', 'columnOne');

  let createDivRowOne = document.createElement('div');
  createDivRowOne.setAttribute('class', 'rowText');

  let createDivRowTwo = document.createElement('div');
  createDivRowTwo.setAttribute('class', 'rowText');

  let createDivRowThree = document.createElement('div');
  createDivRowThree.setAttribute('class', 'rowText');

  let createImg = document.createElement('img');
  createImg.setAttribute('src', `${userData.avatar_url}`);

  let createP_one = document.createElement('p');
  createP_one.setAttribute('class', 'title');
  createP_one.innerText = 'Name';

  let createP_one_one = document.createElement('p');
  createP_one_one.setAttribute('class', 'resultText');
  if (userData.name === null) {
    createP_one_one.innerText = `No name`;
  } else {
    createP_one_one.innerText = `${userData.name}`;
  }

  let createP_two = document.createElement('p');
  createP_two.setAttribute('class', 'title');
  createP_two.innerText = 'Login';

  let createP_two_two = document.createElement('p');
  createP_two_two.setAttribute('class', 'resultText');
  createP_two_two.innerText = `${userData.login}`;

  createDivColumnOne.appendChild(createDivRowOne);
  createDivColumnOne.appendChild(createDivRowTwo);
  createDivColumnOne.appendChild(createDivRowThree);

  createDivRowOne.appendChild(createImg);

  createDivRowTwo.appendChild(createP_one);
  createDivRowTwo.appendChild(createP_one_one);

  createDivRowThree.appendChild(createP_two);
  createDivRowThree.appendChild(createP_two_two);

  result.appendChild(createDivColumnOne);

  let createDivColumnTwo = document.createElement('div');
  createDivColumnTwo.setAttribute('class', 'columnTwo');

  let createDivRowFour = document.createElement('div');
  createDivRowFour.setAttribute('class', 'rowText');

  let createDivRowFive = document.createElement('div');
  createDivRowFive.setAttribute('class', 'rowText');

  let createDivRowSix = document.createElement('div');
  createDivRowSix.setAttribute('class', 'rowText');

  let createDivRowSeven = document.createElement('div');
  createDivRowSeven.setAttribute('class', 'rowText');

  let createDivRowEight = document.createElement('div');
  createDivRowEight.setAttribute('class', 'rowText');

  let createP_three = document.createElement('p');
  createP_three.setAttribute('class', 'title');
  createP_three.innerText = 'Url to GitHub:';

  let createP_three_three = document.createElement('p');
  createP_three_three.setAttribute('class', 'resultText');

  let createP_three_three_a = document.createElement('a');
  createP_three_three_a.setAttribute('href', `${userData.url}`);
  createP_three_three_a.setAttribute('target', '_blank');
  createP_three_three_a.innerText = `${userData.url}`;

  let createP_four = document.createElement('p');
  createP_four.setAttribute('class', 'title');
  createP_four.innerText = 'Blog:';

  let createP_four_four = document.createElement('p');
  createP_four_four.setAttribute('class', 'resultText');

  let createP_four_four_a = document.createElement('a');
  createP_four_four_a.setAttribute('target', '_blank');
  if (userData.blog.length === 0) {
    createP_four_four.innerText = `No blog`;
  } else {
    createP_four_four_a.innerText = `${userData.blog}`;
  }

  let createP_five = document.createElement('p');
  createP_five.setAttribute('class', 'title');
  createP_five.innerText = 'City:';

  let createP_five_five = document.createElement('p');
  createP_five_five.setAttribute('class', 'resultText');
  if (userData.location === null) {
    createP_five_five.innerText = `No city`;
  } else {
    createP_five_five.innerText = `${userData.location}`;
  }

  let createP_six = document.createElement('p');
  createP_six.setAttribute('class', 'title');
  createP_six.innerText = 'Email:';

  let createP_six_six = document.createElement('p');
  createP_six_six.setAttribute('class', 'resultText');
  if (userData.email === null) {
    createP_six_six.innerText = `No email`;
  } else {
    createP_six_six.innerText = `${userData.email}`;
  }

  let createDivFlOne = document.createElement('div');
  createDivFlOne.setAttribute('class', 'fl');

  let createDivFlTwo = document.createElement('div');
  createDivFlTwo.setAttribute('class', 'fl');

  let createP_seven = document.createElement('p');
  createP_seven.setAttribute('class', 'title');
  createP_seven.innerText = 'Followers:';

  let createP_seven_seven = document.createElement('p');
  createP_seven_seven.setAttribute('class', 'resultText');
  createP_seven_seven.innerText = `${userData.followers}`;

  let createP_eight = document.createElement('p');
  createP_eight.setAttribute('class', 'title');
  createP_eight.innerText = 'Following:';

  let createP_eight_eight = document.createElement('p');
  createP_eight_eight.setAttribute('class', 'resultText');
  createP_eight_eight.innerText = `${userData.following}`;

  createDivColumnTwo.appendChild(createDivRowFour);
  createDivColumnTwo.appendChild(createDivRowFive);
  createDivColumnTwo.appendChild(createDivRowSix);
  createDivColumnTwo.appendChild(createDivRowSeven);
  createDivColumnTwo.appendChild(createDivRowEight);

  createDivRowFour.appendChild(createP_three);
  createDivRowFour.appendChild(createP_three_three);
  createP_three_three.appendChild(createP_three_three_a);

  createDivRowFive.appendChild(createP_four);
  createDivRowFive.appendChild(createP_four_four);
  createP_four_four.appendChild(createP_four_four_a);

  createDivRowSix.appendChild(createP_five);
  createDivRowSix.appendChild(createP_five_five);

  createDivRowSeven.appendChild(createP_six);
  createDivRowSeven.appendChild(createP_six_six);

  createDivRowEight.appendChild(createDivFlOne);
  createDivRowEight.appendChild(createDivFlTwo);

  createDivFlOne.appendChild(createP_seven);
  createDivFlOne.appendChild(createP_seven_seven);

  createDivFlTwo.appendChild(createP_eight);
  createDivFlTwo.appendChild(createP_eight_eight);

  result.appendChild(createDivColumnTwo);
}

function reqError() {
  document.getElementById('result').innerHTML = '';

  let createErrorEl = document.createElement('div');
  createErrorEl.setAttribute('class', 'errorDiv');
  createErrorEl.innerText = 'No result';
  result.appendChild(createErrorEl);
}
