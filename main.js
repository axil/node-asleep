function asleep(s, func){
    var e = new Date().getTime() + (s * 1000);
    
    function onTick(){
        if(new Date().getTime() <= e)
            process.nextTick(onTick);
        else
            func();
    }
    onTick()
}

module.exports = asleep
