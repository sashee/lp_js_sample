window.onload = function () {
    var lp=numeric.solveLP([-9,-5,-6,-4],
        [[6,3,5,2],[1,0,0,0],[-1,0,0,0],[0,1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,-1,0],[0,0,0,1],[0,0,0,-1]],
        [10,1,0,1,0,1,0,1,0]
    );
    var solution=numeric.trunc(lp.solution,1e-12);
    console.log(solution);
};