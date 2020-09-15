var str = 'Mamas {number} Empire'
var dict = {
    number: 6
};

stringFormat(str, dict);

function stringFormat(str ,stringsDict )
{
    var keyInString='';
    var saveWord = false;
    var startIndex;
    var endIndex;
    var newStr = '';
    var addToNewStr= true;

    
    for(var i=0; i < str.length; i++)
    {
        if(str[i] == '}')
        {
            endIndex = i;
            saveWord = false;
        }
        if(saveWord == true)
        {
            keyInString += str[i];
        }
        if(str[i] == '{')
        {
            startIndex = i;
            saveWord = true;
        }

    }

    for(var j=0; j < str.length; j++)
    {
        if(str[j] == '{')
        {
            addToNewStr = false;
        }
        if(addToNewStr == true)
        {
            newStr += str[j];
        }
        if(str[j] == '}')
        {
            addToNewStr = true;
            newStr += stringsDict[keyInString]+ '';
        }

    }
    console.log(newStr);

}

class Point {
    x;
    y;
    constructor(x,y)
    {
        this.x= x;
        this.y = y;
    }
    
}

class Shape{
    area;
    color;
    location;
    constructor(area, color, location)
    {
        if (new.target === Shape) {
            throw new TypeError("Cannot construct Abstract instances directly");
          }
        this.area=area;
        this.color=color;
        this.location=location;
    }

    print() {
        
    }

    move(){
        location.x = 20;
        location.y = 20;
        console.log("Location: "+ [location.x, location.y]);
    }


    
}

class Circle extends Shape{
    name;
    radius;
    constructor(area, color, location, name, radius)
    {
        super(area, color, location);
        this.name=name;
        this.radius=radius;
    }

    print(){
        console.log("Shape: "+ this.name);
        console.log("Area: "+ this.area);
        console.log("Color: "+ this.color);
        console.log("Radius: "+ this.radius);

    }


}

class Squre extends Shape{
    name;
    length;
    width;
    constructor(area, color, location, name, length,width)
    {
        super(area, color, location);
        this.name=name;
        this.length = length;
        this.width= width;
    }

    print(){
        console.log("Shape: "+ this.name);
        console.log("Area: "+ this.area);
        console.log("Color: "+ this.color);
        console.log("Length: "+ this.length);
        console.log("Width: "+ this.width);

    }

}

let point = new Point(6,8);
let circle = new Circle(20,'red',[point.x,point.y],'circle',4.8);
circle.print();
circle.move();
let squre = new Squre(30,'blue',[point.x+1,point.y],'squre',7.8)
squre.print();
squre.move();





