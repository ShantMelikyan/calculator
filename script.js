// Select elements
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
let toggle = document.getElementsByClassName("button");
let arr = [...toggle];

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === 'c') {
      // Clear the result
      result.value = '';
    } else if (button.value === '=') {
      // Calculate the result
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = 'Error';
      }
    }
    else if (button.value === 'backspace') {
      // Remove the last character from the result
      result.value = result.value.slice(0, -1);
    }
    else {
      // Append the button value to the result
      result.value += button.value;
    }
  });
});

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = 'hsl(222, 26%, 31%)';
      document.querySelectorAll('.btn').forEach(element => element.style.backgroundColor = 'hsl(30, 25%, 89%)');
      document.getElementsByTagName("body")[0].style.color = 'white';
      document.querySelector('.tri-state-toggle').style.backgroundColor = 'hsl(223, 31%, 20%)';
      document.querySelector('.result').style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.querySelector('.result').style.color = 'white';
      document.querySelector('.clear').style.backgroundColor = 'hsl(225, 21%, 49%)';
      document.querySelector('.delete').style.backgroundColor = 'hsl(225, 21%, 49%)';
      document.querySelector('.clear').style.borderBottom = '3px solid hsl(222, 26%, 31%)';
      document.querySelector('.delete').style.borderBottom = '3px solid hsl(222, 26%, 31%)';
      document.querySelector('.calculate').style.backgroundColor = 'hsl(6, 63%, 50%)';
      document.querySelector('.calculate').style.borderBottom = '3px solid hsl(6, 70%, 34%)';
      document.querySelector('.buttons').style.backgroundColor = 'hsl(223, 31%, 20%)';
      document.querySelectorAll('.btn').forEach(element => element.style.color = '#323f61');
      const elements = document.querySelectorAll('.tri-state-toggle input');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'hsl(6, 63%, 50%)';
      }
      // document.querySelectorAll('.tri-state-toggle input').style.backgroundColor = '';

    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      document.querySelectorAll('.btn').forEach(element => element.style.backgroundColor = 'hsl(45, 7%, 89%)');
      document.querySelectorAll('.btn').forEach(element => element.style.borderBottom = '3px solid #a69d91');
      document.getElementsByTagName("body")[0].style.color = 'hsl(60, 10%, 19%)';
      document.querySelector('.tri-state-toggle').style.backgroundColor = 'hsl(0, 5%, 81%)';
      document.querySelector('.result').style.backgroundColor = '#ededed';
      document.querySelector('.result').style.color = '#35352c';
      document.querySelector('.clear').style.backgroundColor = '#377f86';
      document.querySelector('.delete').style.backgroundColor = '#377f86';
      document.querySelector('.clear').style.borderBottom = ('3px solid hsl(185, 58%, 25%)');
      document.querySelector('.delete').style.borderBottom = ('3px solid hsl(185, 58%, 25%)');
      document.querySelector('.calculate').style.borderBottom = ('3px solid hsl(25, 99%, 27%)');
      document.querySelector('.calculate').style.backgroundColor = 'hsl(25, 98%, 40%)';
      document.querySelector('.buttons').style.backgroundColor = 'hsl(0, 5%, 81%)';
      document.querySelectorAll('.btn').forEach(element => element.style.color = 'hsl(60, 10%, 19%)');
      const elements = document.querySelectorAll('.tri-state-toggle input');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'hsl(25, 98%, 40%)';
      }

    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor = 'hsl(240, 75%, 9%)';
      document.querySelectorAll('.btn').forEach(element => element.style.backgroundColor = 'hsl(268, 47%, 21%)');
      document.querySelectorAll('.btn').forEach(element => element.style.borderBottom = '3px solid #871c9c');
      document.getElementsByTagName("body")[0].style.color = 'hsl(52, 100%, 62%)';
      document.querySelector('.tri-state-toggle').style.backgroundColor = '#160628';
      document.querySelector('.result').style.backgroundColor = 'hsl(268, 75%, 9%)';
      document.querySelector('.result').style.color = '#ffe53d';
      document.querySelector('.clear').style.backgroundColor = 'hsl(290, 70%, 36%)';
      document.querySelector('.delete').style.backgroundColor = 'hsl(290, 70%, 36%)';
      document.querySelector('.clear').style.borderBottom = ('3px solid hsl(285, 91%, 52%)');
      document.querySelector('.delete').style.borderBottom = ('3px solid hsl(285, 91%, 52%)');
      document.querySelector('.calculate').style.borderBottom = ('3px solid hsl(177, 92%, 70%)');
      document.querySelector('.calculate').style.backgroundColor = 'hsl(176, 100%, 44%)';
      document.querySelector('.buttons').style.backgroundColor = 'hsl(268, 75%, 9%)';
      document.querySelectorAll('.btn').forEach(element => element.style.color = 'hsl(52, 100%, 62%)');
      const elements = document.querySelectorAll('.tri-state-toggle input');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'hsl(176, 100%, 44%)';
      }
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
