var choice = prompt("    Welcome to the Perimeter of Shapes Calculator App!\n\nPlease choose a shape to calculate its perimeter:\n1. Circle\n2. Rectangle\n3. Triangle\n4. Square\n5. Parallelogram\n6. Pentagon\n7. Hexagon\n8. Heptagon\n9. Octagon\n10. Nonagon\n11. Exit");
while (choice != 11) {
    switch (choice) {
        case "1":
            var radius = parseFloat(prompt("Enter the radius of the circle:"));
            var perimeter = 2 * Math.PI * radius;
            alert("The perimeter of the circle is: " + perimeter.toFixed(2));
            break;
        case "2":
            var length = parseFloat(prompt("Enter the length of the rectangle:"));
            var width = parseFloat(prompt("Enter the width of the rectangle:"));
            var perimeter = 2 * (length + width);
            alert("The perimeter of the rectangle is: " + perimeter.toFixed(2));
            break;
        case "3":
            var side1 = parseFloat(prompt("Enter the first side of the triangle:"));
            var side2 = parseFloat(prompt("Enter the second side of the triangle:"));
            var side3 = parseFloat(prompt("Enter the third side of the triangle:"));
            var perimeter = side1 + side2 + side3;
            alert("The perimeter of the triangle is: " + perimeter.toFixed(2));
            break;
        case "4":
            var side = parseFloat(prompt("Enter the side length of the square:"));
            var perimeter = 4 * side;
            alert("The perimeter of the square is: " + perimeter.toFixed(2));
            break;
        case "5":
            var base = parseFloat(prompt("Enter the base of the parallelogram:"));
            var side = parseFloat(prompt("Enter the side length of the parallelogram:"));
            var perimeter = 2 * (base + side);
            alert("The perimeter of the parallelogram is: " + perimeter.toFixed(2));
            break;
        case "6":
            var side = parseFloat(prompt("Enter the side length of the pentagon:"));
            var perimeter = 5 * side;
            alert("The perimeter of the pentagon is: " + perimeter.toFixed(2));
            break;
        case "7":
            var side = parseFloat(prompt("Enter the side length of the hexagon:"));
            var perimeter = 6 * side;
            alert("The perimeter of the hexagon is: " + perimeter.toFixed(2));
            break;
        case "8":
            var side = parseFloat(prompt("Enter the side length of the heptagon:"));
            var perimeter = 7 * side;
            alert("The perimeter of the heptagon is: " + perimeter.toFixed(2));
            break;
        case "9":
            var side = parseFloat(prompt("Enter the side length of the octagon:"));
            var perimeter = 8 * side;
            alert("The perimeter of the octagon is: " + perimeter.toFixed(2));
            break;
        case "10":
            var side = parseFloat(prompt("Enter the side length of the nonagon:"));
            var perimeter = 9 * side;
            alert("The perimeter of the nonagon is: " + perimeter.toFixed(2));
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
    choice = prompt("Please choose a shape to calculate its perimeter:\n1. Circle\n2. Rectangle\n3. Triangle\n4. Square\n5. Parallelogram\n6. Pentagon\n7. Hexagon\n8. Heptagon\n9. Octagon\n10. Nonagon\n11. Exit");
}