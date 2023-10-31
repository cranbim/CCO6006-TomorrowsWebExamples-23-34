let dave=(function (){
    //javascript//
    console.log('I am an iife')
    function publicDoathing(){
        console.log('doing a thing')
    }

    return {
        doathing: publicDoathing
    };
})()




