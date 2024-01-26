// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
  if (Math.random() > .5) {
    return true;
  } else {
    return false;
  }
  // suggested solution is: 
  // return Math.randiom() > 0.5;
  // which is a better solution because I'm saying "if this is true, return true, if this is false, return false", while theirs sais "return if this is true or false." More succinct. They did this for shipCanFire() and isDestroyed() as well.
}

function shipCanFire() {
  if (shipHealth > 0 && shipAmmo > 0) {
    return true;
  } else {
    return false;
  }
}

function reloadShip() {
  shipHealth--;
  shipAmmo += 3;
}

function isDestroyed(health) {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }

}

