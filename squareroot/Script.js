function a()
{
    var input = document.getElementById('input').value;
    var square;
    var output = document.getElementById('output');
    square = input*input;
    console.log(square);
    document.getElementById('output').innerHTML = square;
}