(function () {
  var targetText = "Collect Airdrops";
  var replaceText = "ONGOING";

  function clickParentOfText(textToFind) {
    var allElements = document.getElementsByTagName("*");
    var found = false;

    for (var i = 0; i < allElements.length; i++) {
      var element = allElements[i];

      // Check all child nodes of the element
      for (var j = 0; j < element.childNodes.length; j++) {
        var child = element.childNodes[j];

        if (
          child.nodeType === Node.TEXT_NODE &&
          child.nodeValue.trim() === textToFind
        ) {
          // Click the parent element
          // Follow HOT
          if (child.nodeValue.trim() === targetText) {

            // Select the element with the class .css-1jfqau5
          var backdropElement = document.querySelector('.css-1jfqau5');

          // Check if the element exists to avoid errors
          if (backdropElement) {
              // Create a new click event
              var clickEvent = new MouseEvent('click', {
                  bubbles: true,
                  cancelable: true,
                  view: window
              });

              // Dispatch the click event on the selected element
            backdropElement.dispatchEvent(clickEvent);
            // then redirect to https://launchpad.binance.com/en/
            
            // settimeout


            setInterval(function () {

            window.location.href = "https://launchpad.binance.com/en/";
            }, 5000);

            console.log('Clicked on element with class .react-modal-sheet-backdrop')
          } else {
              console.log('Element with class .react-modal-sheet-backdrop not found.');
          }
            // Select the element with the class .css-1jfqau5
          var backdropElement = document.querySelector('.css-1eafc');

          // Check if the element exists to avoid errors
          if (backdropElement) {
              // Create a new click event
              var clickEvent = new MouseEvent('click', {
                  bubbles: true,
                  cancelable: true,
                  view: window
              });

              // Dispatch the click event on the selected element
            backdropElement.dispatchEvent(clickEvent);
            console.log('Clicked on element with class .react-modal-sheet-backdrop')
          } else {
              console.log('Element with class .react-modal-sheet-backdrop not found.');
          }

            
          } else {
            element.click();
          }
          found = true;
          //   alert("Found the text: " + textToFind);
          break;
        }
      }

      if (found) {
        break;
      }
    }
  }

    function replaceTextInPage(newText) {
      let findElementByClass = document.getElementsByClassName("css-1v046vv");
      if (findElementByClass.length > 0) {
        findElementByClass[0].innerText = newText;
      }
  }


  // Set an interval to check every second
  setInterval(function () {

    let pollBoard = document.querySelector('.css-c5llwn');
    // check if child element is svg
    if (pollBoard) {
      let pollBoardChild = pollBoard.children[0];
      if (pollBoardChild.tagName === "svg") {
        // click the parent element
        // pollBoard.click();
        let parentDiv = document.querySelector('.css-hb9u37');
        parentDiv.click();
      }

    }
    clickParentOfText(targetText);
    // datetime YYYY-MM-DD HH:MM:SS
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let datetime = "ONGOING @ " + year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    replaceTextInPage(datetime);
  }, 1000);
})();
