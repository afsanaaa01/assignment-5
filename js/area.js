let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function(){
    serial += 1;
    const firstElementName = document.getElementById('first-name').innerText;
    const triangleBaseField = document.getElementById('triangle-base-field');
    const triangleBaseValue = triangleBaseField.value;
    const triangleHeightField = document.getElementById('triangle-height-field')
    const triangleHeightValue = triangleHeightField.value;

    const areaOfTriangle = 0.5 * parseFloat(triangleBaseValue) * parseFloat(triangleHeightValue);

    if (isNaN(triangleBaseValue) || isNaN(triangleHeightValue))
    {
        return alert("please enter any valid number");
    }
    else if (
        triangleBaseValue == "" ||
        triangleHeightValue == "" ||
        triangleBaseValue <= 0 ||
        triangleHeightValue <= 0
      ) {
        return alert("please enter any valid number");
      }

    displayData(firstElementName, areaOfTriangle);
    triangleBaseField.value ='';
    triangleHeightField.value = '';

    disabledButton("btn-triangle");


})

document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const secondElementName = document.getElementById('second-name').innerText;
    const rectangleBaseField = document.getElementById('rectangle-base-field')
    const rectangleBaseValue = rectangleBaseField.value;
    const rectangleHeightField = document.getElementById('rectangle-height-field')
    const rectangleHeightValue = rectangleHeightField.value;

    const areaOfRectangle = parseFloat(rectangleBaseValue) * parseFloat(rectangleHeightValue);
    
    if (isNaN(rectangleBaseValue) || isNaN(rectangleHeightValue))
    {
        return alert("please enter any valid number");
    }
    else if (
        rectangleBaseValue == "" ||
        rectangleHeightValue == "" ||
        rectangleBaseValue <= 0 ||
        rectangleHeightValue <= 0
      ) {
        return alert("please enter any valid number");
      }

    displayData(secondElementName, areaOfRectangle);
    rectangleBaseField.value ='';
    rectangleHeightField.value = '';

    disabledButton("btn-rectangle");

})

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial += 1;
    //get data from html using id
    const pd = getData("third-name", "parallelogram-base", "parallelogram-height");
    const areaOfParallelogram = parseFloat(pd.baseOfGeometry) * parseFloat(pd.heightOfGeometry);
    //show the data
    displayData(pd.elementName, areaOfParallelogram);
    disabledButton("btn-parallelogram");

})

document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial += 1;
    //get data from html using id
    const pd = getData("fourth-name", "rhombus-d1", "rhombus-d2");
    const areaOfRhombus = 0.5 * parseFloat(pd.baseOfGeometry) * parseFloat(pd.heightOfGeometry);
    //show the data
    displayData(pd.elementName, areaOfRhombus);

    disabledButton("btn-rhombus");

})

document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    //get data from html using id
    const pd = getData("fifth-name", "pentagon-length", "pentagon-base");

    const areaOfPentagon = 0.5 * parseFloat(pd.baseOfGeometry) * parseFloat(pd.heightOfGeometry);
    //show the data
    displayData(pd.elementName, areaOfPentagon);

    disabledButton("btn-pentagon");

})


document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    //get data from html using id
    const pd = getData("sixth-name", "ellipse-a", "ellipse-b");
    const areaOfEllipse = (3.14 * parseFloat(pd.baseOfGeometry) * parseFloat(pd.heightOfGeometry)).toFixed(2);
    //show the data
    displayData(pd.elementName, areaOfEllipse);

    disabledButton("btn-ellipse");

})