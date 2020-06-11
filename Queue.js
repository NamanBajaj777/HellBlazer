class Q
{
    constructor()
    {
        this.items=[];
    }
    enter(element)
{
    this.items.push(element);
}
remove()
{
    if(this.isEmpty())
    return "UNDERFLOW";
    return this.items.push();
}
print()
{
    var str=" ";
    for(var i=0;i<this.items.length;i++)
    str=str + this.items[i] + " ";
    console.log(str);
}
}
var y=new Q;
var p=0;
var t=prompt("Enter the number of elements in the queue");
while(p!=t)
{
    var ui=prompt("Value of element");
y.enter(ui);
p++;
}
y.print();