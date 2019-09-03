const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth-800;
canvas.height = window.innerHeight-100;

var list = [];
var Input={};

function start() {
    list.push(new Obstacle(500,150));
    list.push(new Bob(90,70));
    list.push(new Bob(700,400));

    Input = {"w":false,"a":false,"s":false,"d":false,"up":false,"left":false,"down":false,"right":false, " ":false}

    MainLoop();
}

function MainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(MainLoop);

    for(i=0;i<list.length;i++){
        list[i].update();
        context.drawImage(list[i].texture,list[i].x,list[i].y, list[i].scaleX, list[i].scaleY);
    }
}

start();
window.addEventListener( "keydown", keyPressedDOWN, true);
window.addEventListener( "keyup", keyPressedUP, true);

function keyPressedDOWN(event) {
    var key = event.key;
    Input[key] = true;
}
function keyPressedUP(event) {
    var key = event.key;
    Input[key] = false;
}

function hasCollided(objA, clsstype)
{
    var collision = false;
    for(var i = 0; i < list.length; i++)
    {
        if(list[i] instanceof clsstype)
        {
            if(objA.x < list[i].x + list[i].scaleX &&
                objA.x + objA.scaleX > list[i].x &&
                objA.y < list[i].y + list[i].scaleY &&
                objA.y + objA.scaleY > list[i].y)
            {
                collision = true;
            }
        }
    }
    return collision;
}


