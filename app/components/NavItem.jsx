import Link from "next/link";

export default function NavItem({label, path, dataTest}) {
  return (
    <Link data-test={dataTest} href={path}>
      {label}
    </Link>
  );
}

// function isLandscape(width, height) {
//     if ( width > height) {
//       console.log('landscpae')
//     } else {
//       console.log("portraite")
//     }
//   }

//   isLandscape(23, 434);

function checkSpeed(speed) {
  speedLimit = 70;
  if (speed < 70) {
    console.log("ok");
  } else if (speed > speedLimit && speed.Math) {
    console.log("speed limit exceeded");
  }
}

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPenalty = 5;

  if (speed < speedLimit + kmPenalty) {
    console.log("ok");
  } else {
    const points = Math.floor((speed - speedLimit) / kmPenalty);
    if (points >= 12) console.log("License suspended");
    else console.log(`Points: ${points}`);
  }
}

checkSpeed(75);
