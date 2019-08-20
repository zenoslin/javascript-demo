let map = null;
let flight_path = null;
let flight_path_length = null;
let rocketSnap = null;
let rocketBBox = null;

window.onload = function() {
  map = Snap("#box");
  flight_path = map
    .path(
      "M209.4,229.73c-37.78,16.94-119.57-21.6-134.16-71.92C56.14,92,94.3,32.95,139.9,12.05S297.28-10.47,359,86.28,338.78,316.24,244.29,327C155.61,337,14,264.93,14,163.67"
    )
    .attr({ fill: "none", stroke: "none" });
  flight_path_length = Snap.path.getTotalLength(flight_path);
  rocketSnap = map.select("#rocket");
  rocketBBox = rocketSnap.getBBox();
  rocketSnap.transform(
    "translate(195.34116250728928,79.64620479532084) rotate(-114.12758477709049,14.045000076293945,149.6699981689453)"
  );
};

function handleStart() {
  console.log("map", map);
  console.log("flight_path", flight_path);
  console.log("flight_path_length", flight_path_length);
  let path = flight_path;
  let path_length = flight_path_length;

  Snap.animate(
    0,
    path_length,
    function(step) {
      let moveToPoint = Snap.path.getPointAtLength(path, step);
      let x = moveToPoint.x - rocketBBox.width / 2;
      let y = moveToPoint.y - rocketBBox.height / 2 - 120;
      rocketSnap.transform(
        `translate(${x},${y}) rotate(${moveToPoint.alpha - 90},${
          rocketBBox.cx
        },${rocketBBox.cy})`
      );
      console.log(
        `translate(${x},${y}) rotate(${moveToPoint.alpha - 90},${
          rocketBBox.cx
        },${rocketBBox.cy})`
      );
    },
    5000,
    mina.easeout,
    function() {
      console.log("complete");
    }
  );
}
