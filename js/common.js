$(function () {
  var attr = {
      color: ko.observable("azure"),
      changeColor: changeColor    
  };

  function changeColor() {
      attr.color("#" + (Math.random() * 0xFFFFFF<<0).toString(16));
      toastr.info(attr.color());
  }

  ko.applyBindings(attr);
})();
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }

function displayData(elementName, areaOfGeometry){
    const container = document.getElementById('div-container');

    const div = document.createElement("div");
    div.className = 'd-flex justify-content-start gap-2 mt-2';
    div.innerHTML = `
    <p>${serial}.</p>
    <p>${elementName}</p>
    <p>${areaOfGeometry}</p>
    <button class="btn btn-primary" style="font-size: 10px;">Convert to m2</button>
    `;
    container.appendChild(div);
}

// common function to get data using getElementById method
function getData(id1, id2, id3) {
    // get the data from htm using id
    const elementName = document.getElementById(id1).innerText;
    const baseOfGeometry = document.getElementById(id2).innerText;
    const heightOfGeometry = document.getElementById(id3).innerText;
  
    const pd = {
        elementName: elementName,
        baseOfGeometry: baseOfGeometry,
        heightOfGeometry: heightOfGeometry,
    };
    return pd;
  }